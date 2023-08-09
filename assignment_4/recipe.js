// initializing variables from html elements
const recipeIngredients = document.getElementById("recipe-ingredients-input");
const recipeInstructions = document.getElementById("recipe-instructions-input");
const recipeInstructionList = document.getElementById("recipe-instructions-list");
const recipeIngredientList = document.getElementById("recipe-ingredients-list");
const recipeIngredientsButton = document.getElementById("recipe-ingredients-button");
const recipeInstructionsButton = document.getElementById("recipe-instructions-button");
const saveButton = document.getElementById("save");
const resetButton = document.getElementById("reset");
const error = document.getElementById("error");


// parts of recipe object
const title = document.getElementById("recipe-title-input");
const ingredients = [];
const instructions = [];


// Ingredient Section Event Listeners and Functions
function addIngredient() {
  const ingredient = recipeIngredients.value;
  if (ingredient) {
    recipeIngredientList.innerHTML += `<li class="data-ingredient" tabindex="0" aria-label="Press enter or space to remove the ingredient ${ingredient}">${ingredient}</li>`;
    ingredients.push(ingredient); 
    recipeIngredients.value = "";
    recipeIngredientList.classList.remove("empty");
    recipeIngredientList.classList.add("list");
  }
}

recipeIngredients.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addIngredient();
    }
  });

recipeIngredientsButton.addEventListener("keypress", (e) => {
    if (e.key === "Enter"|| e.key === " ") {
        addIngredient();
    }
});

recipeIngredientsButton.addEventListener("click", () => {
    addIngredient();
});

recipeIngredientList.addEventListener("keypress", (e) => {
    if (e.key === "Enter"|| e.key === " ") {
        e.target.remove();
        ingredients.splice(e.target, 1);
        // add and remove border
        if (recipeIngredientList.children.length === 0) {
            recipeIngredientList.classList.remove("recipeList");
            recipeIngredientList.classList.add("empty");
        }
    }
});


// Instruction Section Event Listeners and Fucntions
function addInstruction() {
  const instruction = recipeInstructions.value;
  if (instruction) {
    recipeInstructionList.innerHTML += `<ol class="data-instruction" tabindex="0" aria-label="Press enter or space to remove the instruction ${instruction}">${instruction}</ol>`;
    instructions.push(instruction);
    recipeInstructions.value = "";
    recipeInstructionList.classList.remove("empty");
    recipeInstructionList.classList.add("list");
  }
}

recipeInstructions.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addInstruction();
    }
  });

recipeInstructionsButton.addEventListener("click", () => {
    addInstruction();
});

recipeInstructionsButton.addEventListener("keypress", (e) => {
    if (e.key === "Enter"|| e.key === " ") {
        addInstruction();
    }
});

recipeInstructionList.addEventListener("keypress", (e) => {
    if (e.key === "Enter"|| e.key === " ") {
        e.target.remove();
        instructions.splice(e.target, 1);
        // add and remove border
        if (recipeInstructionList.children.length === 0) {
            recipeInstructionList.classList.remove("recipeList");
            recipeInstructionList.classList.add("empty");
        }
    }
});


// Add event listener for reset and save
resetButton.addEventListener("keypress", (e) => {
    if (e.key === "Enter"|| e.key === " ") {
        reset();
    }
});

resetButton.addEventListener("click", () => {
    reset();
});

saveButton.addEventListener("keypress", (e) => {
    if (e.key === "Enter"|| e.key === " ") {
        saveRecipe();
    }
});

saveButton.addEventListener("click", () => {
    saveRecipe();
});

// Event Functions 
function saveRecipe() {
    const recipe = createRecipe();
    writeRecipeToFile(recipe);
    reset();
}

function reset() {
    title.value = "";
    recipeIngredients.value = "";
    recipeInstructions.value = "";
    recipeIngredientList.innerHTML = "";
    recipeInstructionList.innerHTML = "";
    recipeIngredientList.classList.remove("list");
    recipeIngredientList.classList.add("empty");
    recipeInstructionList.classList.remove("list");
    recipeInstructionList.classList.add("empty");
    ingredients = [];
    instructions = [];
}

function createRecipe() {
    if(title.value === ""|| ingredients.length === 0 || instructions.length === 0) {
        error.innerHTML = "Please fill out all fields";
        return;
    }
    console.log(title.value)
  const recipe = {
    title: title.value,
    ingredients: ingredients,
    instructions: instructions,
  };
  return recipe;
}

// If save button is blurred, remove error message
saveButton.addEventListener("blur", () => {
    error.innerHTML = "";
});