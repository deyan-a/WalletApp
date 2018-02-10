var homeChartFunc = function () {
    var parent = document.getElementById('home-graph');
    parent.removeChild(document.getElementById('home-chart'));
    var newChild = document.createElement('canvas');
    newChild.setAttribute('id', 'home-chart');
    parent.append(newChild);

    var homeChart = document.getElementById('home-chart').getContext('2d');
    
    var income = incomeModule.getTotal();
    var expenses = expensesModule.getTotal();
    var balance = calculateBalance(incomeModule, expensesModule);
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.defaultFontColor = 'rgba(0, 0, 0, 0.8)';

    var massPopChart = new Chart(homeChart, {
        type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels: ['Income', 'Expenses', 'Balance'],
            datasets: [{
                label: '',
                data: [
                    income,
                    expenses,
                    balance
                ],
                backgroundColor: [
                    '#88C448',
                    '#C7390B',
                    '#3299BB',
                ],
                hoverBorderWidth: 1,
                hoverBorderColor: '#000'
            }]
        },
        options: {
            title: {
                display: false,
                text: 'My Budget',
                fontSize: 10,
                fontColor: 'rgba(0, 0, 0, 0.8)',
            },
            legend: {
                display: false,
                position: 'right',
                labels: {
                    fontColor: 'rgba(0, 0, 0, 0.8)',
                }
            },
            scales: {
    xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    fontColor: 'rgba(0, 0, 0, 0.4)',                    
                }
            }],
    yAxes: [{
                gridLines: {
                    display: true
                },
                ticks: {
                    fontColor: 'rgba(0, 0, 0, 0.4)',
                    
                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                    // OR //
                    beginAtZero: true   // minimum value will be 0.
                }
            }]
    },
            tooltips: {
                enabled: false
            }
        }
    });
}