var options = {
  series: [{
  name: 'Số lượng',
  type: 'column',
  data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
}, {
  name: 'doanh thu',
  type: 'column',
  data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false
},
dataLabels: {
  enabled: false
},
stroke: {
  width: [1, 1, 4]
},
title: {
  text: 'Đơn hàng',
  align: 'left',
  offsetX: 110
},
xaxis: {
  categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
},
yaxis: [
  {
    axisTicks: {
      show: true,
    },
    axisBorder: {
      show: true,
      color: '#008FFB'
    },
    labels: {
      style: {
        colors: '#008FFB',
      }
    },
    title: {
      text: "Số lượng",
      style: {
        color: '#008FFB',
      }
    },
    tooltip: {
      enabled: true
    }
  },
  {
    seriesName: 'Income',
    opposite: true,
    axisTicks: {
      show: true,
    },
    axisBorder: {
      show: true,
      color: '#00E396'
    },
    labels: {
      style: {
        colors: '#00E396',
      }
    },
    title: {
      text: "Doanh thu",
      style: {
        color: '#26e7a6',
      }
    },
    
  },
],
tooltip: {
  fixed: {
    enabled: true,
    position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
    offsetY: 30,
    offsetX: 60
  },
},
legend: {
  horizontalAlign: 'left',
  offsetX: 40
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
