# Auvera Technologies Website
Auvera Technologies business website

I designed this website for my business, Auvera Technologies.
See below for a visual tree of the website source files and a comment for each folder:

## I. Folder Structure

       1. Webapp
              a.     auto.render
              b.     build
              c.     deprecate
              d.     html
              e.     images
              f.     js
              g.     notes
              h.     php
              i.     scss

### A. auto.render

Contains the following files:

       - #EXECUTE DEPLOY_SITE.bat     
       - compileAboutStyles.bat
       - compileContactStyles.bat
       - compileLoginStyles.bat
       - compileMainStyles.bat
       - compileNewsStyles.bat
       - compileServicesStyles.bat
       - compileSharedStyles.bat

The auto.render folder contains batch (.bat) files for Windows commands for compiling website styles using SASS. Each webpage has its own .bat file,
however, the "#EXECUTE DEPLOY_SITE.bat" is the master batch that executes all. Run this batch when you want to compile all changes made in the 'scss' folder.


### B. build

Contains the following files:

       - current-build-about.css
       - current-build-contact.css
       - current-build-login.css
       - current-build-main.css
       - current-build-news.css
       - current-build-shared.css
       - current-build-about.css.map
       - current-build-contact.css.map
       - current-build-login.css.map
       - current-build-main.css.map
       - current-build-news.css.map
       - current-build-shared.css.map

The build folder contains finalized .css files ans linked maps from successful renders. This is the current status of styles when the website is launched.


### C. deprecate

Contains the following files:

       - main-styles.css
       - services-styles.css

The deprecate folder are for temporarily suspended files no longer linked to the website; pending removal until verified that it no longer serves a purpose.


### D. html

Contains the following files:

       - about.html
       - contact.html
       - login.html
       - main.html
       - news.html
       - services.html

The html folder houses the website's structural reference.


### E. images

Contains the following files:

       - Logo
       - background.jpg

The images folder contains a directory of pictures of Auveratech's logo files and a standard background image.


### F. js

Contains the following files:

       - angular
       - react
       - jquery-about.js
       - jquery-contact.js
       - jquery-login.js
       - jquery-main.js
       - jquery-news.js
       - jquery-services.js
       - scanner.js
       - standard-about.js
       - standard-contact.js
       - standard-login.js
       - standard-main.js
       - standard-news.js
       - standard-services.js

The js folder holds the back-end JavaScript files, separating jQuery from basic JavaScript. The scanner.js is an important piece for a sample badge scanner.


### G. notes

Contains the following files:

       - notes.txt

The notes folder contains a text file outlining excess code blocks for possible reuse in the future.


### H. php

Contains the following files:

       - welcome.php

The php folder contains a php script. At this time, the php scipt is not implemented.


### I. scss

Contains the following files:

       - _animation-styles.scss
       - _mobile-styles.scss
       - _shared-styles.scss
       - about-styles.scss
       - contact-styles.css
       - login-styles.css
       - main-styles.scss
       - news-styles.css
       - services-styles.css

The scss folder contains .scss files that are edited and are compiled from the auto.render folder.

