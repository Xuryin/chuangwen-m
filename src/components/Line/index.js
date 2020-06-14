import React, { Component } from 'react';
import { getUUID, px2spx } from '@/utils/func';
import echarts from '@/utils/echarts';

import './index.styl';

class Line extends Component {
  constructor(props) {
    super(props);

    this.id = 'gauge' + getUUID();
  }

  renderLine = () => {

    let options = {
      grid: {  
        left: '3%',   //图表距边框的距离
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        name: '单位/年',
        axisLabel: {
          textStyle: {
            fontFamily: 'HiraginoSansGB-W3',
            fontSize: px2spx(24),
            color: '#979797'
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#979797",
            width: 1,
            type: "solid"
          },
        },
        splitLine: {
          show: false
        },
        data: ['2015', '2016', '2017', '2018', '2019', '2010']
      },
      yAxis: [{
        type: 'value',
        name:"单位/件",
        axisLabel: {  // 单位／件 的颜色设置
          textStyle: {
            margin: 15,
            fontFamily: 'HiraginoSansGB-W3',
            fontSize: px2spx(24),
            color: '#979797'
          },
        },
        axisLine: { // 坐标轴线显示和样式配置
          show: false,
          lineStyle: {
            color: "#979797",
            width: 1,
            type: "solid"
          },
        },
        splitLine: {  // 图标分割线显示和样式配置
          show: true,
          lineStyle: {
            color: "#979797",
          }
        }
      }],
      series: [{
        data: [820, 932, 901, 934, 1290, 30],
        type: 'line',
        symbol: 'diamond',//拐点样式
        symbolSize: 8,//拐点大小
        smooth: true,
        itemStyle : {  
          normal : {  
            color:'#2D7ECD',    // 拐点颜色
            lineStyle:{
              width:2,          // 线宽度
              color:'#2D7ECD'   // 线颜色
            }  
          }  
        },
      }]
    };

    this.lineChart && this.lineChart.setOption(options);
  }

  render() {
    const { className } = this.props;

    return(
      <div id={this.id} className={className}></div>
    );
  }

  componentDidMount() {
    this.lineChart = echarts.init(document.getElementById(this.id));

    this.renderLine();
  }
}

export default Line;