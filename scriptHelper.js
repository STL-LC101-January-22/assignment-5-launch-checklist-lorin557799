// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    /*
    1. using getElementById, select the portion of index.html that requires the update.
    2. using a template literal, update the html with the provided values in the parameters. ``${name}
    */
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   
    if (isNaN(testInput)) {
        return "Not a number";
    } else if (testInput === "") {
        return "Empty";
    } else {
        return "Entries are validated"
    }
    //let x = document.forms(pilot, copilot, fuelLevel, cargoLevel).validateInput;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let cargoLevel = document.getElementsByName("cargoMass");
    let copilot = document.getElementsByName("copilotName");
    let fuelLevel = document.getElementsByName("fuelLevel");
    let pilot = document.getElementsByName("pilotName");
    
    if (validateInput(copilot.value) === "Empty" || (validateInput(pilot.value) === "Empty") || (validateInput(cargoLevel.value) === "Empty") === (validateInput(fuelLevel.value) === "Empty")) {
        window.alert("All input boxes required data.");
    } if (validateInput(cargoLevel.value) === "Not a number" || (validateInput(fuelLevel.value) === "Not a number")) {
        window.alert("Values entered should be a number.");
    } if (validateInput(copilot.value) === "Is s number" || (validateInput(pilot.value) === "Is a number")) {
        window.alert("Names need to be letters not numbers.");
    } 
   
}

async function myFetch() {

    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json().then(function(json) {
            console.log("Ive been hit!");
            return json;
        });        
    });        
    return planetsReturned;
}

function pickPlanet(planets) {
    let randomNumber = Math.floor(Math.random()*5);
}
    //random number generator..

addDestinationInfo();

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
