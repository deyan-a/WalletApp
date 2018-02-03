var updateExpensesList = function (parent, date, category, amount, note) {

    var $newDate = $("<div>").text(date).addClass("col-xs-3");
    var $newCategory = $("<div>").text(category).addClass("col-xs-3");
    var $newAmount = $("<div>").text(amount).addClass("col-xs-3");

    var $newNote = $("<div>").text(note).addClass("col-xs-3");
    var $newList = $("<li>");
    $newList.addClass("row");
    $newList.append($newDate, $newCategory, $newAmount, $newNote);
    $newList.prependTo(parent);
}