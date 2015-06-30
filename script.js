$(function() {

  // Variables //

  var $newItem = $("#new-item");

  var $itemName = $("#item-name");

  var $allItems = $("#item-list");

  var $reset = $("#reset");

  var $shoppingList = []; // saves all user submissions in an array

  // Application Logic //

  $newItem.on("submit", function(event) {
    event.preventDefault(); //prevents page from reloading
    if ($itemName.val() == "" ) {
      alert("Please enter an item!");
    } else {
      // console.log($itemName);
      $allItems.append("<li>" + $itemName.val() + "</li>");
      $shoppingList.push($itemName.val().toString());
      $newItem[0].reset();
    };
  });

  $reset.on("click", function(event) {
    $allItems.empty();
    $shoppingList = [];
  });

  $allItems.on("click", "li", function(event){
    $(this).addClass("done");
    $(this).animate({opacity: 0.5}, 2000);
    console.log("Class added!");
  });

});
