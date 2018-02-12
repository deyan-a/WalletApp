var eventModule = (function() {
    var updateList = function (parent) {

        var list = historyModule.returnList();
        var event = list[list.length - 1];
        var $newDate = $("<div>").text(event.date).addClass("col-xs-3");
        var $newCategory = $("<div>").text(event.category).addClass("col-xs-3");
        var $newAmount = $("<div>").text(event.amount).addClass("col-xs-3");
        var $newNote = $("<div>").text(event.note).addClass("col-xs-3");
        var $newList = $("<li>");

        $newList.addClass("row");
        $newList.append($newDate, $newCategory, $newAmount, $newNote);

        if (event.type === "income") {
            $newAmount.addClass("income-color");
        } else {
            $newAmount.addClass("expense-color");
        }

        $newList.prependTo(parent);
    };

    var clearData = function (formName) {
        var $form = formName;
        $($form).children('input[type="text"]').val
        $($form).children('input[type="number"]').val('');
        $($form).children('textarea').val('');
    };

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
    };

    return {
        updateList,
        updateTotals,
        clearData,
    }
    
})();