(function () {
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

    var clearData = function (formName) {
        var $form = formName;
        $($form).children('input[type="text"]').val('');
        $($form).children('input[type="number"]').val('');
        $($form).children('textarea').val('');
    }

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

    var $incomeTab = $("#income-tab");
    var $expenseTab = $("#expense-tab");
    var $allEventsList = $("#events-list");
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
        updateList($allEventsList, $incomeDate, $incomeSelect, $incomeAmount, $incomeNote, type);
        updateList($incomeEventsList, $incomeDate, $incomeSelect, $incomeAmount, $incomeNote, type);
        updateTotals();
        clearData('#incomeForm');
        homeChartFunc();
        incomeChartFunc();
        expensesFuncChart();
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
        updateList($allEventsList, $expenseDate, $expenseSelect, $expenseAmount, $expenseNote, type);
        updateList($expensesEventsList, $expenseDate, $expenseSelect, $expenseAmount, $expenseNote, type);
        updateTotals();
        clearData('#expenseForm');
        homeChartFunc();
        expensesFuncChart();
    });
})();