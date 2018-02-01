$(function () {

  var expensesFuncChart = function () {
    
    var expensesChart = document.getElementById('expenses-chart').getContext('2d');

    Chart.defaults.global.defaultFontFamily = 'Helvetica, Arial, sans-serif';
    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.defaultFontColor = 'white';

    let massPopChart = new Chart(expensesChart, {
      type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data: {
        labels: ['Bills', 'Shopping', 'Vehicle', 'Transport', 'Health Care', 'Pets', 'Other'],
        datasets: [{
          data: [
            50, 
            30,
            50,
            10,
            80,
            25,
            33
          ],
          backgroundColor: [
            '#10edc5',
            '#ed1946',
            '#00ff00',
            '#9932cc',
            '#9a9aac',
            '#ff6347',
            '#ffd700',
          ],
        }]
      },
      options: {
        responsive: true,
        title: {
          fontSize: 35,
          display: true,
          text: 'Expenses by category',
        },
        legend: {
          display: true,
          position: 'bottom',
        },
        tooltips: {
          enabled: true
        }
      }
    });
  }

  expensesFuncChart();
}());