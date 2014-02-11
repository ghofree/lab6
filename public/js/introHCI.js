'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(function(e) {
		// Prevent following the link
		e.preventDefault();

		// Get the div ID, e.g., "project3"
		var projectID = $(this).closest('.project').attr('id');
		// get rid of 'project' from the front of the id 'project3'
		var idNumber = projectID.substr('project'.length);

		console.log("User clicked on project " + idNumber);

		// Get json object
		var projectURL = "/project/" + idNumber;
		console.log("Project URL: " + projectURL);
		$.get(projectURL, addProject);

	});

	$('#colorBtn').click(function(e) {
		console.log("User clicked on color button");

		$.get('/palette', colorMeBadd);
	});
}

function addProject(result) {
	console.log("in callback, this is result: " + result);

	var projectHTML = '<img src="' + result['image'] + '" class="detailsImage">' +
	'<p>' + result['date'] + '</p>' +
	'<p><small>' + result['summary'] + '</small></p>';
	var projID = result['id'];


	$('#project'+projID).find('.details').html(projectHTML);
	//$("#project-container").html(projectHTML);
	//$('#project-description').html(result['summary']);

}

function colorMeBadd(result) {
	console.log('in color me badd');
	console.log(result);

	var colors = result['hex'];
	console.log(colors);

	$('body').css('background-color', colors[0]);
	$('.thumbnail').css('background-color', colors[1]);
	$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
	$('p').css('color', colors[3]);
	$('.project img').css('opacity', .75);
	
}