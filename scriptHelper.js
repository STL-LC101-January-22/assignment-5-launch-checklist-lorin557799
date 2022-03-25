// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let target = document.getElementById("missionTarget");
    target.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src=${imageUrl}>
                `;
}

function validateInput(testInput) {
    if (testInput == "") {
        return 'Empty';
    }
    if (isNaN(parseInt(testInput)) == false) {
        return "Is a Number";
    }
    if (isNaN(testInput) == true) {
        return "Not a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let status = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    pilotStatus.innerText = `Pilot ${pilot} Ready`;
    copilotStatus.innerText = `Co-pilot ${copilot} Ready`;

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
        return;
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
        return;
    }

    if (fuelLevel > 10000 && cargoLevel < 10000) {
        status.innerText = "Shuttle is ready for launch";
        status.style.color = "rgb(65, 159, 106)";
        list.style.visibility = "hidden"
    } else if (fuelLevel < 10000 || cargoLevel > 10000) {
        status.innerText = "Shuttle not ready for launch";
        status.style.color = "rgb(199, 37, 78)";
        list.style.visibility = "visible";
    }

    if (fuelLevel < 10000) {
        fuelStatus.innerText = "Fuel level too low for launch";
    } else {
        fuelStatus.innerText = "Fuel level high enough for launch";
    }

    if (cargoLevel > 10000) {
        cargoStatus.innerText = "Cargo mass too high for launch";
    } else {
        cargoStatus.innerText = "Cargo mass low enough for launch";
    }

}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
}

addDestinationInfo();

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
