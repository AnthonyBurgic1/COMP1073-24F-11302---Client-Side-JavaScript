// Object containing arrays of words categorized by theme \\ 
const wordsArray = {
    adventure: ['Jungle', 'Ocean', 'Mountain', 'Space'], 

// Possible adventures \\
    friendship: ['Bonds', 'Trust', 'Support', 'Laughter'], 

// Aspects of friendship \\ 
    mystery: ['Secret', 'Puzzle', 'Enigma', 'Riddle'],

// Elements of mystery \\ 
    courage: ['Bravery', 'Strength', 'Fearlessness', 'Valor'], 

// Traits associated with courage \\ 
    dreams: ['Aspiration', 'Vision', 'Desire', 'Goal'] 

// Concepts related to dreams \\
};

// Object to track the currently selected index for each word category \\ 
const selectedWords = {
    adventure: 0, 

// Index for selected adventure word \\ 
    friendship: 0, 

// Index for selected friendship word \\ 
    mystery: 0, 

// Index for selected mystery word \\
    courage: 0, 

// Index for selected courage word \\
    dreams: 0 

// Index for selected dreams word \\
};

// Function to cycle through words in a specified category \\
function cycleWord(category) {

// Increment the selected index and wrap around if it exceeds the array length \\ 
    selectedWords[category] = (selectedWords[category] + 1) % wordsArray[category].length;
    
// Get the currently selected word based on the updated index \\ 
    const chosenWord = wordsArray[category][selectedWords[category]];
    
// Display the chosen word next to the corresponding button \\
    document.getElementById(`${category}-choice`).innerText = chosenWord;
}

// Function to generate and display the story based on selected words \\
function showStory() {

// Create a story string by mapping over the selected words and joining them \\
    const selectedStory = Object.keys(selectedWords)
    .map(key => wordsArray[key][selectedWords[key]]) 

// Get the selected word for each category \\ 
    .join(', '); 

// Join the words with a comma \\ 

// Check if a story can be created with the selected words \\
    if (selectedStory) {

// Construct and display the story using the selected words \\
    document.getElementById('story').innerText = `Once upon a time, there was an ${wordsArray.adventure[selectedWords.adventure]} 
    of ${wordsArray.friendship[selectedWords.friendship]} where a ${wordsArray.mystery[selectedWords.mystery]} was solved with 
    ${wordsArray.courage[selectedWords.courage]} and the ${wordsArray.dreams[selectedWords.dreams]} came true.`;
} else {

// Prompt user to select words if none are selected \\
    document.getElementById('story').innerText = 'Please select words to create your story.';
    
}
}