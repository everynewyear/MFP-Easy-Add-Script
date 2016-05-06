// ==UserScript==
// @name        MyFitnessPal auto-100 grams
// @namespace   MFPauto100g
// @description Automatically enters "100 grams" in Serving Size and "1" in Servings per container when creating food entries in MFP.
// @include     http://www.myfitnesspal.com/food/new?*
// @version     1
// @grant       none
// ==/UserScript==

// original code from:
// http://stackoverflow.com/questions/10728818/enter-an-input-value-with-greasemonkey

// written May 1, 2016
// by Kevin Yu

//alert ("Script start.");

var servingSize = document.getElementById ("weight_serving_size");
if (servingSize) {
    servingSize.value = "100 grams";
}
//else {
//    alert ("Error, could not enter \"100 grams\".")
//}

var containerNum = document.getElementById ("servingspercontainer");
if (containerNum) {
    containerNum.value  = "1";
}
//else {
//    alert ("Error, could not enter \"1\".")
//}