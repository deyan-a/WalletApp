<<<<<<< HEAD
$(function () {
    var $addBtn = $("#btn-img");
    var $popUpDiv = $(".pop-up-div");
    var $popUpForm = $(".pop-up-form");
    $addBtn.on("click", function () {
        $addBtn.toggleClass("clicked");
        $popUpDiv.fadeToggle(300);
        $popUpForm.fadeToggle(300);
    });

=======
$(function() {
    $('.tab-panel button').on('click', function () {
        var panel = $(this).closest('.tab-panel');

        var formToShow = $(this).attr('rel');
        var showNextForm = function() {
            $(this).removeClass('active');
            $('#' + formToShow).slideDown(300, function () {
                $(this).addClass('active');
            });
        }

    panel.find('button.active').removeClass('active');
        $(this).addClass('active');

        $('.form.active').slideUp(300, showNextForm);
    })
>>>>>>> 9acb5713c6775681e51ee0fd4e7498e3bc3c77e0
});