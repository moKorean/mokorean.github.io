****************************************
*   Geunwon Mo (B00954162)             *
*   mmo@dal.ca                         *
*   CSCI1170 Winter23 - Assignment 3   *
****************************************

@ Descriptions
- Assignment 3 is improved assignment 2 using CSS, JS

@ Documentation
- This assignment also hosted at [https://mokorean.github.io]
- This assignment is responsive design webpage using media quries and grid.
    - Mobile screen width is considered 600px.
        - Work page will show different design of table on mobile sized browser.
    - Tablet screen width is considered 1000px.
    - Desktop screen width is considered more than 1000px.
        - About page will re-organized section on desktop sized browser.
    - The photogallery will show different grid items on different sized browser. used flex.
- The colour changer is located in navigation bar with 3 dots.    
- common.js
    - This js file will add 'go to home' link to the top name area.
    - This js file will add 'ColourChanger' to 3 dots in the navigation bar.
        - changeColor function will change 3 different colour schemes including darkmode to the web page.
    - common.js also handle email links (<a href="mailto:">) convert to textarea.
- photogallery.js
    - This js file will add a gallery function to the life.html page.
    - the old gallery worked as opening a big picture in a new window, but the new gallery using js will open big images into the same window like a modal popup.
    - The photogallery has 2 type of element, video and picture. this JS will handle both types.
- search.js
    - This js file will add a search text in current page function to search form.
    - Usually, search widgets search the whole website using server-side languages. However, as we have not learned about them yet, I will make it work on the page locally.
    - Limitation: find text in innerHTML, so tag itself's content might be found, if try to find tagname, it will occur bug., e.g. div
    - Search text and highlight them with yellow background and scroll to the first searched text.

@ Assets 
- Images
    - Favicon, Facebook, LinkedIn, and Instagram icons for shortcuts
    - Background Images, Profile images
    - Photos of me will be included.
- Videos
    - Youtube videos
    - Videos of me will be included
- Audios
    - Some license free MP3 files from the internet

@ File structure (using tree : https://cli-ck.io/tree-directory-visualisation/)
.
├── CodeReview.pdf
├── Design3Devices.pdf
└── Web
    ├── README.txt
    ├── index.html
    ├── life.html
    ├── resource
    │   ├── contents
    │   │   ├── audios
    │   │   │   ├── seduction_jazz.mp3
    │   │   │   └── seduction_jazz.webp
    │   │   ├── pics
    │   │   │   ├── 1.jpg
    │   │   │   ├── 2.jpg
    │   │   │   ├── 3.jpg
    │   │   │   ├── 4.jpg
    │   │   │   ├── 5.jpg
    │   │   │   ├── 6.jpg
    │   │   │   ├── 7.jpg
    │   │   │   ├── 8.jpg
    │   │   │   └── 9.jpg
    │   │   ├── thumbs
    │   │   │   ├── 1.jpg
    │   │   │   ├── 2.jpg
    │   │   │   ├── 3.jpg
    │   │   │   ├── 4.jpg
    │   │   │   ├── 5.jpg
    │   │   │   ├── 6.jpg
    │   │   │   ├── 7.jpg
    │   │   │   ├── 8.jpg
    │   │   │   └── 9.jpg
    │   │   └── videos
    │   │       ├── bmw.mp4
    │   │       ├── cancun.mp4
    │   │       └── parking.mp4
    │   ├── css
    │   │   └── common.css
    │   ├── images
    │   │   ├── favicon.ico
    │   │   ├── icon_fb.png
    │   │   ├── icon_fb_dark.png
    │   │   ├── icon_insta.png
    │   │   ├── icon_insta_dark.png
    │   │   ├── icon_linkedin.png
    │   │   ├── icon_linkedin_dark.png
    │   │   ├── nowplaying.png
    │   │   ├── profile_circle.png
    │   │   └── top_bg.jpg
    │   └── js
    │       ├── common.js
    │       ├── photogallery.js
    │       └── search.js
    └── work.html

11 directories, 43 files


@ References

[1]Download Social media Icons bundle Facebook Instagram Snapchat LinkedIn and other logo buttons. Vecteezy. Retrieved April 1, 2023 from https://www.vecteezy.com/vector-art/2661796-social-media-icons-bundle-facebook-instagram-snapchat-linkedin-and-other-logo-buttons
‌
[2]FreeGroove. 2022. Seduction Jazz. from https://pixabay.com/music/search/genre/smooth%20jazz/

[3]Ministry of Employment and Labor in Korea. 2019. I asked Kakao Bank employees! "What does work-life balance mean to you?" (17 June 2019). from https://www.youtube.com/watch?v=iwisWKgjUcs

[4]Google Fonts. N.D. Retrieved from https://fonts.google.com/specimen/Quicksand/about

[5]Maciej Duszyński. 2023. Resume Header: Examples & Templates for Great Headings. Retrieved from https://resumelab.com/resume/header

[6]Dailymotion support. N.D. How to preserve the player aspect ratio on a responsive page. Retrieved from https://faq.dailymotion.com/hc/en-us/articles/360022841393-How-to-preserve-the-player-aspect-ratio-on-a-responsive-page#:~:text=In%20the%20HTML%2C%20put%20the,56.25%25%20%3D%2016%3A9

[7]coolaj86. 2011. Escape string for use in Javascript regex. Stack Overflow. Retrieved April 1, 2023 from https://stackoverflow.com/a/6969486

[8]Amin Jafari. 2017. javascript - Need help changing appendChild to replaceChild. Stack Overflow. Retrieved April 1, 2023 from https://stackoverflow.com/a/45787231

[9]Søren D. Ptæus. 2018. JavaScript scrollIntoView smooth scroll and offset. Stack Overflow. Retrieved April 2, 2023 from https://stackoverflow.com/a/49860927
‌
[10]Silvia O’Dwyer. 2021. How to Create Neon Text With CSS. CSS-Tricks. Retrieved from https://css-tricks.com/how-to-create-neon-text-with-css/

[11]Adobe. Adobe Color. Adobe.com. Retrieved from https://color.adobe.com/ko/explore

[12]How can I get query string values in JavaScript? Stack Overflow. Retrieved from https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript