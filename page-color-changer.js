// Red color slider \\ 
const redSlider = document.getElementById('red-slider');   

// Green color slider \\ 
const greenSlider = document.getElementById('green-slider'); 

// Blue color slider \\ 
const blueSlider = document.getElementById('blue-slider');  

// Element to display the current RGB color value \\ 
const colorDisplay = document.getElementById('color-display'); 

// Reference to the page body to change its background color \\ 
const body = document.body;                                   

// Function to get the current values of the red, green, and blue sliders \\
function getColorValues() {

// Get the current value from the red slider \\ 
const redValue = redSlider.value;  

// Get the current value from the green slider \\ 
const greenValue = greenSlider.value; 

// Get the current value from the blue slider \\ 
const blueValue = blueSlider.value;   

// Return an object containing the red, green, and blue values \\ 
return {
    red: redValue,
    green: greenValue,
    blue: blueValue
};

}

// Function to update the background color of the page body based on the slider values \\ 
function updateBackgroundColor() {

// Get the current red, green, and blue values from the sliders \\ 
const { red, green, blue } = getColorValues();

// Create an RGB color string using the slider values \\ 
const rgbColor = `rgb(${red}, ${green}, ${blue})`;

// Apply the RGB color to the background of the page body \\ 
body.style.backgroundColor = rgbColor;

// Display the current color in the color display element \\
colorDisplay.textContent = `Current Color: ${rgbColor}`;

}

// Event listeners to handle changes to the sliders \\ 

// These listeners call the updateBackgroundColor function whenever a slider is adjusted \\ 

// Listen for changes on the red slider \\
redSlider.addEventListener('input', updateBackgroundColor);   

// Listen for changes on the green slider \\  
greenSlider.addEventListener('input', updateBackgroundColor); 

// Listen for changes on the blue slider \\ 
blueSlider.addEventListener('input', updateBackgroundColor);  


// Call the updateBackgroundColor function once when the page loads

// This ensures the background color matches the initial slider values when the page is first displayed
updateBackgroundColor();
