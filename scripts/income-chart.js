(function() {

var incomeChartFunc = function () {
    var parent = document.getElementById('income-chart-div');
    parent.removeChild(document.getElementById('income-chart'));
    var newChild = document.createElement('canvas');
    newChild.setAttribute('id', 'income-chart');
    parent.append(newChild);

    var expChart = document.getElementById('income-chart').getContext('2d');
    
    Chart.defaults.global.defaultFontFamily = 'Helvetica, Arial, sans-serif';
    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.defaultFontColor = 'white';

    var massPopChart = new Chart(expChart, {
        type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels: ['Salary', 'Sale', 'Rent', 'Other'],
            datasets: [{
                label: '',
                data: [
                    // salary, sale, rent, other
                    4, 3, 2, 1
                ],
                backgroundColor:'green',
                backgroundColor: [
                    'pink',
                    'skyblue',
                    'orange',
                    'red',
                ],
                hoverBorderWidth: 5,
                hoverBorderColor: 'white'
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Income by category',
                fontSize: 35,
                fontColor: 'white',
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontColor: 'white'
                }
            },
            tooltips: {
                enabled: true
            }
        }
    });
}
incomeChartFunc();
})();