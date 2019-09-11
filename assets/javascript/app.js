//topics array
var topics = 	["dogs", "cats", "pigs",];
				



function NewButton() {

	//empties the div 
	$("#animal-buttons").empty();

	for (var i = 0; i < topics.length; i++) {
		$("#animal-buttons").append("<button type=button class='topic-button btn btn-primary'>" + topics[i] + "</button>");
	};


};


NewButton();

// var buttonMaker = function() {

// }

$("#additional").on("click", function(event) {
	event.preventDefault();
	var userInput = $("#animal-input").val().trim();

	
	if (!userInput == " ") {
		topics.push(userInput);
		NewButton();
		console.log(topics); 
		userInput = $("#animal-input").val(" ");
	}
});


$(document).on("click", ".topic-button", function() {
	$("#animal-gif").empty(); 

	var apiKey = "9ecUA0E0g5bYSuP1WX8jA28qTsKzU4nw";
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).html() + "&api_key=" + apiKey + "&limit=10";
	

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		console.log(response.data); 

		//
		var results = response.data;

		//creates a new <img> tag
		
		for (var j = 0; j < results.length; j++) {

			var newImage = $("<img>");
			newImage.attr("src", results[j].images.fixed_height_still.url);
			newImage.attr("alt", "missing gif");
            newImage.attr("id", "new-gif" + j);
            newImage.attr("class", "created-gifs");
            newImage.attr("data-state", "still");
            newImage.attr("data-still", results[j].images.fixed_height_still.url);
            newImage.attr("data-animated", results[j].image.original.url);

			$("#animal-gif").append(newImage);

			
		}



    })
})

// create event listener for when we click on a gif
$(document).on("click", ".created-gifs", function() {
// if the state is still, 
if ($(this).attr("data-state") === "still") {
// switch the state to animated
    $(this).attr("data-state", "animated");
    // and switch the src attribute to the animated version

}

// else if the state is animated, switch it to still
// and switch the src back to the still version 

})