import React, { Component } from 'react';
import { getUUID, px2spx } from '@/utils/func';
import echarts from '@/utils/echarts';

import './index.styl';

class Line extends Component {
  constructor(props) {
    super(props);

    this.id = 'gauge' + getUUID();
    this.options = {
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
        data: []
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
        data: [],
        type: 'line',
        symbol: 'diamond',//拐点样式
        symbolSize: 8,//拐点大小
        smooth: true,
        itemStyle : {  
          normal : { 
            label: {
              show: true        // 节点展示数据
            }, 
            color:'#2D7ECD',    // 拐点颜色
            lineStyle:{
              width:2,          // 线宽度
              color:'#2D7ECD'   // 线颜色
            }  
          }  
        },
      }]
    };

  }

  init = (data) => {
    const { xData, yData, xUnit, yUnit } = data || {};

    this.options.xAxis.data = xData;
    this.options.series[0].data = yData;
    this.options.xAxis.name = `单位/${xUnit || ''}`;
    this.options.yAxis[0].name = `单位/${yUnit || ''}`;
    this.renderLine();
  }

  renderLine = () => {
    this.lineChart && this.lineChart.setOption(this.options);
  }

  render() {
    const { className } = this.props;

    return(
      <div id={this.id} className={className}></div>
    );
  }

  componentDidMount() {
    this.lineChart = echarts.init(document.getElementById(this.id));

    this.init(this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    this.init(nextProps.data);
  }
}

export default Line;