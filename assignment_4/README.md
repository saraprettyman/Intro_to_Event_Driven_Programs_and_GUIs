# Assignment 4
**Programming Language(s) Used**   
JavaScript, CSS, HTML

**Objective**   
Build an application that allows for exporting HTML files created by the user's inputs. Additionally, implement the principles of accessibility for web applications.

**Task**   
Create receipe cards by allowing the user to add a recipe title, ingredients, and instructions. Give the user the flexibility to delete ingredients by clicking on them and via keyboard shortcuts. Similarly, give the user the flexibility to do the same for saving the recipe card. The recipe card should contain the whole HTML code, JavaScript, and CSS necessary to display it.

**Implementation**   
This was completed by initially focusing on the user interface for the index page. Create 3 user input sections, where the inputs are visible to the user and are simultaneously being added to a HTML file for installation later. Ensure that each input section has the correct accessibility features. Additional features were added such as to remove items; both from the UI and from the temporary storage. A reset button resetsthe UI and the recipe card that was in the creation process. Next, the process involved implementing a save button that creates the proper recipe card using the given [writeRecipeToFile.js](writeRecipeToFile.js) file from the professor. Lastly, stress testing involved creating a recipe with and without the accessibility features to ensure the process is aestetically appealing and accessibility-friendly.