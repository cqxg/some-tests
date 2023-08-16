Create a React JS application that shows a list of 7 numbered checkboxes at the beginning. 
Each checkbox serves as a toggle for displaying a component. As new components are added, they appear at the end of the displayed list. 
The components (240x240 pixels) retrieve data from http://rekrutacjaweb.gigatechspace.net/letters/{checkbox_number} every 2 seconds, where each component displays a letter from this data. 

The API serves 7 different texts depending on the checkbox number. Each component should display the last 30 letters/missing_letter_marks.
The application should be responsive, with a minimum resolution of 800x600 pixels.
TypeScript, the newest version of React, and preprocessed (and nice to eye) CSS are preferred.