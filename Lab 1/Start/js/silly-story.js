// VARIABLE DECLARATIONS

/* STEP 1: Declare and initialize variables
- customName for the name field
- randomize for the button
- story for the paragraph that outputs the final story
*/

// For the name input field
let customName = document.getElementById('name'); 

  // For the button
let randomize = document.querySelector('.randomize');  

// For the paragraph that outputs the final story
let story = document.querySelector('.story');  

/* STEP 3: Create the variable that contains the story string that will be modified - use var storyText to containt the following:
'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
*/

// This variable contains the story string that will modify the storyText \\

var storyText = 'It was 94 Fahrenheit outside, so :insertx: went for a walk.When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

/* STEP 4: Create three arrays, insertX, insertY, and insertZ, assigning them the following array values respectively:
Donald Trump, Jackie Chan, Santa Claus
Area 51, Death Valley, Aruba
spontaneously combusted, rapidly sublimated, evaporated instantly
*/

// These arrays will hold values that will be randomly selected and inserted into the storyText \\
let insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
let insertY = ['Area 51', 'Death Valley', 'Aruba'];
let insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];


// FUNCTIONS

/* STEP 2: have a look at the following function - if you call this 
function and pass it an array, it will return one of the 
elements of that array randomly */
function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
}

// returns a random name from the array

let names = ['James', 'Gabe', 'Sandra', 'Jewls'];
let randomNames = randomValueFromArray(names); 

/* STEP 6: Review the partially complete result() function below */
function result() {
	function result() {

// I declared a new variable to hold the modified story here \\
let newStory = storyText;
	  
// I replaced the placeholders with random values here \\
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);
	  
// Here i replaced ':insertx:', ':inserty:', and ':insertz:' with the random values \\ 
newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':insertx:', xItem); 
// Did it here again for the second occurrence \\
newStory = newStory.replace(':inserty:', ytem);
newStory = newStory.replace(':insertz:', zItem);
	  
// Here a custom name is provided, replace 'Bob' with the custom name \\ 
if (customName.value !== '') {
	let name = customName.value;
newStory = newStory.replace('Bob', name);
}
	  
// Updated the story paragraph text here \\
story.textContent = newStory;

// I made the story visible if hidden \\ 
story.style.visibility = 'visible'; 
}
	  

// STEP 7: Create a new variable called newStory and set it to the value of storyText - 
// we don't want to overwrite the original story!

// This creates a newStory and sets the value to the storyText \\ 
let newStory = storyText;

// STEP 8: Use the randomValueFromArray() function to generate a value 
// for each of three new variables - xItem, yItem, and zItem
// Call up the function and for each variable, pass it the array from which 
// to grab a random string - for example if insertW was an array of strings, 
// I would type:
// var wItem = randomValueFromArray(insertW);

// Here i used randomValueFromArray function to help me generate random values \\

// Random value from insertX array
let aItem = randomValueFromArray(insertX); 

// Random value from insertY array
let bItem = randomValueFromArray(insertY);  

// Random value from insertZ array
let cItem = randomValueFromArray(insertZ);  
	

/* STEP 9: Replace the three placeholders in the newStory 
string — :insertx:, :inserty:, and :insertz: — with the strings stored in 
xItem, yItem, and zItem. Each time, be sure to update the variable newStory 
(with +=). You might need to do one of the above replacements twice! */

// Here i created a variable to set a value of storyText \\
	function result() {
// Here i generated values from the arrays below \\
let newStory = storyText;
// Random value from insertX array \\
let xItem = randomValueFromArray(insertX);
// Random value from insertY array \\
let yItem = randomValueFromArray(insertY);
// Random value from insertZ array \\
let zItem = randomValueFromArray(insertZ);

// Here i replaced the first occurance of ':insertx:' \\
newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':insertx:', xItem);

// Here i replace the second occurrence \\
newStory = newStory.replace(':inserty:', yItem);
newStory = newStory.replace(':insertz:', zItem);

// Here a custom name is provided to replace 'Bob' with a custom name \\
if (customName.value !== '') {
	newStory = newStory.replace('Bob', customName.value);
}

// Here update the story paragraph text \\ 
story.textContent = newStory;
story.style.visibility = 'visible';
}
 
/* STEP 10: If the user has typed a name in the customName field, replace the name 
'Bob' in the story with whatever they typed */
	if(customName.value != '') {
		newStory = newStory.replace('Bob', customName.value);
	}

/* STEP 11: If the metric radio button has been checked, we need to convert the 
temperature and mass numbers in the story */

// Here i added a metric radio button with id 'metric' \\
if (document.getElementById('metric').checked) {

// Here i converted temperature from Fahrenheit to Celsius \\ 
newStory = newStory.replace(/94 Fahrenheit/, '34 Celsius'); 

// Here i added mass from pounds to kilograms \\ 
newStory = newStory.replace(/300 pounds/, '136 kilograms'); 
}

if(document.getElementById("metric").checked) {

// STEP 11a: Create a variable called weight and convert the 300lbs to kgs (1lb = 0.453592kg)

// Here you can convert 300 pounds to kilograms \\ 
let pounds = 300;
// / Convert pounds to kilograms \\
let weight = pounds * 0.453592;  

// STEP 11b: Replace the string 300 pounds with the updated weight in kg

// Here i replaced '300 pounds' with the updated weight in kilograms \\ 
newStory = newStory.replace('300 pounds', `${weight.toFixed(2)} kilograms`);

// STEP 12a: Create a variable called temp and convert °F to °C ... the formula for conversion is °C = (°F - 32) x 5/9

// Here i convert Fahrenheit to Celsius \\ 
let fahrenheit = 94;  
let temp = (fahrenheit - 32) * 5 / 9;  

// STEP 12b: Replace the string '94 fahrenheit' with the updated temperature in °C

// Here i replaced '94 Fahrenheit' with the updated temperature in Celsius \\
newStory = newStory.replace('94 Fahrenheit', `${temp.toFixed(2)} Celsius`);
}

/* STEP 13: Make the textContent property of the story variable (which references 
the paragraph) equal to newStory */

// Here i updated the story paragraph with the new story \\ 
story.textContent = newStory;

// The following line makes the paragraph visible
story.style.visibility = 'visible';
}

// EVENT LISTENERS
/* STEP 5: Add a click event listener to the randomize variable so that when the button 
it represents is clicked, the result() function is run. */

// This is my random eventListener below \\
randomize.addEventListener('click', result);

// This lab based on the excellent assessment challenge at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator


