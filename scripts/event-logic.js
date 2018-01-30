/* eslint-disable */

$(function () {
    // expenses
   
    var updateTotals = function  () {
        var $incomeLabel = $("#incomeLabel");
        var incomeTotal = incomeModule.getTotal();
        $incomeLabel.text(incomeTotal || 0);
    
        var $expenseLabel = $("#expensesLabel");
        var expenseTotal = expensesModule.getTotal();
        $expenseLabel.text(expenseTotal || 0);
    
        var $balanceLabel = $("#balanceLabel");
        var balanceTotal = calculateBalance(incomeModule, expensesModule).toFixed(2);
        $balanceLabel.text(balanceTotal);
    }

    var $incomeTab = $("#income-tab");
    var $expenseTab = $("#expense-tab");

    $incomeTab.on("click", function () {

        var spendBtn = $("#income-btn-add");
        spendBtn.on("click", function () {
            var $incomeAmount = $("#income-amount").val();
            var $incomeDate = $("#income-date").val();
            var $incomeSelect = $("#income-cat-selector").val();
            var $incomeNote = $("#income-note").val();

            incomeModule.addIncome($incomeSelect, $incomeAmount);

            historyModule.addEvent("income",
            $incomeAmount, $incomeSelect, $incomeNote, $incomeDate);

            updateTotals();
        });

    });
    $expenseTab.on("click", function () {

        var spendBtn = $("#expense-btn-add");
        spendBtn.on("click", function () {
            var $expenseAmount = $("#expense-amount").val();
            var $expenseDate = $("#expense-date").val();
            var $expenseSelect = $("#expense-cat-selector").val();
            var $expenseNote = $("#expense-note").val();

            expensesModule.addExpense($expenseSelect, $expenseAmount);

            historyModule.addEvent("expense",
            $expenseAmount, $expenseSelect, $expenseNote, $expenseDate);

            updateTotals();
        });

    });

});