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