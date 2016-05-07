@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@
@	MFP Easy-Add Script
@	========================================
@	Written by: Kevin Yu, 2016
@	link: https://github.com/everynewyear/MFP-Easy-Add-Script
@
@	Makes adding items into MFP easier, for desktop users of
@	http://myfitnesspal.com/.
@
@	As of May 7, 2016, this script is confirmed to work.
@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@
@	Table of Contents
@	========================================
@	1. Installation Instructions
@	2. What does this script do?
@	3. Change Log
@	4. Past Requirements
@	5. Future Requirements
@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

========================================
1. Installation requirements
========================================

MFP Easy-Add Script is a Greasemonkey script. Greasemonkey is an Add-on for
running Javascript scripts on FireFox.

Install Firefox here:
https://www.mozilla.org/en-US/firefox/new/

Install Greasemonkey here:
https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/

If you already possess Firefox and Greasemonkey, simply add the contents of 
script.js to Greasemonkey. I will not be providing a guide as how to do this.

Experimental Google Chrome extension can be tried. Not tested. Enable Developer
Mode in Google Chrome and drag ChromeVersion.crx inside. An icon will appear but
there is no functionality for it.

========================================
2. What does this script do?
========================================

When entering items into MyFitnessPal, users will find they first must enter the
Brand of a Food and its Description in one page, ensure it is not a duplicate in
a potential second page, and then enter the food details in a third page. This 
third page ALSO allows the user to enter the Brand and Description, or change it.

This script immediately skips the first two pages and presents the user with a blank copy of the third page, to enter whatever they wish for the food with much less 
mouse-clicks.

In addition, this third page is propagated with a ‘Serving Size’ of 100 grams and a 
‘Servings per container’ of 1.

========================================
3. Change Log
========================================

May 5, 2016
- initial build, created repository for project
- automatically enters "100 grams" in Serving Size and "1" in Servings per container 
- name is “MyFitnessPal auto-100 grams”

May 7, 2016
-added in all requirements:
-skips submit page, where a ‘Food Description’ and ‘Brand/Restaurant’ must be entered
-skips duplicate? page
-performs original function
-bundled into a single script
-updated README.txt
-added experimental Chrome version

========================================
4. Past Requirements
========================================

- on link: http://www.myfitnesspal.com/food/submit
	- immediately skip
		- enter blank ‘Brand/Restaurant’ and ‘Food Description’(?)
			- only ‘Food Description’ needs something in its field
		- press Continue
	- (done)

- on link: http://www.myfitnesspal.com/food/duplicate
	- press ‘Nope, This Is Not A Duplicate’
	- (done)

- on link: http://www.myfitnesspal.com/food/new?date=2016-05-05&meal=0
	- this should be our final destination
	- cannot simply use this link to add a food
	- performs original function
	- (done)

- additional note on behaviour:
	- once ‘Create Food’ is clicked 
	  on link: http://www.myfitnesspal.com/food/mine
		- server acknowledges a food is trying to be made
			- will SKIP link:
			  http://www.myfitnesspal.com/food/submit
			  and go to link:
			  http://www.myfitnesspal.com/food/new
				- but no date is appended(!)

- three links at which actions will need to be executed
	- will start with 3 scripts that execute at each link
	- (done)

- now we combine the scripts

========================================
5. Future Requirements
========================================

Script appears to be error-free but could potentially be written better.

Many of the variables could be combined as any given page would only access
one if statement at a time.

Will likely not be committing any of these.

As far as I’m concerned, I’m done with this until MFP updates their site
and makes everything stop working.