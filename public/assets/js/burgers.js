var imgURL;
var newBurger = {};
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevouredState = {
      devoured: true
    };
    $(this).css("display", "none")
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed Devoured to true");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {

    // Make sure to preventDefault on a submit event.
    event.preventDefault();


    var picURL = `https://pixabay.com/api/?key=17409987-87acf859f9545b0f00c73cdd0&q=${$("#ca").val().trim()}&image_type=photo&per_page=10`
    $.ajax({
      url: picURL,
      method: "GET",
    }).then(function (response1) {
      imgURL = response1.hits[Math.floor(Math.random() * response1.hits.length)].webformatURL;
      if (imgURL === '') { imgURL = '/assets/images/burger.png'; }
      newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0,
        url1: imgURL
      };
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
      console.log(newBurger)
      // alert(response1.hits[0].id)
    }).catch(function (error) {
      // if error use default
      newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0,
        url1: '/assets/images/burger.png'
      };
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    })



    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
