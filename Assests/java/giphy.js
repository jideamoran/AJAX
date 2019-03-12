$(document).ready(function() {


    var animeArray = [
        "panda",
        "senpai",
        "otaku",
        "shonen", 
        "kawaii"];
    
   


    function startButtons(animeArray, classAdd, placetoPut) {


        for (var i = 0; i < animeArray.length; i++) {

            var btn = $("<button>");
            // <button></button>, is created on html page
             btn.addClass(classAdd); 
             // <button class="anime"></button>,
             btn.attr("data-name", animeArray[i]);
            //  <data-name="panda">
             btn.text(animeAdd[i]);

             $(placetoPut).append(btn)

        } 
    }

        $(document).on("click", ".gif-button", function() { 

        var cartoon = $(this).attr("data-name"); 
        // taking var above and looping through array
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoon +  
        "&api_key=OQ3FtfVtqcxRJo2hFYyYHmrRIFmYLi7c&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }) 
        
        .then(function(response)  {

            console.log(queryURL);
            console.log(response);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {
// creates and stores anime div tag
                var animeDiv = $("<div>");
    // creates a paragraph tag with results item rating
                var p = $("<p>").text("Rating: " + results[i].rating);
// creates and stores anime image tag
                var animeImage = $("<img>");
    // changing src attribute on image to a property from the results
                animeImage.attr("src", results[i].images.fixed_height.url);
// appending the paragraph and image tag to animeDiv
                animeDiv.append(p);
                animeDiv.append(animeImage);

                $("gif-button").prepend(animeDiv);

            }

                startButtons(animeArray, "gif-button", "#buttons");
            

// look at the response in the console, create a div dynamically
// to hold the images or place it in thebnv id of "#gifImages"
// place.append to id of "gifimages"
$(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    
    }

    })

})
            
        });
    

});