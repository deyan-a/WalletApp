$(function() {
    var updateTotals = function  () {
        var $incomeLabel = $("#incomeLabel");
        var incomeTotal = incomeModule.getTotal();
        $incomeLabel.text(incomeTotal);
    
        var $expenseLabel = $("#expensesLabel");
        var expenseTotal = expensesModule.getTotal();
        $expenseLabel.text(expenseTotal);
    
        var $balanceLabel = $("#balanceLabel");
        var balanceTotal = calculateBalance(incomeModule, expensesModule);
        $balanceLabel.text(balanceTotal);
    }

});
