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