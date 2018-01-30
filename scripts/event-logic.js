/* eslint-disable */

$(function () {
    // expenses
   

    var $incomeTab = $("#income");
    var $expenseTab = $("#expense");

    $incomeTab.on("click", function () {

        var spendBtn = $("#income-btn-add");
        spendBtn.on("click", function () {
            var $incomeAmount = $("#income-amount").val();
            var $incomeDate = $("#income-date").val();
            var $incomeSelect = $("#income-cat-selector").val();
            var $incomeNote = $("#income-note").val();

            historyModule.addEvent("income",
            $incomeAmount, $incomeSelect, $incomeNote, $incomeDate);


        });

    });
    $expenseTab.on("click", function () {

        var spendBtn = $("#expense-btn-add");
        spendBtn.on("click", function () {
            var $expenseAmount = $("#expense-amount").val();
            var $expenseDate = $("#expense-date").val();
            var $expenseSelect = $("#expense-cat-selector").val();
            var $expenseNote = $("#expense-note").val();

            historyModule.addEvent("expense",
            $expenseAmount, $expenseSelect, $expenseNote, $expenseDate);
          
        });

    });

});