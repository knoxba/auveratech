# auveratech
Auvera Technologies business website

I designed this website for my business, Auvera Technologies.
See below for a visual tree of the website source files and a comment for each folder:

/*
webapp
|
---- auto                                 // The 'auto' folder consists of batch files for automated webpage rendering.
       |
       ---- #EXECUTE DEPLOY_SITE.bat      // This batch file executes the below batch files to convert all .scss files in the css folder
       ---- compileAboutStyles.bat
       ---- compileContactStyles.bat
       ---- compileLoginStyles.bat
       ---- compileMainStyles.bat
       ---- compileNewsStyles.bat
       ---- compileServicesStyles.bat
       ---- compileSharedStyles.bat
|
---- build                                // The 'build' folder consists of rendered .css files that comprise of the website's current state.
       |
       ---- current-build-about.css
       ---- current-build-contact.css
       ---- current-build-login.css
       ---- current-build-main.css
       ---- current-build-news.css
       ---- current-build-shared.css
       ---- current-build-about.css.map
       ---- current-build-contact.css.map
       ---- current-build-login.css.map
       ---- current-build-main.css.map
       ---- current-build-news.css.map
       ---- current-build-shared.css.map
|
---- scss                                 // The 'scss' folder consists of .scss files before the render.
       |
       ---- _animation-styles.scss
       ---- _mobile-styles.scss
       ---- _shared-styles.scss
       ---- about-styles.scss
       ---- contact-styles.css
       ---- login-styles.css
       ---- main-styles.scss
       ---- news-styles.css
       ---- services-styles.css
|
---- html
       |
       ---- about.html
       ---- contact.html
       ---- login.html
       ---- main.html
       ---- news.html
       ---- services.html
|
---- images
|
---- js
       |
       ---- angular
       ---- react
       ---- jquery-about.js
       ---- jquery-contact.js
       ---- jquery-login.js
       ---- jquery-main.js
       ---- jquery-news.js
       ---- jquery-services.js
       ---- scanner.js
       ---- standard-about.js
       ---- standard-contact.js
       ---- standard-login.js
       ---- standard-main.js
       ---- standard-news.js
       ---- standard-services.js
|
---- notes
       |
       ---- notes.txt
|
---- php
       |
       ---- welcome.php
|
---- pull
       |
       ---- main-styles.css
       ---- services-styles.css

*/
