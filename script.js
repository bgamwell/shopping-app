$(function() {

  console.log("Loaded!");

  var $newItem = $("#new-item");

  var $itemName = $("#item-name")

  var $allItems = $("#item-list");

  var $item = $(".item");

  var $reset = $("#reset");

  // var allItems = $("grocery-list");

  // var $allIndividualItems = $(".item")

  // $newItem.submit(function() {
  //
  // });

  $newItem.on("submit", function(event) {
    console.log($itemName);
    event.preventDefault(); //prevents page from reloading
    if ($itemName.val() == "" ) {
      alert("Please enter an item!");
    } else {
      console.log($itemName);
      $allItems.append("<li class='food item'>" + $itemName.val() + "</li>");
      $newItem[0].reset();
    // .val pulls the value out of a form
    };
  });

  $reset.on("click", function () {
    $allItems.empty();
  });

  // $allItems.on("click", function(event){
  //   $(this).addClass("done")
  // });

  $allItems.on("click", "li", function(event){
    $(this).addClass("done");
    console.log("Class added!");
  });

});
