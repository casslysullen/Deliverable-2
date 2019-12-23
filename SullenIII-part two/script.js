alert(
    'Welcome! Please answer some questions to assist your travels.'
)

// const vacationType=["musical", "tropical", "adventurous"];
// const destination=["New Orleans", "Beach Vacation in Mexico", "Whitewater Rafting the Grand Canyon"];
// const travelSuggestion=["First Class", "Helicopter", "Charter Flight"];

// const group1= [1, 2];
// const group2= [3, 4, 5];
// const group3= [6, 7, 8, 9, 10 ];
// const groupSize=[ group1, group2, group3];

// const combined= vacationType + groupSize;

// gather input
const vacationType = prompt("What kind of trip would you like to go on? musical, tropical, or adventurous?");
const groupSelection = prompt("How many are in your group?");

// optionally sanitize
const sanitizedTripChoice = vacationType.toLowerCase()

// create judgements
const destination = pickDestination(sanitizedTripChoice)
const travelSuggestion = pickTravel(groupSelection)

// show judgements to user
const result=`Since you are a group of ${groupSelection} going on a ${vacationType} you should take a ${travelSuggestion} to ${destination}` 
console.log(result)


function pickDestination(tripChoice) {
    if (tripChoice === "musical") {
        return "New Orleans"
    }

    if (tripChoice === "tropical") {
        return "Beach Vacation in Mexico"
    }

    if (tripChoice === "adventurous") {
        return "Whitewater Rafting the Grand Canyon"
    }
}


function pickTravel(groupSize) {
    // what about bad inpupts? negative numbers? 
    if (groupSize <= 2) {
        return "First Class"
    }
    
    if (groupSize >= 3 && groupSize <=5) {
        return "Helicopter"
    }
    
    return "Charter Flight"
}