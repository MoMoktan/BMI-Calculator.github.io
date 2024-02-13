const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const button = document.getElementById("button");
const result = document.getElementById("dashboard");

button.addEventListener("click", () => {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    heightInput.value = "";
    weightInput.value = "";
    CheckBmi(height, weight);
});

function CheckBmi(height, weight) {
    const value = (weight / (height * height)) * 10000;

    if (value < 18.5) {

        result.value = "You're in the underweight range";

    } else if (value >= 18.5 && value <= 24.9) {

        result.value = "You're in the healthy weight range";

    } else if (value >= 25 && value <= 29.9) {

        result.value = "You're in the overweight range";

    } else if (value >= 29.9){
        
        result.value = "You're in the obese range";
    }
}
