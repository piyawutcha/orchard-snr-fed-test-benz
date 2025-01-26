# Orchard - Senior Frontend Developer - Interface Development Test
Senior Frontend Developer - Interface Development Test
Author: Benz Chantasrisawat
Figma design: https://www.figma.com/design/lhZkJqHX9jYtVgfiSJxqKx/Tasteology?node-id=1-62&t=mZ3O7OEhfyEqgVWz-1

Technologies
* Bootstrap and SCSS
  * Use Bootstrap to help styling for responsive design. The other reason is it's widely use and easy to find the resources to help.
  * Use SCSS because it's coming with Bootstrap
* ES6
  * Main reason to choose ES6 because of Template Literals. I've created the HTML from javascript and this will make it easier to create HTML and also make the code more readable.
* Gulp
  * Choose Gulp because it's not complicated to set up

## Files/Folder Structure
assets
|- builds // Contains build files from gulp, (styles.css, tasteology-js-min.js, taseteology-js.js)
|- images // Contains images using in the page
  |- SectionOne
  |- SectionTwo
js // Contains all JS files
  |- SectionOne // JS file for WHAT DOES COOKING MEAN? section
  |- SectionTwo // JS file for TASTE THE COLOURS section
  |- shared // JS file for shared elements eg.headline text, modal, etc.
  |- utils // JS file for utilities function
  |- index.js // main JS function
scss // Contains all scss files
index.html // index.html file, please open this file to open Tasteology page


## Components
### WHAT DOES COOKING MEAN?
* Each image in this section will display in a modal on click

### TASTE THE COLOURS
* Each card can be clicked, javascript function will capture click and do the console.log()
* This sections can contains any length of cards.

There're some interactivity/animation display on the element that be able to click.