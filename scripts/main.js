var answer = prompt("What percentage of the speed of light can the Orion achieve?");

while (answer <= 6 || answer >= 11) {
    alert("That answer is not correct. (Hint: more than 6, less than 10)");
    var answer = prompt("What percentage of the speed of light can the Orion achieve?");
}

alert("Correct!");

