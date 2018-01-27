$(function () {
    var $addBtn = $("#btn-img");
    var $popUpDiv = $(".pop-up-div");
    var $popUpForm = $(".pop-up-form");
    $addBtn.on("click", function () {
        $addBtn.toggleClass("clicked");
        $popUpDiv.fadeToggle(300);
        $popUpForm.fadeToggle(300);
    });

});