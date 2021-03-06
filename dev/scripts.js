
var spacer = ""
var foods = TAFFY([
{
  name: "avocado",
  isitfit : true,
  carbs : "carbs = sucky",
  energy : "10000",
  tagOne : "Best",
  tagTwo : "Super Food",
  reference : "http://www.google.com",
  referenceTitle : "google.com"


},
{
  name: "coke",
  isitfit : false,
  carbs : "9 million",
  energy : "zero",
  tagOne : "worst",
  tagTwo : "unhealthy",
  reference: "http://www.google.com",
  referenceTitle: "google.com"
}]);
function saveToList(event) {
    if (event.which == 13 || event.keyCode == 13) { // as the user presses the enter key, we will attempt to save the data
        mainInput = document.getElementById('mainInput').value.trim();
        if (mainInput.length > 0) {
          //runs function to clear all output containers
          clearFunc();
          //hides all images
          document.getElementById("fit-img").className = "hidden";
          document.getElementById("bullshit-img").className = "hidden";
          document.getElementById("help-img").className = "hidden";
            //call main getter function
              myFunc();
              document.getElementById('mainInput').value = "";
              //show two cards
              document.getElementById('results-card').className = "";
              document.getElementById('stats-card').className = "";




        } else {
          return false;
        };
};
};

function myFunc(){

  //gets user entry
  var userRawInput = document.getElementById("mainInput").value;
  //remove all capitalization
  var userInput = userRawInput.toLowerCase();
  //ensures the food exists in the DB
  var testFor = foods({name: userInput}).count();
  var foodName = foods({name: userInput}).first().name;
  var carbCount = foods({name: userInput}).first().carbs;
  var fitStatus= foods({name: userInput}).first().isitfit;
  var energyCount = foods({name: userInput}).first().energy;
  var tagFirst = foods({name: userInput}).first().tagOne;
  var tagSecond = foods({name: userInput}).first().tagTwo;
  var refLink = foods({name: userInput}).first().reference;
  var refTitle = foods({name: userInput}).first().referenceTitle;

//check number of records to ensure the food has been added to the db
if (testFor >= 1){
  console.log('exists');
  //call exists if there are 1 or more record of the food
fitSet(fitStatus);
carbSet(carbCount);
energySet(energyCount);
tagSet(tagFirst, tagSecond);
linkSet(refLink, refTitle);
//print food name in result title box
document.getElementById('food-title').innerHTML = userInput.toUpperCase();
}
  else {
    console.log('does not exist');
    document.getElementById("help-img").className = "";

    //call doesNotExist to alert user
    doesNotExist();

  }

};

//displays images for fit or bullshit
function fitSet(fitStatus){
  if (fitStatus == true){

    document.getElementById('fit-title').innerHTML = "FIT";
    document.getElementById("fit-img").className = "";

  }else if (fitStatus == false){

    console.log('bullshit');
    document.getElementById('fit-title').innerHTML = "BULLSHIT";
    document.getElementById("bullshit-img").className = "";

  };


};

//changes the number of carbs in 'carb-count'
function carbSet(carbCount){
document.getElementById('carb-count').innerHTML = carbCount;

};

//changes the number of energy in energy-count
function energySet(energyCount){

  document.getElementById('energy-count').innerHTML = energyCount;
};
//displays tags
function tagSet(tagOne, tagTwo){
  document.getElementById('tag-one').innerHTML = tagOne;
  document.getElementById('tag-two').innerHTML = tagTwo;

};
//displays link to reference
function linkSet(refLink, refTitle){
  document.getElementById('ref-link').innerHTML = "<a target =\"_blank\"href=\"" + refLink + "\">" + refTitle + "</a>";


};
//displays a snackbar (MDL component) with a link to tweet
function doesNotExist(){
  document.getElementById('fit-title').innerHTML = "????";


  var snackbarContainer = document.querySelector('#demo-snackbar-example');
  var handler = function(event) {
  window.open('http://twitter.com/fitorbs', '_blank');
};
        var data = {
          message: 'This Food Has Not Been Added Yet',
          timeout: 4000,
          actionHandler: handler,
          actionText: 'Tweet Me'
        };
        snackbarContainer.MaterialSnackbar.showSnackbar(data);

};
//clears all fields
function clearFunc(){
  document.getElementById('food-title').innerHTML = spacer;
  document.getElementById('fit-title').innerHTML = spacer;
  document.getElementById('carb-count').innerHTML = spacer;
  document.getElementById('energy-count').innerHTML = spacer;
  document.getElementById('tag-one').innerHTML = spacer;
  document.getElementById('tag-two').innerHTML = spacer;
  console.log('cleared');



};
