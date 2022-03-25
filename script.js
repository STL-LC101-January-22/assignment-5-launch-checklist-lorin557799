// Write your JavaScript code here!
/*
1. the window loads, and the function begins
2. myFetch is called, it fetches the JSON data from the provided URL, and stores the data in listedPlanetResponse
3. After the fetch is complete, the second function runs, the JSON data stored in listedPlanetsResponse is passed in as the 'result' parameter
4. The 'result' gets stored in the listedPlanets variable declared previously
5. the third function now triggers
6. this function will handle the pickPlanet() call.
7. pickPlanet will use a random number selector to pick a planet out of the JSON data at random.
8. The returned result needs to be stored in a variable to be used in our HTML generation
9. with that data, we need to pass in the values to the addDetinationInfo function call.
10. addDestinationInfo updates the HTML page with the planet info.
*/

const { myFetch } = require("./scriptHelper");

const scriptHelper = new require('./scriptHelper.js')

const { formSubmission } = require("./scriptHelper");

const { myFetch } = require("./scriptHelper"); // this imports myFetch from scriptHelper

window.addEventListener("load", function() {
    let listedPlanets;
    console.log("test");
    let form = this.document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        console.log(event);
        //from submission help function 
    });
                // add eventListener on submit form form submition the submit button, DOM form
                // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   this.document.getElementById("formSubmit").addEventListener("click", function() {
       console.log("Welllll");
      // alert("All textboxes need information!");
        //console.log(myFetch());
       let listedPlanetsResponse = myFetch();
        //console.log(listedPlanetsResponse);

       listedPlanetsResponse.then(function (result) {
           listedPlanets = result; // <--- result is the returned JSON data from myFetch()
           console.log(listedPlanets);
       }).then(function () {
           // here will be our function call for pickPlanet(). Store in a variable similar to how myFetch() was stored. Pass the listedPlanets variable into the pcikPlanets function 
           //pickPlanet()
           console.log(listedPlanets);       
    
           // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       })
    
   });
});