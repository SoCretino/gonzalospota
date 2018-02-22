var jquery = require('jquery');
var smoothScroll = require('smoothscroll');
import {TimelineLite} from 'gsap';

//Scroll
var srcBtn = document.querySelector('.contact-btn');
var destinationContact = document.querySelector('#contact');
var handleClick = function(event) {
	event.preventDefault();
	smoothScroll(destinationContact);
};

var srcBtn = document.querySelector('.work-btn');
var destinationWork = document.querySelector('#work');
var handleClick = function(event) {
	event.preventDefault();
	smoothScroll(destinationWork);
};

srcBtn.addEventListener('click', handleClick);

//Animations
var tl = new TimelineLite();
tl.to('#nav-bar, .profile-image, .main-desc, #work, #contact, .hey', 0, {opacity:1});
/*
window.onload = function() {
	var tl = new TimelineLite();
	tl.to('.hey', 1, {opacity: 1});
	tl.to('#nav-bar, .profile-image, .main-desc, #work, #contact', 1, {opacity:1}, '+=1.5');
}
*/
