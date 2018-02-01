
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
        var printArr = function () {
            list.forEach((entry) => {
                console.log("type: " + entry.type +
                    "\namount " + entry.amount +
                    "\ncategory " + entry.category +
                    "\npersonal note " + entry.note +
                    "\ndate " + entry.date);
            });
        }
        return {
            addEvent,
            printArr
        }
    })();

