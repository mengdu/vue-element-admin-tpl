<template>
<div class="page-body">
  <m-container fluid>
    <m-row>
      <m-col md="3">
        <m-box class="count-panel">
          <div class="count-detail">
            <span class="count-number" style="color: #1A9653">{{formatNumber(usersTotal)}}</span>
            <span class="count-unit">人</span>
          </div>
          <h2 class="count-title">累计用户</h2>
        </m-box>
      </m-col>
      <m-col md="3">
        <m-box class="count-panel">
          
          <div class="count-detail">
            <span class="count-number" style="color: #028CCE">{{formatNumber(postsTotal)}}</span>
            <span class="count-unit">篇</span>
          </div>
          <h2 class="count-title">文章总数</h2>
        </m-box>
      </m-col>
      <m-col md="3">
        <m-box class="count-panel">
          
          <div class="count-detail">
            <span class="count-number" style="color: #FB7763">{{formatNumber(readTotal)}}</span>
            <span class="count-unit">万次</span>
          </div>
          <h2 class="count-title">累计阅读</h2>
        </m-box>
      </m-col>
      <m-col md="3">
        <m-box class="count-panel">
          
          <div class="count-detail">
            <span class="count-number" style="color: #444444">{{formatNumber(readTotal)}}</span>
            <span class="count-unit">万次</span>
          </div>
          <h2 class="count-title">累计阅读</h2>
        </m-box>
      </m-col>
    </m-row>

    <m-row>
      <m-col md="6">
        <m-box class="chart-box">
          <div class="chart" ref="chart1"></div>
        </m-box>
      </m-col>

      <m-col md="6">
        <m-box class="chart-box">
          <div class="chart" ref="chart2"></div>
        </m-box>
      </m-col>
      <m-col md="6">
        <m-box class="chart-box">
          <div class="chart" ref="chart3"></div>
        </m-box>
      </m-col>

    </m-row>
  </m-container>
  <!-- <m-box>
    xxx
  </m-box> -->
</div>
</template>
<script type="text/javascript">
import echarts from 'echarts'
import G2 from '@antv/g2'
window.echarts = echarts
const chartOptions1 = {
  title: {
    text: '折线图堆叠',
    textStyle: {color: '#222D32'}
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210],
      color: '#36CBCB',
      itemStyle: {
        borderWidth: 2
      }
    },
    {
      name: '联盟广告',
      type: 'line',
      stack: '总量',
      data: [220, 182, 1000, 234, 290, 330, 310],
      color: '#F2637B'
    },
    {
      name: '视频广告',
      type: 'line',
      stack: '总量',
      data: [150, 232, 201, 500, 300, 100, 410],
      color: '#3AA1FF'
    },
    {
      name: '直接访问',
      type: 'line',
      stack: '总量',
      data: [320, 332, 301, 334, 390, 330, 320],
      color: '#FCDB5B'
    },
    {
      name: '搜索引擎',
      type: 'line',
      stack: '总量',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      color: '#1890FF'
    }
  ]
}

const data2 = [
  {
    year: '1991',
    value: 3
  }, {
    year: '1992',
    value: 4
  }, {
    year: '1993',
    value: 3.5
  }, {
    year: '1994',
    value: 5
  }, {
    year: '1995',
    value: 4.9
  }, {
    year: '1996',
    value: 6
  }, {
    year: '1997',
    value: 7
  }, {
    year: '1998',
    value: 9
  }, {
    year: '1999',
    value: 13
  }
]

const data3 = {
  // backgroundColor: '#2c343c',
  title: {
    text: 'Customized Pie',
    left: 'center',
    top: 20,
    textStyle: {
      // color: '#ccc'
    }
  },

  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },

  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 274, name: '联盟广告'},
        {value: 235, name: '视频广告'},
        {value: 400, name: '搜索引擎'}
      ].sort(function (a, b) { return a.value - b.value }),
      roseType: 'radius',
      label: {
        normal: {
          textStyle: {
            // color: 'rgba(255, 255, 255, 0.3)'
          }
        }
      },
      labelLine: {
        normal: {
          lineStyle: {
            // color: 'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        }
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200
      }
    }
  ]
}

export default {
  data () {
    return {
      usersTotal: 5462487,
      postsTotal: 100000,
      readTotal: 1002321
    }
  },
  methods: {
    formatNumber (num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    setChart1 () {
      this.chart1 = echarts.init(this.$refs['chart1'])
      this.chart1.setOption(chartOptions1, true)
    },
    setChart2 () {
      this.chart2 = new G2.Chart({
        container: this.$refs['chart2'],
        forceFit: true,
        height: '400'
      })
      this.chart2.source(data2)
      this.chart2.scale('value', {
        min: 0
      })
      this.chart2.scale('year', {
        range: [0, 1]
      })
      this.chart2.tooltip({
        crosshairs: {
          type: 'line'
        }
      })
      this.chart2.line().position('year*value')
      this.chart2.point().position('year*value').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 1
      })
      this.chart2.render()
    },
    setChart3 () {
      this.chart3 = echarts.init(this.$refs['chart3'])
      this.chart3.setOption(data3, true)
    },
    handleResize () {
      this.chart1.resize()
      this.chart3.resize()
    }
  },
  mounted () {
    this.setChart1()
    this.setChart2()
    this.setChart3()
    window.addEventListener('resize', this.handleResize)
  }
}
</script>
<style>
  .count-panel{
    min-height: 120px;
    margin-bottom: 15px !important;
    border: solid 1px #dee1e4;
  }
  .count-panel .count-title{
    font-size: 1rem;
    margin-bottom: 0;
    text-align: center;
    color: #8E9AA9;
  }
  .count-panel .count-detail{
    text-align: center;
  }
  .count-panel .count-number{
    font-size: 2.5rem;
    font-weight: 100;
    font-family: 'Microsoft YaHei';
    letter-spacing: 2px;
  }
  .count-panel .count-unit{
    color: #4D4D4D;
  }

  .chart-box .chart{
    min-height: 400px;
  }
</style>
