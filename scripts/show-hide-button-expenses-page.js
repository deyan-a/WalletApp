var $viewButton = $("#view-all-btn");
var $closeButton = $("#close-all-btn");
var $listToShow = $('#expense-list');

$viewButton.on("click", function() {
    $listToShow.removeClass("events-list");
    $listToShow.addClass("expand-list");
    $closeButton.removeClass("hide-button");
    $viewButton.addClass("hide-button");
});
$closeButton.on("click", function() {
    $listToShow.removeClass("expand-list");
    $listToShow.addClass("events-list");
    $closeButton.addClass("hide-button");
    $viewButton.removeClass("hide-button");
})
