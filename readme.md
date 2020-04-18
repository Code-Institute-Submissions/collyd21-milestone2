# Takeaway Decider Wheel
User Centric Frontend Development Milestone 2 Project.
This is an idea I had for a project before I even started this coding course and on e of the reasons I began it, to make projects that I wanted and I enjoyed.
### User Stories
As a user I want to be free from the decision of what to eat and have the local options locations easily and clearly pointed out to me.
### Strategy
I wanted this site to be very easy to use and navigate, so I achieved this by staying on one page and limiting the click option to just spin initially.
### Scope
The premise behind this project is the reason I started the Code Institute course in the first place. I had an idea for this project and was almost going to pay a freelance web designer to make it for me. I want to make my ideas reality and make them myself. The idea is to take the dreaded couples discussion and indecisiveness of choosing what to eat and have someone, well, something to make that decision for you. And so, the Takeaway Decider is born.
### Skeleton
[Wireframe](assets/images/wireframe.pdf)
### Surface
The colour scene for this project is bright and vibrant colours for the wheel itself to stand out. I then released I wanted to go down the gameshow type route so added the background further into the project. When the winning segment shows the losing ones are greyed and chosen segment highlighted in winning gold.
## Technologies
For this project I used the following technologies:

[Github](https://github.com/)

[Github Pages](https://pages.github.com/)

HTML, CSS and Javascript from various sources including [Code Institute](https://codeinstitute.net/), [W3schools](https://www.w3schools.com/html/), [Slack](https://slack.com/intl/en-ie/).

[Bootstrap](https://getbootstrap.com/)

[Google Maps API integration](https://developers.google.com/maps/documentation/javascript/tutorial)

[WinWheel Library](http://dougtesting.net/home)

## Features
Firstly, I found the winWheel library online at [DougTesting](http://dougtesting.net/home). I had been researching how to make a wheel of fortune type wheel. This really is an excellent library and also the tutorials of all features of the wheel were so easy to follow. It is an excellent piece of coding in my opinion.

I used bootstrap for the buttons for the ease of their integration.

The javascript for the winWheel came with its own downloaded script for the operation of a default wheel.

I then added a second script for the wheel that sets the parameters for my custom wheel. It also has the functions for toggling the spin and rest buttons on and off as well as the map. It allows for the change of colour of the segments after the animation plays and the winner is selected.

The third script is for the map controls. It sets the functions for the map location, zoom and the markers placement. It also calls for the info window to pop up when a set marker is clicked supplying the name, address and rating of the takeaway.

The last feature is the Google maps places search API. I had little to no experience with APIs before this and this was the part that had me stupted for much of the project. I just could not get it to work as I wanted to. But eventually it clicked and I was able to get the map to search the text keyword from the winning segment. It then uses this keyword to place markers on the map. The radius of this search is set within the second wheel script.
## Testing
There was a massive amount of trial and error with this project. As I am not familiar with either the winWheel library or the Google maps API. 
| Feature | Issues | Resolution |
| --- | --- | --- |
| Winning Segment | When ever the keyword “Italian” was entered into the search for the map, it would bring up places related to Italy rather than the food type | I had to use an IF statement in the winAnimation function to change the text to Italian food and search it, but not to change the actually text on the wheel. This had to be done after the theWHeel.draw function so as to not rewrite the text on the wheel |
| Pointer Image | I could not get the pointer to locate itself into the centre of wheel | I tried multiple options, but the best solution was to draw and image and use the width and height of canvas and divide by 2 for the position. I also had to allow for the size of the pointer image in calculations |
| winWheel | When I put the script for the wheel into its own js file it would not draw the wheel and showed a blank canvas container | I had to move the script file link  into the body after the canvas container and the wheel would draw then |
| Reset Button | When spin button is clicked and wheel rotates, no reset button appears when animation finishes | display for reset was set to block and had to be set to inline |
| Background | When viewed on mobile the background image height was strectched to bottom of screen on some devices | Added in a height responsive parameter to the canvas |
| Pointer Image | The pointer image is too large on small screens | I added an if statement to draw a smaller image version of the pointer for smaller screen sizes |

I use the Google Dev Tools, (right-click and inspect). During the course of building this project I continually console.log bits of information to confirm they were read correctly. It helped greatly in troubleshooting issues and bugs.

I also used [Responsinator](http://www.responsinator.com/), a free online tool for checking how your site will look and operate on different types of mobile devices. I prefer this to the Chrome DevTools option.
## Deployment
A live demo can be found here [Takeaway Decider Wheel](https://collyd21.github.io/milestone2/).

The website is deployed using Github pages, from the master branch of my milestone2 repository [Colm Doyle Milestone2 GitHub](https://github.com/collyd21/milestone2). When new commits are added to the repository, the website will update with any changes.

Cloning the repository can be done by the following:
*	Open the Github Repository link.
*	Click on the 'Clone or Download' button.
*	Copy the URL provided.
*	Open Git Bash terminal.
*	Change the current working directory to the location where you want the cloned directory to be made.
*	Type 'git clone' and paste in the URL.
*	Press Enter.

## Credits
### Media
Background image for behind the wheel was sourced from [Hipwallpaper](https://hipwallpaper.com/).

Pointer image for the wheel was sourced from [FreeSVG](https://freesvg.org/).
### Acknowledgements
Most important is the library and tutorials set out for the Spinning Wheel on [DougTesting](http://dougtesting.net/home). It real does explain everything in detail and has great examples.

The use of the Google map search API and Geolocation from [Google Map API](https://developers.google.com/maps/documentation/javascript/tutorial).

The Code Institute community on Slack.

Stack Overflow community and previous threads/ questions that helped me through difficulties with my project.

W3C markup validation website.

JShint quality code tool website.