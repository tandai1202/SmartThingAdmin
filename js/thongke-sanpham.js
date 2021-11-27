var options = {
  series: [{
  data: [470, 540, 580, 690, 1100, 1200, 1380]
}],
  chart: {
  type: 'bar',
  height: 380
},
plotOptions: {
  bar: {
    barHeight: '100%',
    distributed: true,
    horizontal: true,
    dataLabels: {
      position: 'bottom'
    },
  }
},
colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
  '#f48024', '#69d2e7'
],
dataLabels: {
  enabled: true,
  textAnchor: 'start',
  style: {
    colors: ['#fff']
  },
  formatter: function (val, opt) {
    return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
  },
  offsetX: 0,
  dropShadow: {
    enabled: true
  }
},
stroke: {
  width: 1,
  colors: ['#fff']
},
xaxis: {
  categories: ['Samsung', 'Iphone', 'Đồng hồ', 'Nokia', 'Ausa', 'Hp', 'Tai nghe',
  ],
},
yaxis: {
  labels: {
    show: false
  }
},
title: {
    text: 'Sản phẩm bán chạy',
    align: 'center',
    floating: true
},
tooltip: {
  theme: 'dark',
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function () {
        return ''
      }
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();