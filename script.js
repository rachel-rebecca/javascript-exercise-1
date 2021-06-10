let actualTemp = prompt("What's the actual temperature?");
let desiredTemp = 72;

if (actualTemp < 72) {
    alert("Run heat")
    console.log("Run heat")
} else if (actualTemp > 72) {
    alert("Run A/C")
    console.log("Run A/C")
} else {
    alert("Standby")
    console.log("Standby")
}

let tempCelsius = prompt("Temperature in Celsius to convert:")

const targetUnit = prompt("Select target unit: F, C, or K")
switch (targetUnit) {
    case "F":
       let double = tempCelsius * 2
       let final = double + 30;
       console.log(final + " F")
       break;
    case "C":
        console.log(tempCelsius + " C")
        break;
    case "K":
        let kelvin = tempCelsius + 273.15;
        console.log(kelvin + " K");
        break;
}
