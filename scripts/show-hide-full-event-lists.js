(function () {
    var $viewExpensesButton = $("#view-all-expenses-btn");
    var $closeExpensesButton = $("#close-all-expenses-btn");
    var $viewIncomeButton = $("#view-all-income-btn");
    var $closeIncomeButton = $("#close-all-income-btn");
    var $incomeList = $('#income-list');
    var $expensesList = $('#expense-list');

    var viewFullExpensesList = function () {
        $expensesList.removeClass("events-list");
        $expensesList.addClass("expand-list");
        $closeExpensesButton.removeClass("hide-button");
        $viewExpensesButton.addClass("hide-button");
    };

    var hideFullExpensesList = function () {
        $expensesList.removeClass("expand-list");
        $expensesList.addClass("events-list");
        $closeExpensesButton.addClass("hide-button");
        $viewExpensesButton.removeClass("hide-button");
    };

    var viewFullIncomeList = function () {
        $incomeList.removeClass("events-list");
        $incomeList.addClass("expand-list");
        $closeIncomeButton.removeClass("hide-income-button");
        $viewIncomeButton.addClass("hide-income-button");
    };
    var hideFullIncomeList = function () {
        $incomeList.removeClass("expand-list");
        $incomeList.addClass("events-list");
        $closeIncomeButton.addClass("hide-income-button");
        $viewIncomeButton.removeClass("hide-income-button");
    };

    $viewIncomeButton.on("click", viewFullIncomeList);
    $closeIncomeButton.on("click", hideFullIncomeList)

    $viewExpensesButton.on("click", viewFullExpensesList);
    $closeExpensesButton.on("click", hideFullExpensesList);
})();