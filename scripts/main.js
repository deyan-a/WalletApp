(function () {
    var updateDate = function () {
        var now = new Date();
        var month = (now.getMonth() + 1);
        var day = now.getDate();
        if (month < 10)
            month = "0" + month;
        if (day < 10)
            day = "0" + day;
        var today = now.getFullYear() + '-' + month + '-' + day;
        $('#income-date').val(today);
        $('#expense-date').val(today);
    }

    var toggleForm = function () {
        $addBtn.toggleClass("clicked");
        $popUpDiv.fadeToggle(300);
        $popUpForm.fadeToggle(300);
        updateDate();
    };

    var switchForm = function () {
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
    };

    var $addBtn = $("#btn-img");
    var $cancelIncomeBtn = $('#income-btn-cancel');
    var $cancelExpenseBtn = $('#expense-btn-cancel');
    var $popUpDiv = $(".pop-up-div");
    var $popUpForm = $(".pop-up-form");
    var $tabPanelButton = $('.tab-panel button');

    $addBtn.on("click", toggleForm);
    $cancelIncomeBtn.on("click", toggleForm);
    $cancelExpenseBtn.on('click', toggleForm);
    $tabPanelButton.on('click', switchForm)
})();