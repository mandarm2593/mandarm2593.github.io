/*
File name : script.js
Developer : Mandar Mathure (mmathure@syr.edu)
Machine : Lenovo y700 , Windows 10
Description : 
This file is in conjunction with two other files - index.html and styles.css. 
This file handles the user navigation through the form by using click events of various UI elements.
This files is referenced in index.html.
*/


$(document).ready(function () {

    //getting all the required buttons in their rspective elements
	
    var progressBtn1 = $('#progressBtn1');
	var progressBtn2 = $('#progressBtn2');
	var progressBtn3 = $('#progressBtn3');
	progressBtn1.removeClass('btn-circle-deactive').addClass('btn-circle-active');
	var prevButton = $('#prevButton');
	var nextButton = $('#nextButton');
	var part1 = $('#part1');
	var part2 = $('#part2');
	var part3 = $('#part3');
	//handling next button clicks
    nextButton.click(function () {
        //if on first part and next button is clicked
		if (part1.hasClass('visible')) {
			part1.removeClass('visible');
			part1.addClass('invis');
			part2.addClass('visible');
			part2.removeClass('invis');
			progressBtn1.removeClass('btn-circle-active').addClass('btn-circle-deactive');
			progressBtn2.removeClass('btn-circle-deactive').addClass('btn-circle-active');
			prevButton.removeClass('disabled').addClass('active');
			$(window).scrollTop(0);
		} 
        //else if on 2nd part and next button is clicked
        else if (part2.hasClass('visible')) {

			part2.removeClass('visible');
			part2.addClass('invis');
			part3.removeClass('invis');
			part3.addClass('visible');
			progressBtn2.removeClass('btn-circle-active').addClass('btn-circle-deactive');
			progressBtn3.removeClass('btn-circle-deactive').addClass('btn-circle-active');
			nextButton.html('Submit');
			$(window).scrollTop(0);


		} 
        //if on second part and the next(submit) button is clicked
        else if (part3.hasClass('visible')) {

			alert('Form Submitted Successfully');
			part3.removeClass('visible').addClass('invis');
			part1.removeClass('invis').addClass('visible');
			progressBtn3.removeClass('btn-circle-active').addClass('btn-circle-deactive');
			progressBtn1.addClass('btn-circle-active').removeClass('btn-circle-deactive');
			prevButton.removeClass('active').addClass('disabled');
			nextButton.removeClass('disabled').addClass('active');
			nextButton.html('Next');
		}


	});

    //handling previous button clicks
	prevButton.click(function () {
        //if on second part and previous button is clicked
		if (part2.hasClass('visible')) {
			part2.removeClass('visible');
			part2.addClass('invis');
			part1.removeClass('invis').addClass('visible');
			progressBtn2.removeClass('btn-circle-active').addClass('btn-circle-deactive');
			progressBtn1.removeClass('btn-circle-deactive').addClass('btn-circle-active');
			prevButton.removeClass('active').addClass('disabled');
			$(window).scrollTop(0);

		} 
        //if on third part and previous button is clicked
        else if (part3.hasClass('visible')) {
			part3.removeClass('visible');
			part3.addClass('invis');
			part2.removeClass('invis').addClass('visible');
			progressBtn3.removeClass('btn-circle-active').addClass('btn-circle-deactive');
			progressBtn2.removeClass('btn-circle-deactive').addClass('btn-circle-active');
			nextButton.html('Next');
			$(window).scrollTop(0);


		}


	});

    //handling progress button 1 clicks
	progressBtn1.click(function () {
        //if on second part and progress button 1 is clicked
		if (part2.hasClass('visible')) {
			part1.addClass('visible').removeClass('invis');
			part2.removeClass('visible').addClass('invis');
			progressBtn2.removeClass('btn-circle-active').addClass('btn-circle-deactive');
			progressBtn1.removeClass('btn-circle-deactive').addClass('btn-circle-active');
			prevButton.removeClass('active').addClass('disabled');


		}
        //if on third part and progress button 1 is clicked
		if (part3.hasClass('visible')) {
			part1.addClass('visible').removeClass('invis');
			part3.removeClass('visible').addClass('invis');
			progressBtn3.removeClass('btn-circle-active').addClass('btn-circle-deactive');
			progressBtn1.removeClass('btn-circle-deactive').addClass('btn-circle-active');
			prevButton.removeClass('active').addClass('disabled');
			nextButton.html('Next');
		}


	});

    //handling progress button 2 clicks
	progressBtn2.click(function () {
        //if on first part and progress button 2 is clicked
		if (part1.hasClass('visible')) {
			part2.addClass('visible').removeClass('invis');
			part1.removeClass('visible').addClass('invis');
			progressBtn1.removeClass('btn-circle-active').addClass('btn-circle-deactive');
			progressBtn2.removeClass('btn-circle-deactive').addClass('btn-circle-active');
			prevButton.addClass('active').removeClass('disabled');


		}
        //if on third part and progress button 2 is clicked
		if (part3.hasClass('visible')) {
			part2.addClass('visible').removeClass('invis');
			part3.removeClass('visible').addClass('invis');
			progressBtn3.removeClass('btn-circle-active').addClass('btn-circle-deactive');
			progressBtn2.removeClass('btn-circle-deactive').addClass('btn-circle-active');
			nextButton.html('Next');
		}


	});

    //handling progress button 3 clicks
	progressBtn3.click(function () {
        //if on second part and progress button 3 is clicked
		if (part2.hasClass('visible')) {
			part3.addClass('visible').removeClass('invis');
			part2.removeClass('visible').addClass('invis');
			progressBtn2.removeClass('btn-circle-active').addClass('btn-circle-deactive');
			progressBtn3.removeClass('btn-circle-deactive').addClass('btn-circle-active');
			nextButton.html('Submit');


		}
        //if on first part and progress button 3 is clicked
		if (part1.hasClass('visible')) {
			part3.addClass('visible').removeClass('invis');
			part1.removeClass('visible').addClass('invis');
			progressBtn1.removeClass('btn-circle-active').addClass('btn-circle-deactive');
			progressBtn3.removeClass('btn-circle-deactive').addClass('btn-circle-active');
			prevButton.removeClass('disabled').addClass('active');
			nextButton.html('Submit');
		}


	});


});