# YouTube Clone

This project is a YouTube clone built using React, designed to simulate the look and functionality of the popular video platform. The project focuses on implementing a responsive design, dynamic data handling, and user-friendly interface.

## Project Structure

The project directory is organized as follows:

```
youtube-clone
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ChannelCard.jsx
│   │   ├── ChannelDetail.jsx
│   │   ├── Feed.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SearchFeed.jsx
│   │   ├── Sidebar.jsx
│   │   ├── VideoCard.jsx
│   │   ├── VideoDetail.jsx
│   │   ├── Videos.jsx
│   │   └── index.js
│   ├── utils/
│   │   ├── fetchFromAPI.js
│   │   └── constants.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
├── .env
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them.

## Features

- **Navbar**: Includes a search bar and navigation links.
- **Sidebar**: Displays categories and quick links for navigation.
- **Video Cards**: Showcases videos with thumbnail, title, and channel details.
- **Feed**: Displays a collection of videos based on selected categories.
- **Search Functionality**: Dynamically fetches videos based on search input.
- **Responsive Design**: Optimized for different screen sizes.

## Utils

The `utils` folder contains helper functions and constants:
- `fetchFromAPI.js`: Handles API requests to fetch video data.
- `constants.js`: Stores reusable constants such as base API URLs.

## Deployment

This project is deployed on GitHub Pages.
Access it here: [https://farieb.github.io/alx-final-project/](https://farieb.github.io/alx-final-project/)

To deploy manually, follow these steps:
1. Run `npm run build` to create a production build.
2. Push the build folder to the `gh-pages` branch of your GitHub repository.

## Learn More

To learn more about React, check out the [React documentation](https://reactjs.org/).

