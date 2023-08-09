// Initialization of Variables for MadLibs
const proper_noun = document.getElementById("proper_noun");
const verb1 = document.getElementById("verb1");
const verb2 = document.getElementById("verb2");
const adjective = document.getElementById("adjective");
const object = document.getElementById("object");
const solution = document.getElementById("solution");
const generate = document.getElementById("button");


// Detecting invalid entrys
function invalidInput() {
    if(proper_noun.value == ""){
        return "a noun";
    }else if (verb1.value == ""){
        return "the first verb";
    }else if (verb2.value == ""){
        return "the second verb";
    }else if (adjective.value == ""){
        return "an adjective";
    }else if(object.value == ""){
        return "an object";
    }
}

// generator of MadLib
function generateMadLib(){
    if (typeof invalidInput() === 'string'){
        solution.innerHTML = `You must provide ${invalidInput()}`;
    }else{
        solution.innerHTML = `It was True Aggie Night. ${proper_noun.value} nervously waited
        for a kiss, all the while wondering why they didn't ${verb1.value} and ${verb2.value} earlier that day 
        in preparation for the kiss. Luckily the other person happened to not care and wanted to kiss them because 
        they liked that ${proper_noun.value} owned a ${object.value}. ${proper_noun.value} 
        ran ${adjective.value} to the podium and got their first kiss! It was a True Aggie Night success.`; 
    }
}