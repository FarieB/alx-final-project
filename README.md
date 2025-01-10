## YouTube Front-End Clone Project Description

 This is a front-end clone of YouTube, designed to showcase the skills and knowledge acquired in HTML, CSS, and JavaScript. The project emphasizes responsive design, interactive elements, and modern web development techniques.

## Features Responsive Design

Adapts seamlessly to various screen sizes using CSS media queries. Interactive Elements: Functional navigation bar, collapsible sidebar, and video player controls. Clean UI: A polished and intuitive user interface for easy navigation. Deployment: Hosted on GitHub Pages for easy access and demonstration.

## PROJECT ROOT 

| |-- index.html (Homepage for the application) |-- video-link.html (Video detail page) |-- style.css (Global styles for the application) |-- script.js (JavaScript for interactivity) | |-- assets/ (Holds all media assets) | |-- images/ (Images used throughout the site) | |-- logo.png (YouTube Clone logo) | |-- banner.png (Hero section banner image) | |-- [other image files...] | |-- README.md (Project documentation)

## Technologies Used 

- HTML5: Structure and semantics. 
- CSS3: Layout design using CSS Grid, Flexbox, and media queries. 
- JavaScript (ES6): Adds dynamic interactions and event handling. 
- GitHub Pages: Deployed project for public access.

## Development Process Planning

Drafted a design inspired by YouTube’s interface. Implementation: Built the page structure with semantic HTML. Styled the layout using CSS, ensuring responsiveness. Added interactive features with JavaScript. Testing and Debugging: Tested across multiple browsers and screen sizes to ensure compatibility. Deployment: Published on GitHub Pages for demonstration.

## Version Control Workflow

- **Commit Frequency:** Changes are committed frequently to ensure a clear history of progress.
- **Branching:** Features and fixes are developed on separate branches and merged into the main branch via pull requests.
- **Commit Messages:** Each commit message is descriptive, summarizing the changes made.

## Play container

- Adding "controls autoplay" for the video.
- Adding tags to the video.
- Adding video description, views, and icons for like, dislike, share and saving the video.

## More Video Features

- channel name
- channel description
- comments
- search input text box

## Previous Comments

- Adding previous comments from streamers
- Adding comments reaction features like- likes, dislike, reply and all replies.
- Adding profiles for people who are commenting.

## Right-Sidebar

- Video thumbnails from the main html file (index.html) to appear as an option list on the video-link.html page's right sidebar.

## Right-Sidebar-Extention

- Added more video thumbnails from the index.html page

## Mobile Responsiveness- Video-link.html

- Media Query Definition:
@media (max-width:900px): This targets devices or screen widths that are 900 pixels wide or smaller.
- Flexbox Adjustments:
.play-video and .right-sidebar: Both elements are set to take up 100% of the width (flex-basis: 100%;). This ensures that they stack vertically rather than side-by-side, which is more suitable for narrow screens.
- Padding Adjustments:
.video-description: The padding on the left is set to 0, aligning the content flush with the container for better use of limited screen space.
- Margin Adjustments:
.play-video .play-video-info: The left margin is removed (margin-left: 0), and small margins are added on the right (margin-right: 15px) and top (margin-top: 15px). These changes help in maintaining a neat layout without unnecessary whitespace.
- These changes collectively make the layout more user-friendly on smaller screens by rearranging elements to fit better, ensuring readability, and maintaining a clean visual structure.
