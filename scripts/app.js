//  new code

var thisButton = document.getElementById("myButton2").onclick = Application;
// function: application
function Application() {
	var x = document.getElementById('input1').value;
	var total = 0;
    total = Number(x);
    if (total < 1000) {
        console.log("FALSE");
        document.getElementById("result").innerHTML = "Insufficient bomblets to achieve orbit.";
    }
    else {
        console.log("TRUE");
        document.getElementById("result").innerHTML = "Sufficient bomblets to achieve orbit.";
    }
}