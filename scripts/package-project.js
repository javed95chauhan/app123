#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import archiver from 'archiver';

const pipelineAsync = promisify(pipeline);

// Files and directories to exclude from the package
const excludePatterns = [
  'node_modules',
  'dist',
  '.git',
  '.DS_Store',
  '*.log',
  'package-lock.json',
  '.env',
  '.env.local',
  '.env.development',
  '.env.production',
  'coverage',
  '.nyc_output',
  '.cache',
  'tmp',
  'temp',
  '*.tmp',
  '*.temp'
];

function shouldExclude(filePath) {
  const relativePath = path.relative(process.cwd(), filePath);
  
  return excludePatterns.some(pattern => {
    if (pattern.includes('*')) {
      // Handle wildcard patterns
      const regex = new RegExp(pattern.replace(/\*/g, '.*'));
      return regex.test(relativePath);
    }
    
    // Handle directory and exact file matches
    return relativePath.startsWith(pattern) || relativePath === pattern;
  });
}

async function createProjectPackage() {
  const projectName = 'retro-calculator-project';
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
  const outputFileName = `${projectName}-${timestamp}.zip`;
  
  console.log(`📦 Creating project package: ${outputFileName}`);
  
  try {
    // Create output stream
    const output = createWriteStream(outputFileName);
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression
    });

    // Listen for archive events
    output.on('close', () => {
      const sizeInMB = (archive.pointer() / 1024 / 1024).toFixed(2);
      console.log(`✅ Package created successfully!`);
      console.log(`📁 File: ${outputFileName}`);
      console.log(`📊 Size: ${sizeInMB} MB`);
      console.log(`📋 Total files: ${archive.pointer()} bytes`);
    });

    archive.on('warning', (err) => {
      if (err.code === 'ENOENT') {
        console.warn('⚠️  Warning:', err.message);
      } else {
        throw err;
      }
    });

    archive.on('error', (err) => {
      throw err;
    });

    // Pipe archive data to the file
    archive.pipe(output);

    // Add files to archive
    function addDirectory(dirPath, archivePath = '') {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const archiveItemPath = path.join(archivePath, item);
        
        if (shouldExclude(fullPath)) {
          console.log(`⏭️  Skipping: ${archiveItemPath}`);
          continue;
        }
        
        const stats = fs.statSync(fullPath);
        
        if (stats.isDirectory()) {
          addDirectory(fullPath, archiveItemPath);
        } else {
          console.log(`📄 Adding: ${archiveItemPath}`);
          archive.file(fullPath, { name: archiveItemPath });
        }
      }
    }

    // Start adding files from current directory
    addDirectory(process.cwd());

    // Finalize the archive
    await archive.finalize();
    
  } catch (error) {
    console.error('❌ Error creating package:', error.message);
    process.exit(1);
  }
}

// Run the packaging script
createProjectPackage();