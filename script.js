// ==UserScript==
// @name        MyFitnessPal Easy-Add Script
// @namespace   MFPEZADDScript
// @description Automatically enters "100 grams" in Serving Size and "1" in Servings per container and skips intermediate screens when adding items into MFP.
// @include     http://www.myfitnesspal.com/food/*
// @version     1
// @grant       none
// ==/UserScript==

// written May 7, 2016
// by Kevin Yu

var myURL = window.location.href;

if (myURL == "http://www.myfitnesspal.com/food/new") {

	var servingSize = document.getElementById("weight_serving_size");
	if (servingSize) {
	    servingSize.value = "100 grams";
	}

	var containerNum = document.getElementById("servingspercontainer");
	if (containerNum) {
    	containerNum.value  = "1";
	}

	var foodDesc = document.getElementById("food_description");
	if (foodDesc) {
    	foodDesc.value  = "";
	}

}
else if (myURL == "http://www.myfitnesspal.com/food/submit") {

	var foodDesc2 = document.getElementById("food_description");
	if (foodDesc2) {
   	 foodDesc2.value = "temp";
	}

	var buttonPad = document.getElementById("buttonPad").getElementsByClassName("button style-4")[0];
	buttonPad.click();
}
else if (myURL == "http://www.myfitnesspal.com/food/duplicate") {

	window.location = "http://www.myfitnesspal.com/food/new";
}

// End Script.