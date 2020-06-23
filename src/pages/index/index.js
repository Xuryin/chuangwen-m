import React, { Component } from 'react';
import { Title, ContentBox, ScrollBox, TextItem, Gauge, ListItem, Line, Pie, Tabs, Empty } from '@/components';
import { getData } from "@/services/cw";
import { formatTime } from '@/utils/func';

import './index.styl'


/**
 * 命名规范 [位置]_[首字母]
 * center_dw 中心城区创文点位数据
 * center_hd 中心城区创文示范活动数据
 * center_js 中心城区文创建设数据
 * center_cp 第三方测评数据
 * 
 * left_ts   市创文办投诉处理件数
 * left_zyz  全市志愿者及服务数据
 * 
 * right_js  全市创文建设数据
 * right_sj  全市新时代文明实践中心（所、站）数
 */
const DATA_MAP = {
  "普洱市中心城区参与创文单位数": "center_dw",
  "普洱市中心城区参与创文小区数": "center_dw",
  "普洱市中心城区创文测评重点点位": "center_dw",
  "普洱市中心城区创文测评固定点位": "center_dw",
  
  "普洱市中心城区创文主题示范活动次数（2018年起）": "center_hd",
  "普洱市中心城区创文主题示范活动参与人数（2018年起）": "center_hd",
  "普洱市中心城区开展第三方创文问卷、民主测评次数（2018年起）": 'center_hd',

  "普洱市中心城区未成年人校外心理辅导站数目": "center_js",
  "普洱市中心城区社会主义核心价值观主题公园数目": "center_js",
  "普洱市中心城区社会主义核心价值观主题街道数目": "center_js",
  "普洱市中心城区社会主义核心价值观主题广场数目": "center_js",
  
  "第三方测评全市开展文明城市创建活动知晓率": "center_cp_left",
  "第三方测评群众对创建文明城市的满意率": "center_cp_right",
  
  // "市创文办投诉处理件数（2018年起）": "left_ts",

  "全市志愿者总人数（2017年起）": "left_zyz",
  "全市学雷锋志愿服务站点数（2017年起）": "left_zyz",
  "全市优秀星级志愿者人数（2017年起）": "left_zyz",
  "全市典型志愿服务项目（活动数）（2017年起）": "left_zyz",
  "全市志愿服务小时数（2017年起）": "left_zyz",
  
  "全市市级及以上道德模范人数": "right_js",
  "全市市级及以上文明城市数量": "right_js",
  "全市市级及以上文明村数量": "right_js",
  "全市市级及以上文明单位数量": "right_js",
  "全市市级及以上文明校园数量": "right_js",
  "全市市级及以上文明家庭数量": "right_js",
  "全市新时代农民讲习所数目": "right_js",
  "全市乡村学校少年宫数目": "right_js",

  // "全市新时代文明实践中心（所、站）数": "right_sj"
  "全市新时代文明实践中心个数": "right_sj",
  "全市新时代文明实践所个数": "right_sj",
  "全市新时代文明实践站个数": "right_sj"
};

export default class Index extends Component {
  state = {
    data: {
      center_dw: [],
      center_hd: [],
      center_js: [],
      center_cp_left: [],
      center_cp_right: [],

      left_ts: {},
      left_zyz: [],

      right_js: [],
      right_sj: []
    },

    time: ['20171231', '20181231', '20191231', '20200531'],
    areaCodes: []
  }


  initData = () => {
    Promise.all([this.getDetail(), this.getTSData()]).then((data) => {
      this.setState({
        data: {
          center_dw: [],
          center_hd: [],
          center_js: [],
          center_cp_left: [],
          center_cp_right: [],

          left_ts: {},
          left_zyz: [],

          right_js: [],
          right_sj: []
        }
      }, () => {
        this.getAllData(data[0] || []);
        this.getTSResult(data[1] || []);
      })
    })
  }

  getDetail = () => {
    const { areaCodes } = this.state;

    return new Promise((resolve, reject) => {
      getData({
        indicatorCycles: this.state.time,
        areaCodes, // 530800000000 530801000000
        // cw_type: "市创文办投诉处理件数（2018年起）"
      }).then(res => {
        const { data } = res || {};

        resolve(data || []);
      }).catch(err => {
        resolve([])
      });
    });

  }

  // 获取投诉数据
  getTSData = () => {
    const { areaCodes } = this.state;

    return new Promise((resolve, reject) => {
      getData({
        indicatorCycles: ['2020', '2019', '2018', '2017'],
        areaCodes: areaCodes, // 530800000000 530801000000
        cw_type: "市创文办投诉处理件数（2018年起）"
      }).then(res => {
        const { data } = res || {};

        resolve(data || [])
        
      }).catch(err => {
        resolve([])
      });

    });
  }

  // 数据过滤处理
  getAllData = (list) => {
    let { data } = this.state;
    let newData = { ...data };

    (list || []).forEach(item => {
      if(item.cw_type) {
        if(DATA_MAP[item.cw_type]) {
          data[DATA_MAP[item.cw_type]].push(item);
        }
      }
    });
    console.log(newData);

    this.setState({
      data: newData
    });
  }

  // 处理投诉数据
  getTSResult = (data) => {
    let ts_data = {
      xData: [],
      yData: [],
      total: 0,
      xUnit: '',
      yUnit: ''
    };

    (data || []).forEach(item => {
      ts_data.xData.push(item.indicatorCycle);
      ts_data.yData.push(parseInt(item.total));
      ts_data.total += parseInt(item.total);
    });
    ts_data.xData = ts_data.xData.reverse();
    ts_data.yData = ts_data.yData.reverse();
    ts_data.xUnit = data && data[0] && data[0].update_cycle;
    ts_data.yUnit = data && data[0] && data[0].m_unit;


    this.setState({
      data: {
        ...this.state.data,
        left_ts: ts_data
      }
    });
  }

  // 定时更新数据
  intervalData = (time) => {
    this.timer && clearInterval(this.timer);

    this.timer = setInterval(() => {
      this.initData();
      
    }, time || 30000);
  }

  render() {
    const { data } = this.state;

    return (
      <div className="index-container">
        <Tabs onClick={this.initData}>
          <Tabs.Item title="中心城区创文数据">
            <ContentBox>
              <Title text="中心城区创文点位数据"/>
              <ScrollBox num={6}>
                {
                  (data && data.center_dw || []).map(item => <TextItem data={{ name: `${item.cw_type && item.cw_type.replace('普洱市中心城区', '')}(${item.m_unit})`, num: item.total }}/>)
                }
                {
                  (data && data.center_dw || []).length === 0 ? <Empty /> : null
                }
              </ScrollBox>
            </ContentBox>
            <EmptyBlock />

            <ContentBox>
              <Title text="中心城区创文示范活动数据（2018年起）" color="#EF4864"/>
              <ScrollBox>
                {/* <div style={{ display: 'flex', alignItems: 'flex-start' }}> */}
                {/* <TextItem data={{ name: '活动次数(次）', num: '885' }}>
                  <div className="footer-title">2018(次）</div>
                  <div className="footer-num">9820</div>
                </TextItem> */}
                {
                  (data && data.center_hd || []).map(item => <TextItem data={{ name: `${item.cw_type && item.cw_type.replace('普洱市中心城区', '').replace('（2018年起）', '')}(${item.m_unit})`, num: item.total }}/>)
                }
                {
                  (data && data.center_hd || []).length === 0 ? <Empty /> : null
                }
                {/* </div> */}
              </ScrollBox>
            </ContentBox>
            <EmptyBlock />

            <ContentBox>
              <Title text="中心城区创文建设数据" color="#FACC15"/>
              <ScrollBox num={6}>
                {
                  (data && data.center_js || []).map(item => <TextItem data={{ name: `${item.cw_type && item.cw_type.replace('普洱市中心城区', '')}(${item.m_unit})`, num: item.total }}/>)
                }
                {
                  (data && data.center_js || []).length === 0 ? <Empty /> : null
                }
              </ScrollBox>
            </ContentBox>
            <EmptyBlock />

            <ContentBox>
              <Title text="第三方测评数据" color="#30C25B"/>
              <div className="gauge-content">
                {
                  (data && data.center_cp_left || []).length > 0 ? (
                    <Gauge className="gauge-container" data={data && data.center_cp_left || []} />
                  ) : <Empty />
                }
                <div className="gauge-title">全市开展文明城市创建活动知晓率</div>
              </div>

              <div className="gauge-content">
                {
                  (data && data.center_cp_right || []).length > 0 ? (
                    <Gauge className="gauge-container" data={data && data.center_cp_right || []} />
                  ) : <Empty />
                }
                <div className="gauge-title">全市开展文明城市创建活动知晓率</div>
              </div>
            </ContentBox>
            
          </Tabs.Item>
          <Tabs.Item title="志愿者服务数据">
            {
              (data && data.left_zyz || []).map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    data={item}
                  />
                )
              })
            }
          </Tabs.Item>
          <Tabs.Item title="创文建设数据">
            {
              (data && data.right_js || []).map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    data={item}
                  />
                )
              })
            }
          </Tabs.Item>
          <Tabs.Item title="创文办投诉处理件数">
            <div className="line-content">
              <div className="chart-header">
                <div className="chart-header-item chart-header-item-left">
                  <div className="chart-header-item-label">累计处理件数</div>
                  <div className="chart-header-item-span">
                    { data && data.left_ts && data.left_ts.total } 
                    <span className="chart-header-item-unit">{ data && data.left_ts && data.left_ts.yUnit }</span>
                  </div>
                </div>
                <div className="chart-header-item chart-header-item-right">
                  <div className="chart-header-item-label">更新时间</div>
                  <div className="chart-header-item-span">
                    { formatTime(this.state.time[this.state.time.length - 1]) }
                  </div>
                </div>
              </div>
              {
                data && data.left_ts && data.left_ts.xData && data.left_ts.xData.length > 0 ? (
                  <Line className="line-container" data={data && data.left_ts || {}} />
                ) : <Empty />
              }
            </div>
          </Tabs.Item>
          <Tabs.Item title="新时代文明实践中心数">
            <div className="pie-content">
              <div className="chart-header">
                <div></div>
                <div className="chart-header-item chart-header-item-right">
                  <div className="chart-header-item-label">更新时间</div>
                  <div className="chart-header-item-span">{ formatTime(this.state.time[this.state.time.length - 1]) }</div>
                </div>
              </div>
              {
                (data && data.right_sj || []).length > 0 ? (
                  <Pie className="pie-container" data={data && data.right_sj || []} />
                ) : <Empty />
              }
            </div>
          </Tabs.Item>
        </Tabs>
        
      </div>
    );
  }

  componentDidMount() {
    // 获取链接上的areaCodes
    let areaCode = '', areaCodes = [];
    if(/areaCode=([0-9a-zA-Z]+)/.test(location.href)) {
      areaCode = RegExp.$1;
    }

    if(areaCode && areaCode != 'null') {
      // 如果是普洱市，请求所有全市的数据，否则请求当前对应的区域数据
      if(areaCode === '530800000000') {
        areaCodes = ['530800000000', '530801000000'];
      } else {
        areaCodes = [areaCode];
      }
    } else {
      areaCodes = ['530800000000', '530801000000'];
    }

    this.setState({
      areaCodes
    }, () => {
      this.initData();
    });

    this.intervalData(30000);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer)
  }
}


const EmptyBlock = (props) => {
  const { height } = props;

  return (
    <div className="empty-block-container" style={ height ? {height} : {} }></div>
  );
}
