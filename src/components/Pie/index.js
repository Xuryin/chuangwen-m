import React, { Component } from 'react';
import { getUUID, px2spx } from '../../utils/func';
import echarts from '../../utils/echarts';

import './index.styl';

class Pie extends Component {
  constructor(props) {
    super(props);

    this.id = 'gauge' + getUUID();
  }

  renderPie = () => {

    let options = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      grid: {
        bottom: '20%',   
        containLabel: true
      },
      legend: {
        orient: 'vertical',
        left: 'center',
        bottom: 'bottom',
        itemHeight: px2spx(22),     // 圆圈大小
        itemWidth: px2spx(22),
        itemGap: px2spx(63),   // 间距
        padding: [40, 0, 0, 0],
        textStyle: {
          fontFamily: "PingFangSC-Regular",
          fontSize: px2spx(24),
          color: "#0f0f0f"
        },
        data: [{
          name: '实践站',
          icon: "circle"
        }, {
          name: '实践所',
          icon: "circle"
        }, {
          name: '实践中心',
          icon: "circle"
        }]
      },
      
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          silent: true,   // 是否有鼠标交互
          label: {
            normal: {
              show: true,
              formatter: "{d}个",
              textStyle: {
                fontSize: px2spx(24),
                color: "#979797"
              },
            },
          },
          labelLine: {  // 线的样式
            normal: {
              lineStyle: {
                color: '#979797'
              },
              smooth: 0.8,
              length: px2spx(20),
            }
          },
          data: [
            {value: 335, name: '实践站'},
            {value: 310, name: '实践所'},
            {value: 234, name: '实践中心'}
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          itemStyle: {
            normal: {
              // 设置饼图的颜色
              color: function(params){
                let colors = ['#F2845F', '#F1D43B', '#19D6FF'];
                return colors[params.dataIndex];
              }
            },
          }
        }
      ]
    };

    this.pieChart && this.pieChart.setOption(options);
  }

  render() {
    const { className } = this.props;

    return(
      <div id={this.id} className={className}></div>
    );
  }

  componentDidMount() {
    this.pieChart = echarts.init(document.getElementById(this.id));

    this.renderPie();
  }
}

export default Pie;