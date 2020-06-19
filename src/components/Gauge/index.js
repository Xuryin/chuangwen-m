import React, { Component } from 'react';
import { getUUID, px2spx } from '@/utils/func';
import echarts from '@/utils/echarts';

import './index.styl';

class Gauge extends Component {
  constructor(props) {
    super(props);

    this.id = 'gauge' + getUUID();
    this.options = {
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      silent: false,
      series: [
        {
          name: '业务指标',
          type: 'gauge',
          detail: {
            formatter: '{value}%',
            color: '#2D7ECD',
            fontSize: px2spx(42),
            fontFamily: 'Helvetica',
            //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移
            offsetCenter: [0, '65%']
          },
          data: [],
          startAngle: 210,
          endAngle: -30,
          splitNumber: 4,		// 仪表盘刻度的分割段数,默认 10
          min: 0,					// 最小的数据值,默认 0 。映射到 minAngle。
          max: 100,				// 最大的数据值,默认 100 。映射到 maxAngle
          axisLine: {
            show: true,
            lineStyle: {
              width: px2spx(20),  // 表盘宽度
              color: [[0.25, '#F24646'], [0.5, '#FAAD14'], [0.75, '#A0D911'], [1, '#30BF78']]
            }
          },
          axisLabel: {
            show: false
          },
          axisTick: {   // 小刻度线
            show: false
          },
          splitLine: {			// 分隔线样式。
            show: true,				// 是否显示分隔线,默认 true。
            length: 15,				// 分隔线线长。支持相对半径的百分比,默认 30。
            lineStyle: {			// 分隔线样式。
              color: "#fff",				//线的颜色,默认 #eee。
              opacity: 1,					  //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
              width: 0,					    //线度,默认 2。
              type: "solid",				//线的类型,默认 solid。 此外还有 dashed,dotted
              // shadowBlur: 10,				//(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
              // shadowColor: "#fff",		//阴影颜色。支持的格式同color。
            }
          },
          pointer: {
            width: px2spx(6), //指针的宽度
            length: "50%", //指针长度，按照半圆半径的百分比
          },
          markPoint:{
            symbol:'circle',
            symbolSize: px2spx(20),
            data:[
              //跟你的仪表盘的中心位置对应上，颜色可以和画板底色一样
              {
                x:'center',
                y:'center',
                itemStyle:{
                  color:'#fff',
                  borderWidth: px2spx(4),
                  borderColor: 'rgba(0,0,0,0.25)'
                }
              },
            ]
          }
        }
      ]
      
    };
  }

  init = (data) => {
    if(data && data.length > 0) {
      const { etlTime, m_unit, total } = data[0];

      this.options.series[0].data = [{
        value: total * 100, itemStyle: { color: 'rgba(0,0,0,.25)' }
      }];

      this.renderGauge();
    }
  }

  renderGauge = () => {

    this.gaugeChart && this.gaugeChart.setOption(this.options);
  }

  render() {
    const { className } = this.props;

    return(
      <div id={this.id} className={className}></div>
    );
  }

  componentDidMount() {
    this.gaugeChart = echarts.init(document.getElementById(this.id));

    this.init(this.props.data);
  }


  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    
    this.init(data);
  }
}

export default Gauge;