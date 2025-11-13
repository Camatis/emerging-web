# MyProject - Web version

This is a small React + Vite web app created from the Mobile app source. It mirrors the mobile screens (Landing, Login, Dashboard) and navigation.

Quick start (Windows PowerShell):

```powershell
cd Web
npm install
npm run dev
```

Notes
- This web project was added alongside the existing Mobile app and does not modify mobile files.
- If you want to build for production: `npm run build` and serve the `dist` folder.

Project structure
- src/
  - main.jsx       - app entry
  - App.jsx        - app shell
  - navigation/    - AppNavigator.jsx using react-router
  - screens/       - LandingScreen.jsx, LoginScreen.jsx, DashboardScreen.jsx
  - styles.css
  - store/         - zustand stores (useAuthStore.js)

If you'd like, I can:
- add TypeScript support
- wire up real authentication
- port more mobile-specific components

Zustand
-------
This project includes a tiny auth store using `zustand` at `src/store/useAuthStore.js`. The Login screen sets a simple `user` object on sign-in and the Dashboard reads and clears it.