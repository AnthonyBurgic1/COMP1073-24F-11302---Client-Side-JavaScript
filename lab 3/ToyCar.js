// ToyCar.js \\ 

// Constructor function for creating a ToyCar object with various properties \\ 
function ToyCar(brand, model, color, scale, weight, material, price, hasSound, hasLights, batteryOperated) {
// The brand or manufacturer of the toy car (e.g., "Hot Wheels", "Bburago") \\ 
this.brand = brand;

// The specific model of the car (e.g., "Porsche 911") \\
this.model = model;

// The color of the car (e.g., "red", "blue", "green". "white", "black", "yellow", "orange") \\ 
this.color = color;

// The scale of the toy car compared to a real car (e.g., "1:18", "1:24") \\ 
this.scale = scale;

// The weight of the toy car, typically measured in grams \\
this.weight = weight;

// The material from which the toy car is made (e.g., "die-cast") \\ 
this.material = material;

// The price of the toy car in USD \\ 
this.price = price;

// Indicates if the car has sound effects (boolean: true or false) \\ 
this.hasSound = hasSound;

// Indicates if the car has working lights (boolean: true or false) \\
this.hasLights = hasLights;

// Specifies if the toy car requires a battery to operate (boolean: true or false) \\
this.batteryOperated = batteryOperated;

// Method to return a formatted string with a summary of the car's key details \\
this.features = function() {
    return `${this.model} by ${this.brand} in ${this.color}, ${this.scale} scale, $${this.price}`;
};

}
