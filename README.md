# Retro Calculator Project

A retro-futuristic quantity price calculator with an animated robot character.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5000`

## Available Scripts

- `npm run dev` - Start the full-stack development server
- `npm run dev:client` - Start only the Vite client development server
- `npm run dev:server` - Start only the Express server
- `npm run build` - Build the project for production
- `npm run start` - Start the production server
- `npm run preview` - Preview the built project

## VS Code Setup

This project is fully compatible with VS Code. After extracting:

1. Open the project folder in VS Code
2. Install recommended extensions when prompted
3. Run `npm install` in the integrated terminal
4. Use `npm run dev` to start the development server

## Project Structure

```
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared types and schemas
├── dist/            # Built files
└── package.json     # Dependencies and scripts
```

## Features

- Retro-futuristic UI design
- Animated robot character
- Quantity price calculations
- Responsive mobile design
- Offline functionality with service worker
- TypeScript throughout

## Troubleshooting

If you encounter any issues:

1. Make sure Node.js v18+ is installed
2. Delete `node_modules` and run `npm install` again
3. Check that port 5000 is available
4. For Windows users, use Git Bash or WSL for better compatibility

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers