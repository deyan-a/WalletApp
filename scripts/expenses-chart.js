var expensesFuncChart = function () {

  var parent = document.getElementById('expenses-chart-div');
  parent.removeChild(document.getElementById('expenses-chart'));
  var newChild = document.createElement('canvas');
  newChild.setAttribute('id', 'expenses-chart');
  parent.append(newChild);

  
  var expensesChart = document.getElementById('expenses-chart').getContext('2d');

  var bills = expensesModule.getCategory('bills');
  var shopping = expensesModule.getCategory('shopping');
  var vehicle = expensesModule.getCategory('vehicle');
  var transport = expensesModule.getCategory('transport');
  var healthCare = expensesModule.getCategory('healthCare');
  var pets = expensesModule.getCategory('pets');
  var other = expensesModule.getCategory('other');
  

  Chart.defaults.global.defaultFontFamily = 'Helvetica, Arial, sans-serif';
  Chart.defaults.global.defaultFontSize = 15;
  Chart.defaults.global.defaultFontColor = 'white';

  let massPopChart = new Chart(expensesChart, {
    type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: ['Bills', 'Shopping', 'Vehicle', 'Transport', 'Health Care', 'Pets', 'Other'],
      datasets: [{
        data: [
          bills, 
          shopping,
          vehicle,
          transport,
          healthCare,
          pets,
          other,
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