/* eslint-disable */

$(function () {
    var updateTotals = function () {
        var $incomeLabel = $("#incomeLabel");
        var incomeTotal = incomeModule.getTotal().toFixed(2);
        $incomeLabel.text(incomeTotal || 0);

        var $expenseLabel = $("#expensesLabel");
        var expenseTotal = expensesModule.getTotal().toFixed(2);
        $expenseLabel.text(expenseTotal || 0);

        var $balanceLabel = $("#balanceLabel");
        var balanceTotal = calculateBalance(incomeModule, expensesModule).toFixed(2);
        $balanceLabel.text(balanceTotal);
    }

    var updateList = function (parent, date, category, amount, note, type) {

        var $newDate = $("<div>").text(date).addClass("col-xs-3");
        var $newCategory = $("<div>").text(category).addClass("col-xs-3");
        var $newAmount = $("<div>").text(amount).addClass("col-xs-3");

        if (type === "income") {
            $newAmount.addClass("income-color");
        } else {
            $newAmount.addClass("expense-color");
        }

        var $newNote = $("<div>").text(note).addClass("col-xs-3");
        var $newList = $("<li>");
        $newList.addClass("row");
        $newList.append($newDate, $newCategory, $newAmount, $newNote);
        $newList.prependTo(parent);
    }

    var $incomeTab = $("#income-tab");
    var $expenseTab = $("#expense-tab");
    var $eventsList = $("#events-list")

    var spendBtn = $("#income-btn-add");
    spendBtn.on("click", function () {
        var $incomeAmount = $("#income-amount").val();
        var $incomeDate = $("#income-date").val();
        var $incomeSelect = $("#income-cat-selector").val();
        var $incomeNote = $("#income-note").val();
        var type = "income";

        incomeModule.addIncome($incomeSelect, $incomeAmount);

        historyModule.addEvent("income",
            $incomeAmount, $incomeSelect, $incomeNote, $incomeDate);
        updateList($eventsList, $incomeDate, $incomeSelect, $incomeAmount, $incomeNote, type);
        updateTotals();
        homeChartFunc();
        incomeChartFunc();
    });

    var spendBtn = $("#expense-btn-add");
    spendBtn.on("click", function () {
        var $expenseAmount = $("#expense-amount").val();
        var $expenseDate = $("#expense-date").val();
        var $expenseSelect = $("#expense-cat-selector").val();
        var $expenseNote = $("#expense-note").val();
        var type = "expense";

        expensesModule.addExpense($expenseSelect, $expenseAmount);

        historyModule.addEvent("expense",
            $expenseAmount, $expenseSelect, $expenseNote, $expenseDate);
        updateList($eventsList, $expenseDate, $expenseSelect, $expenseAmount, $expenseNote, type);
        updateTotals();
        homeChartFunc();
    });
});