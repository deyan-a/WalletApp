var incomeChartFunc = function () {
    var parent = document.getElementById('income-chart-div');
    parent.removeChild(document.getElementById('income-chart'));
    var newChild = document.createElement('canvas');
    newChild.setAttribute('id', 'income-chart');
    parent.append(newChild);

    var expChart = document.getElementById('income-chart').getContext('2d');

    Chart.defaults.global.defaultFontFamily = 'Helvetica, Arial, sans-serif';
    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.defaultFontColor = 'rgba(0, 0, 0, 0.8)';


    var massPopChart = new Chart(expChart, {
        type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels: ['Salary', 'Sale', 'Rent', 'Other'],
            datasets: [{
                label: '',
                data: [
                    incomeModule.getCategory('salary'),
                    incomeModule.getCategory('sale'),
                    incomeModule.getCategory('rent'),
                    incomeModule.getCategory('other'),
                ],
                backgroundColor: [
                    '#242858',
                    '#88C448',
                    '#3299BB',
                    '#C7390B',
                ],
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Income by category',
                fontSize: 35,
                fontColor: 'rgba(0, 0, 0, 0.8)',
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