/* eslint-disable */

    var $incomeTab = $("#income-tab");
    var $expenseTab = $("#expense-tab");
    var $eventsList = $("#events-list");
    var $expensesEventsList = $('#expenses-events-list');
    var $incomeEventsList = $('#income-events-list');

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
        clearData('#incomeForm');
        homeChartFunc();
        incomeChartFunc();
        expensesFuncChart();
        updateIncomeList($incomeEventsList, $incomeDate, $incomeSelect, $incomeAmount, $incomeNote);
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
        clearData('#expenseForm');      
        homeChartFunc();
        expensesFuncChart();
        updateExpensesList($expensesEventsList, $expenseDate, $expenseSelect, $expenseAmount, $expenseNote);
    });


