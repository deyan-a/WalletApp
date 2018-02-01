(function () {

    var lePageSwitcherModule = (function () {
        // page button tabs
        var $home = $("#home-link")
        var $report = $("#report-link")
        var $income = $("#income-link")
        var $expenses = $("#expenses-link")
        var $budget = $("#budget-link")
        var $contacts = $("#contacts-link")

        // pages
        var $homePage = $(".home-page");
        var $incomePage = $(".income-page");
        var $expensesPage = $(".expenses-page");
        var $budgetPage = $(".budget-page");
        var $contactsPage = $(".contacts-page");
        $home.on("click", function() {
            // $homePage.addClass("current-page");
            $homePage.show(300);
            $incomePage.hide(300);
            $expensesPage.hide(300);
            $budgetPage.hide(300);
            $contactsPage.hide(300);
        });
        $report.on("click", function() {
            $homePage.hide(300);
            $incomePage.show(300);
            $expensesPage.hide(300);
            $budgetPage.hide(300);
            $contactsPage.hide(300);
        });
        $income.on("click", function() {
            $homePage.hide(300);
            $incomePage.show(300);
            $expensesPage.hide(300);
            $budgetPage.hide(300);
            $contactsPage.hide(300);
        });
        $expenses.on("click", function() {
            $homePage.hide(300);
            $incomePage.hide(300);
            $expensesPage.show(300);
            $budgetPage.hide(300);
            $contactsPage.hide(300);
        });
        $budget.on("click", function() {
            $homePage.hide(300);
            $incomePage.hide(300);
            $expensesPage.hide(300);
            $budgetPage.show(300);
            $contactsPage.hide(300);
        });
        $contacts.on("click", function() {
            $homePage.hide(300);
            $incomePage.hide(300);
            $expensesPage.hide(300);
            $budgetPage.hide(300);
            $contactsPage.show(300);
        });
        


    })();

})();