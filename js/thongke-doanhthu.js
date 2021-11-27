var options = {
  series: [{
  name: 'doanh thu',
  type: 'column',
  data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
}, ],
  chart: {
  height: 350,
  type: 'line',
},
stroke: {
  width: [0, 4]
},
title: {
  text: 'Doanh thu'
},
dataLabels: {
  enabled: true,
  enabledOnSeries: [1]
},
labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();