var text;
var answer = prompt("What percentage of the speed of light can the Orion achieve?");

while (answer <= 6 || answer >= 11) {
    alert("That answer is not correct.");
    var answer = prompt("What percentage of the speed of light can the Orion achieve?");
}

alert("Correct!");

