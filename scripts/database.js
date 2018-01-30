/* eslint-disable */

let incomeModule = (function () {
    let categories = {
        salary: 0,
        sale: 0,
        rent: 0,
        other: 0,
        total: 0,
    };

    let addIncome = function (str, val) {
        if (str === 'salary') {
            categories.salary += val;
            categories.total += val;
        } else if (str === 'sale') {
            categories.sale += val;
            categories.total += val;
        } else if (str === 'rent') {
            categories.rent += val;
            categories.total += val;
        } else if (str === 'other') {
            categories.other += val;
            categories.total += val;
        }
    }

    let getTotal = function () {
        return categories.total;
    };


    let getCategory = function (str) {
        if (str === 'salary') {
            return categories.salary;
        } else if (str === 'sale') {
            return categories.sale;
        } else if (str === 'rent') {
            return categories.rent;
        } else if (str === 'other') {
            return categories.other;
        }
    }

    return {
        addIncome,
        getTotal,
        getCategory,
    };
})();

let expensesModule = (function () {
    let expenses = {
        bills: 0,
        shopping: 0,
        vehicle: 0,
        transport: 0,
        healthCare: 0,
        pets: 0,
        other: 0,
        total: 0,
    }

    let addExpense = function (str, val) {
        if (str === 'bills') {
            expenses.bills += val;
            expenses.total += val;
        } else if (str === 'shopping') {
            expenses.shopping += val;
            expenses.total += val;
        } else if (str === 'vehicle') {
            expenses.vehicle += val;
            expenses.total += val;
        } else if (str === 'transport') {
            expenses.transport += val;
            expenses.total += val;
        } else if (str === 'healthCare') {
            expenses.healthCare += val;
            expenses.total += val;
        } else if (str === 'pets') {
            expenses.pets += val;
            expenses.total += val;
        } else if (str === 'other') {
            expenses.other += val;
            expenses.total += val;
        }
    };

    let getCategory = function (str) {
        if (str === 'bills') {
            return expenses.bills;
        } else if (str === 'shopping') {
            return expenses.shopping;
        } else if (str === 'vehicle') {
            return expenses.vehicle;
        } else if (str === 'transport') {
            return expenses.transport;
        } else if (str === 'healthCare') {
            return expenses.healthCare += val;
        } else if (str === 'pets') {
            return expenses.pets;
        } else if (str === 'other') {
            return expenses.other;
        }
    }

    let getTotal = function () {
        return expenses.total;
    }

    return {
        addExpense,
        getCategory,
        getTotal,
    }
})();

let calculateBalance = (val1, val2) => {
    return val1.getTotal() - val2.getTotal();
};

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