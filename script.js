

function findbmi() {
	var w = document.getElementById("weight").value;
	var h1 = document.getElementById("heightft").value;
	var h2 = document.getElementById("heightin").value;

	if (w === '') {
		alert("Enter weight");
	} else if (h1 === '') {
		alert("Enter height in ft");
	} else if (h2 === '') {
		alert("Enter height in inches");
	} else {

		var res = (703 * (w / ( ((h1 * 12) + h2)^2 )));


		document.getElementById("weight").value = "";
		document.getElementById("heightft").value = "";
		document.getElementById("heightin").value = "";

		alert("Your BMI is: " + res);
	} 
}
