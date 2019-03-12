$(document).ready(function() {


    var animeArray = [
        "one piece",
        "senpai",
        "otaku",
        "shonen", 
        "kawaii" ];
    
   


    function startButtons() {
        $("#buttons").empty();


        for (var i = 0; i < animeArray.length; i++) {

            var btn = $("<button>");
            // <button></button>, is created on html page
             btn.addClass("animeClass"); 
             // <button class="anime"></button>,
             btn.attr("data-name", animeArray[i]);
            //  <data-name="panda">
             btn.text(animeArray[i]);

             $("#buttons").append(btn);

}
    };

    

    $("#buttonClick").on("click", function (event) {
        event.preventDefault();
        var addedData = $("userChoice").val().trim();
        if (addedData != " ") {

            animeArray.push(addedData);
            startButtons();
            $("#userChoice").val();
        }

    })


        $(document).on("click", ".animeClass", function() { 
            // $("#gifimages").empty();

        var cartoon = $(this).attr("data-name"); 
        // taking var above and looping through array
        // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoon +  
        // "&api_key=OQ3FtfVtqcxRJo2hFYyYHmrRIFmYLi7c";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoon + "&rating=g&limit=10&api_key=OQ3FtfVtqcxRJo2hFYyYHmrRIFmYLi7c";

        $.ajax({
            url: queryURL,
            method: "GET"
        }) .then(function(response)  {

            console.log(queryURL);
            console.log(response);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {
// creates and stores anime image tag
                var animeImage = $("<img>");
    // changing src attribute on image to a property from the results
                animeImage.attr("src", results[i].images.fixed_height_still.url);
                animeImage.attr("data-animate", results[i].images.fixed_height.url);
                animeImage.attr("data-still", results[i].images.fixed_height_still.url);
                animeImage.addClass("gif");
                animeImage.attr("data-state", "still");

                var newItemdiv = $('<div class=newAnime>');
                var gifRating = results[i].rating;
                var divRating = $("<p>").text("Rating: " + gifRating);

                newItemdiv.append(divRating);
                newItemdiv.append(animeImage);
                
                $("#gifPics").prepend(newItemdiv);
            };

        }); 

        $("#gifPics").on("click", ".gif", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } 
    
    else if (state === "animate") {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }



});



});


    startButtons(animeArray, "#buttons"); 

});



// $(".gif").on("click", function() {
//     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//     var state = $(this).attr("data-state");
//     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//     // Then, set the image's data-state to animate
//     // Else set src to the data-still value
//     if (state === "still") {
//       $(this).attr("src", $(this).attr("data-animate"));
//       $(this).attr("data-state", "animate");
//     } else {
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-state", "still");


                // creates and stores anime div tag
                
            //    if (var p = $("<p>").text("Rating: " + results[i].rating) {
                
            //    animeDiv.append(p);

            //     var animeDiv = $("<div>");                
            

// appending the paragraph and image tag to animeDiv
               

               

//                 $("gif-button").prepend(animeDiv);

//             }

//                 startButtons(animeArray, "gif-button", "#buttons");
            

// // look at the response in the console, create a div dynamically
// // to hold the images or place it in thebnv id of "#gifImages"
// // place.append to id of "gifimages"
// $(".gif").on("click", function() {
//     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//     var state = $(this).attr("data-state");
//     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//     // Then, set the image's data-state to animate
//     // Else set src to the data-still value
//     if (state === "still") {
//       $(this).attr("src", $(this).attr("data-animate"));
//       $(this).attr("data-state", "animate");
//     } else {
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-state", "still");
    
//     }

//     })

// })
            