@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@
@	MFP Easy-Add Script
@	========================================
@	Written by: Kevin Yu, 2016
@	link: https://github.com/everynewyear/MFP-Easy-Add-Script
@
@	Makes adding items into MFP easier.
@
@
@
@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@
@	Table of Contents
@	========================================
@	1. Change Log
@	2. Requirements to add
@	3. Installation Instructions
@	
@
@
@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

========================================
1. Change Log
========================================

May 5, 2016
- initial build, created repository for project
- automatically enters "100 grams" in Serving Size and "1" in Servings per container 
- name is “MyFitnessPal auto-100 grams”


========================================
2. Requirements to add
========================================

- on link: http://www.myfitnesspal.com/food/submit
	- immediately skip
		- enter blank ‘Brand/Restaurant’ and ‘Food Description’(?)
			- only ‘Food Description’ needs something in its field
		- press Continue
- on link: http://www.myfitnesspal.com/food/duplicate
	- press ‘Nope, This Is Not A Duplicate’

- on link: http://www.myfitnesspal.com/food/new?date=2016-05-05&meal=0
	- this should be our final destination
	- cannot simply use this link to add a food
	- performs original function

- additional note on behaviour:
	- once ‘Create Food’ is clicked 
	  on link: http://www.myfitnesspal.com/food/mine
		- server acknowledges a food is trying to be made
			- will SKIP link:
			  http://www.myfitnesspal.com/food/submit
			  and go to link:
			  http://www.myfitnesspal.com/food/new
				- but no date is appended

- four links at which actions will need to be executed
	- will start with 4 scripts that execute at each link



========================================
3. Installation requirements
========================================

MFP Easy-Add Script is a Greasemonkey script. Greasemonkey is an Add-on for
running Javascript scripts on FireFox.

Install Firefox here:
https://www.mozilla.org/en-US/firefox/new/

Install Greasemonkey here:
https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/

If you already possess Firefox and Greasemonkey, simply add the contents of 
script.js to Greasemonkey. I will not be providing a guide as how to do this.
