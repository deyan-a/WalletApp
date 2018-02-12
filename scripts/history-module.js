
    var historyModule = (function () {
        var list = [];
        var addEvent = function (type, amount, category, note, date) {
            list.push({
                type: type,
                amount: amount,
                category: category,
                note: note,
                date: date
            });
        }
        var returnList = function () {
            return list;
        }
        return {
            addEvent,
            returnList
        }
    })();

