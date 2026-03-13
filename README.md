# React Fitness Application

<img src="https://i.ibb.co/xMyrsYZ/project-fitness-app.png" alt="React Fitness Application" width="700" height="400"/>

A modern fitness application built with React and Vite, featuring exercise database and video search functionality powered by RapidAPI.

## Features

- 🏋️ Browse thousands of exercises with detailed information
- 🎯 Filter exercises by body part, equipment, and target muscles
- 🎥 Watch related exercise videos from YouTube
- 📱 Fully responsive design with Material-UI
- ⚡ Fast development and build with Vite

## Tech Stack

- **React 18** - Frontend library
- **Vite 7** - Build tool and dev server
- **Material-UI (MUI)** - Component library
- **React Router** - Navigation
- **RapidAPI** - Exercise data and YouTube search

## Prerequisites

- Node.js 16+
- npm or yarn
- RapidAPI account (for API keys)

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/techgirldiaries/TheFitLife.git
   cd TheFitLife
   ```

2. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and add your RapidAPI key:

   ```env
   VITE_RAPID_API_KEY=your_api_key_here
   ```

   Get your API key from [RapidAPI](https://rapidapi.com/)

4. **Start development server**

   ```bash
   npm run dev
   ```

   The app will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Security

- ⚠️ **Never commit your `.env` file** - it contains sensitive API keys
- ✅ `.env` is already in `.gitignore`
- ✅ Use `.env.example` as a template for required variables
- 📝 See [SECURITY_SETUP.md](SECURITY_SETUP.md) for detailed security information

## API Information

This project uses two RapidAPI endpoints:

- **ExerciseDB** - Exercise database with 1000+ exercises
- **YouTube Search** - Find related exercise videos

## License

Licensed under the PolyForm Noncommercial License - Commercial use is prohibited

Copyright (c) 2025 Oluwakemi Obadeyi
