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
  Chart.defaults.global.defaultFontColor = 'rgba(0, 0, 0, 0.8)';


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
          '#511167',
          '#242858',
          '#88C448',
          '#3299BB',
          '#FF9900',
          '#459A63',
          '#C7390B',
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
        labels: {
          fontColor: 'rgba(0, 0, 0, 0.8)'
      }
      },
      tooltips: {
        enabled: true
      }
    }
  });
}