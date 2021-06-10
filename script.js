let actualTemp = prompt("What's the actual temperature?");
let desiredTemp = 72;

if (actualTemp < 72) {
    console.log("Run heat")
} else if (actualTemp > 72) {
    console.log("Run A/C")
} else {
    console.log("Standby")
}

let tempCelsius = prompt("Temperature in Celsius to convert:")

const targetUnit = prompt("Select target unit: F, C, or K")
switch (targetUnit) {
    case "F":
       let double = tempCelsius * 2
       let final = double + 30;
       console.log(final)
       break;
    case "C":
        console.log("tempCelsius")
        break;
    case "K":
        let kelvin = tempCelsius + 273.15;
        console.log(kelvin);
        break;
}
