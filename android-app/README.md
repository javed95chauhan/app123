# Retro Calculator - Native Android App

A native Android application that replicates the retro-futuristic quantity price calculator with animated robot character.

## Features

- **Native Android App** - Built with Kotlin and Jetpack Compose
- **Retro-Futuristic Design** - Exact replica of the original web app design
- **Animated Robot Character** - Custom-drawn robot with animations
- **Haptic Feedback** - Enhanced user experience with vibration feedback
- **Responsive UI** - Optimized for various Android screen sizes
- **Material 3 Design** - Modern Android design principles with retro theming

## Technical Specifications

- **Gradle Version**: 8.13.0
- **Minimum SDK**: API 36
- **Target SDK**: API 36
- **Kotlin Version**: 2.0.0
- **Compose BOM**: 2024.12.01

## Project Structure

```
android-app/
├── app/
│   ├── src/main/
│   │   ├── java/com/retro/calculator/
│   │   │   ├── MainActivity.kt
│   │   │   ├── ui/
│   │   │   │   ├── components/
│   │   │   │   │   ├── SplashScreen.kt
│   │   │   │   │   ├── CalculatorScreen.kt
│   │   │   │   │   ├── RobotCharacter.kt
│   │   │   │   │   └── CalculatorInputs.kt
│   │   │   │   ├── screens/
│   │   │   │   │   └── MainScreen.kt
│   │   │   │   └── theme/
│   │   │   │       ├── Color.kt
│   │   │   │       ├── Theme.kt
│   │   │   │       └── Type.kt
│   │   │   ├── data/
│   │   │   │   └── CalculatorState.kt
│   │   │   └── utils/
│   │   │       └── HapticFeedback.kt
│   │   ├── res/
│   │   │   ├── font/ (Retro fonts)
│   │   │   ├── mipmap/ (App icons)
│   │   │   ├── values/
│   │   │   └── xml/
│   │   └── AndroidManifest.xml
│   └── build.gradle.kts
├── gradle/
├── build.gradle.kts
└── settings.gradle.kts
```

## Setup Instructions

1. **Open in Android Studio**:
   - Open Android Studio
   - Select "Open an existing project"
   - Navigate to the `android-app` folder
   - Click "Open"

2. **Sync Project**:
   - Android Studio will automatically sync the project
   - Wait for Gradle sync to complete

3. **Build and Run**:
   - Connect an Android device or start an emulator
   - Click the "Run" button or press Shift+F10
   - The app will install and launch on your device

## Key Components

### 1. SplashScreen
- Animated robot character with floating animation
- Retro-styled logo with glowing effects
- Grid background pattern
- Smooth transition to calculator

### 2. CalculatorScreen
- Split-screen layout (robot + calculator)
- Step-by-step calculation process
- Real-time robot responses
- Haptic feedback on interactions

### 3. RobotCharacter
- Custom Canvas drawing
- Multiple animation states
- 360° rotation confirmation animation
- Color-changing eyes and pulsing antennas

### 4. Calculator Logic
- Quantity input with validation
- Unit selection (kg, gram, liter, etc.)
- Price input and calculation
- Result display with formatting

## Animations

- **Robot Float**: Continuous floating animation
- **Eye Scanning**: Color-changing eye animation
- **Antenna Pulse**: Pulsing antenna lights
- **Arm Wave**: Arm movement animation
- **Confirm Spin**: 360° rotation on calculation
- **Logo Glow**: Text glow effects
- **Button Pulse**: Interactive button animations

## Haptic Feedback

The app includes haptic feedback for:
- Button presses
- Step transitions
- Calculation completion
- Error states

## Fonts

The app uses the same retro fonts as the original:
- **Orbitron**: For titles and headings
- **Russo One**: For secondary headings
- **Share Tech Mono**: For body text and displays

## Color Scheme

Exact replica of the original retro color palette:
- **Primary**: #6B88D3 (Retro Blue)
- **Accent**: #EFEFBB (Retro Yellow)
- **Dark Blue**: #00008B
- **Background Dark**: #0A0A1A
- **Background Card**: #1A1A2E

## Building APK

To build a release APK:

1. In Android Studio, go to **Build > Generate Signed Bundle / APK**
2. Select **APK**
3. Create or select a keystore
4. Choose **release** build variant
5. Click **Finish**

The APK will be generated in `app/build/outputs/apk/release/`

## Requirements

- Android Studio Arctic Fox or newer
- Android SDK API 36
- Kotlin 2.0.0 support
- Gradle 8.13.0

## Notes

- The app is designed for portrait orientation only
- All animations and interactions match the original web app
- Haptic feedback requires VIBRATE permission (already included)
- The app works offline and doesn't require internet connectivity