var incomeModule = (function () {
    var categories = {
        salary: 0,
        sale: 0,
        rent: 0,
        other: 0,
        total: 0,
    };

    var addIncome = function (str, val) {

        switch (str) {
            case 'salary':
                categories.salary += (+val);
                categories.total += (+val);
                break;
            case 'sale':
                categories.sale += (+val);
                categories.total += (+val);
                break;
            case 'rent':
                categories.rent += (+val);
                categories.total += (+val);
                break;
            case 'other':
                categories.other += (+val);
                categories.total += (+val);
                break;
        }
    }

    var getTotal = function () {
        return categories.total;
    };


    var getCategory = function (str) {
        switch (str) {
            case 'salary':
                return categories.salary;
                break;
            case 'sale':
                return categories.sale;
                break;
            case 'rent':
                return categories.rent;
                break;
            case 'other':
                return categories.other;
                break;
        }
    }

    return {
        addIncome,
        getTotal,
        getCategory,
    };
})();

var calculateBalance = function (val1, val2) {
    return val1.getTotal() - val2.getTotal();
};