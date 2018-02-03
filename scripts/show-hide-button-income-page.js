var $viewIncomeButton = $("#view-all-income-btn");
var $closeIncomeButton = $("#close-all-income-btn");
var $listIncomeToShow = $('#income-list');

$viewIncomeButton.on("click", function() {
    $listIncomeToShow.removeClass("events-list");
    $listIncomeToShow.addClass("expand-list");
    $closeIncomeButton.removeClass("hide-income-button");
    $viewIncomeButton.addClass("hide-income-button");
});
$closeIncomeButton.on("click", function() {
    $listIncomeToShow.removeClass("expand-list");
    $listIncomeToShow.addClass("events-list");
    $closeIncomeButton.addClass("hide-income-button");
    $viewIncomeButton.removeClass("hide-income-button");
})