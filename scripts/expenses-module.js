var expensesModule = (function () {
    var expenses = {
        bills: 0,
        shopping: 0,
        vehicle: 0,
        transport: 0,
        healthCare: 0,
        pets: 0,
        other: 0,
        total: 0,
    }

    var addExpense = function (str, val) {
        switch (str) {
            case 'bills':
                expenses.bills += (+val);
                expenses.total += (+val);
                break;
            case 'shopping':
                expenses.shopping += (+val);
                expenses.total += (+val);
                break;
            case 'vehicle':
                expenses.vehicle += (+val);
                expenses.total += (+val);
                break;
            case 'transport':
                expenses.transport += (+val);
                expenses.total += (+val);
                break;
            case 'healthCare':
                expenses.healthCare += (+val);
                expenses.total += (+val);
                break;
            case 'pets':
                expenses.pets += (+val);
                expenses.total += (+val);
                break;
            case 'other':
                expenses.other += (+val);
                expenses.total += (+val);
                break;
        }
    };

    var getCategory = function (str) {
        switch (str) {
            case 'bills':
            return expenses.bills;
            break;
            case 'shopping':
            return expenses.shopping;
            break;
            case 'vehicle':
            return expenses.vehicle;
            break;
            case 'transport':
            return expenses.transport;
            break;
            case 'healthCare':
            return expenses.healthCare;
            break;
            case 'pets':
            return expenses.pets;
            break;
            case 'other':
            return expenses.other;
            break;
        }
    }

    var getTotal = function () {
        return expenses.total;
    }

    return {
        addExpense,
        getCategory,
        getTotal,
    }
})();