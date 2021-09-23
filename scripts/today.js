Today();

function Today() {
    document.getElementById("thisDate").innerText = Date(); // show date
    console.log("I have the date.");
    var result = document.querySelector('#thisDate');
    console.log(result);
}
