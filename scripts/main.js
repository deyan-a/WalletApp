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
});