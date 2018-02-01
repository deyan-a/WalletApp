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
            $homePage.slideDown(300);
            $incomePage.hide(300);
            $expensesPage.hide(300);
            $budgetPage.hide(300);
            $contactsPage.hide(300);
        });
        $report.on("click", function() {
            $homePage.hide(300);
            $incomePage.slideDown(300);
            $expensesPage.hide(300);
            $budgetPage.hide(300);
            $contactsPage.hide(300);
        });
        $income.on("click", function() {
            $homePage.hide(300);
            $incomePage.slideDown(300);
            $expensesPage.hide(300);
            $budgetPage.hide(300);
            $contactsPage.hide(300);
        });
        $expenses.on("click", function() {
            $homePage.hide(300);
            $incomePage.hide(300);
            $expensesPage.slideDown(300);
            $budgetPage.hide(300);
            $contactsPage.hide(300);
        });
        $budget.on("click", function() {
            $homePage.hide(300);
            $incomePage.hide(300);
            $expensesPage.hide(300);
            $budgetPage.slideDown(300);
            $contactsPage.hide(300);
        });
        $contacts.on("click", function() {
            $homePage.hide(300);
            $incomePage.hide(300);
            $expensesPage.hide(300);
            $budgetPage.hide(300);
            $contactsPage.slideDown(300);
        });
        


    })();

})();