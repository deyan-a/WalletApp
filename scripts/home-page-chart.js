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
    // Chart.defaults.global.defaultFontSize = 2em;
    Chart.defaults.global.defaultFontColor = 'white';

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
                    '#10EDC5',
                    '#ed1946',
                    '#9A9AAC',
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
                fontColor: 'white',
            },
            legend: {
                display: false,
                position: 'right',
                labels: {
                    fontColor: 'white'
                }
            },
            scales: {
    xAxes: [{
                gridLines: {
                    display: false
                }
            }],
    yAxes: [{
                gridLines: {
                    display: true
                },
                ticks: {
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