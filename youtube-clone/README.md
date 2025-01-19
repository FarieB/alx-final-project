# Getting Started with Create React Appgh

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Setting Up the Project

### 1. **Creating the React App**
To begin building the project, I used `create-react-app` with the TypeScript template. Run the following command to set up the app:

```bash
npx create-react-app youtube-clone --template typescript

## FILE STRUCTURE

src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.css
│   ├── Sidebar/
│   │   ├── Sidebar.tsx
│   │   └── Sidebar.css
│   ├── VideoList/
│   │   ├── VideoList.tsx
│   │   └── VideoList.css
│   └── VideoPlayer/
│       ├── VideoPlayer.tsx
│       └── VideoPlayer.css
├── App.tsx
├── index.tsx
├── styles.css
└── db.json (for mock API)


# Navbar Component

## Description
The `Navbar` component is a key element of the YouTube clone, providing navigation for the users. It includes elements for branding, search functionality, and user access. The component consists of three main sections:

1. **Logo and Menu Icon**: Displays the website logo and a menu icon for expanding or collapsing the sidebar.
2. **Search Box**: Allows users to search for videos with a search input field and search icon.
3. **User Icon**: Displays the user profile icon.

## Features
- **Responsive**: The navbar adapts to different screen sizes.
- **Search Functionality**: Users can search for videos with the integrated search box.
- **User Profile**: A placeholder for user profile access, showing the user icon.

## Installation
Ensure that you have the necessary assets (such as images and icons) in the `/images` directory for proper display of logos and icons.

1. Clone the repository and navigate to the `components/Navbar` directory.
2. Install dependencies if required by your project setup.
3. Import the `Navbar` component into your main `App.tsx` file:

```tsx
import Navbar from './components/Navbar/Navbar';


# Sidebar Component

## Description
The `Sidebar` component is a vertical navigation bar that provides quick access to key sections of the YouTube clone. It contains a list of shortcuts, subscribed channels, and other navigation links.

### Key Features:
- **Shortcuts**: Quick access links for navigating to various sections of the site.
- **Subscribed Channels**: Displays a list of channels the user is subscribed to.
- **Collapsible**: The sidebar can be collapsed into a smaller version for a more compact layout, toggled via the menu icon in the navbar.

## Installation
Ensure that the images for shortcuts and subscribed channels are placed in the `/images` directory.

1. Clone the repository and navigate to the `components/Sidebar` directory.
2. Import the `Sidebar` component into your main `App.tsx` file:

```tsx
import Sidebar from './components/Sidebar/Sidebar';


# VideoList Component

## Description
The `VideoList` component is responsible for displaying a list of video thumbnails along with basic information such as the video title, channel name, and view count. This component serves as the main content section for the video listing page, offering users an easy way to browse videos.

### Key Features:
- **Video Thumbnails**: Displays clickable thumbnails of videos.
- **Video Information**: Shows video title, channel name, and view count beneath each thumbnail.
- **Dynamic Layout**: The layout adapts to different screen sizes, arranging videos in a responsive grid.
- **Interactive**: Clicking on a video thumbnail will navigate to the `VideoPlayer` page, where users can watch the video.

## Installation
1. Clone the repository and navigate to the `components/VideoList` directory.
2. Import the `VideoList` component into your main `App.tsx` file:

```tsx
import VideoList from './components/VideoList/VideoList';


# VideoPlayer Component

## Description
The `VideoPlayer` component is responsible for rendering the video player interface. It allows users to watch a video, view the title, video description, and interact with video controls such as like, comment, and subscribe buttons. This component is key to providing a video playback experience in the YouTube clone.

### Key Features:
- **Video Playback**: The component embeds a video player and plays the video upon loading.
- **Video Information**: Displays video title, channel name, view count, and description.
- **Publisher Information**: Shows the publisher's profile picture and basic info.
- **Comment Section**: Allows users to add and view comments.
- **Responsive Layout**: Adapts to different screen sizes for an optimized viewing experience.

## Installation
1. Clone the repository and navigate to the `components/VideoPlayer` directory.
2. Import the `VideoPlayer` component into your main `App.tsx` file:

```tsx
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

