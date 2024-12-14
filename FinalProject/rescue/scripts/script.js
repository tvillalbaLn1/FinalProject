/*
Student name: Tromen Agustin Villalba
File Name: script.js
Date: 12/10/2024
*/ 

// Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

// Hamburger menu function
function menu(){
	var navlinks = document.getElementById("nav-links");
	var menuicon = document.getElementById("icon");
	if (navlinks.style.display === "block"){
		navlinks.style.display = "none";
		menuicon.style.color = "#2a1f14";
	}else{
		navlinks.style.display = "block";
		menuicon.style.color = "#f6eee4";
	}
}

// Function to display the first answer
function ans1(){
	heading.style.display = "block";
	answer.textContent = "The Internet (or internet) is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices.";
}

// Function to display the second answer
function ans2(){
	heading.style.display = "block";
	answer.textContent = "Students create a variety of multi-page Web sites using Hypertext Markup Language (HTML), XHTML and Cascading Style Sheets (CSS) while expanding their knowledge of the Internet, Web and HTML-based development. Additional topics include Web page layout using tables, frames, and style sheets; working with images, image maps and slicers; and learning how key technologies such as JavaScript, dynamic HTML, and XML are integrated with HTML web pages.";
}

// Function to display the third answer
function ans3(){
	heading.style.display = "block";
	answer.textContent = "The course has four units.";
}

// Function to display the fourth answer
function ans4(){
	heading.style.display = "block";
	answer.textContent = "The course has twelve chapters.";
}