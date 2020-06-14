import React, { Component } from 'react';
import { Title, ContentBox, ScrollBox, TextItem, Gauge, ListItem, Line, Pie, Tabs } from '@/components';

import './index.styl'

export default class Index extends Component {


  render() {

    return (
      <div className="index-container">
        <Tabs>
          <Tabs.Item title="中心城区创文数据">
            <ContentBox>
              <Title text="中心城区创文点位数据"/>
              <ScrollBox num={6}>
                <TextItem data={{ name: '创文单位数(个)', num: '1802' }}/>
                <TextItem data={{ name: '创文小区数(个)', num: '1802' }}/>
                <TextItem data={{ name: '创文测评重点点位(个)', num: '1802' }}/>
                <TextItem data={{ name: '创文测评重点点位(个)', num: '1802' }}/>
                <TextItem data={{ name: '创文单位数(个)', num: '1802' }}/>
                <TextItem data={{ name: '创文单位数(个)', num: '1802' }}/>
              </ScrollBox>
            </ContentBox>
            <EmptyBlock />

            <ContentBox>
              <Title text="中心城区创文示范活动数据" color="#EF4864"/>
              <ScrollBox>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <TextItem data={{ name: '活动次数(次）', num: '885' }}>
                    <div className="footer-title">2018(次）</div>
                    <div className="footer-num">9820</div>
                  </TextItem>
                  <TextItem data={{ name: '参与人数(人）', num: '1832402' }}/>
                  <TextItem data={{ name: '第三方创文问卷、民主测评(次)', num: '32' }}/>
                </div>
              </ScrollBox>
            </ContentBox>
            <EmptyBlock />

            <ContentBox>
              <Title text="中心城区创文建设数据" color="#FACC15"/>
              <ScrollBox num={6}>
                <TextItem data={{ name: '未成年人校外心理辅导站(个)', num: '434' }}/>
                <TextItem data={{ name: '社会主义核心价值观主题公园(个)', num: '44' }}/>
                <TextItem data={{ name: '社会主义核心价值观主题街道(个)', num: '6' }}/>
              </ScrollBox>
            </ContentBox>
            <EmptyBlock />

            <ContentBox>
              <Title text="第三方测评数据" color="#30C25B"/>
              <div className="gauge-content">
                <Gauge className="gauge-container" />
                <div className="gauge-title">全市开展文明城市创建活动知晓率</div>
              </div>

              <div className="gauge-content">
                <Gauge className="gauge-container" />
                <div className="gauge-title">全市开展文明城市创建活动知晓率</div>
              </div>
            </ContentBox>
            
          </Tabs.Item>
          <Tabs.Item title="志愿者服务数据">
            <ListItem
              data={{
                name: '全市市级及以上道德模范人数',
                num: '112',
                unit: '个',
                time: '2020-04-03'
              }}
            />
            <ListItem
              data={{
                name: '全市市级及以上道德模范人数',
                num: '112',
                unit: '个',
                time: '2020-04-03'
              }}
            />
          </Tabs.Item>
          <Tabs.Item title="创文建设数据">
            <ListItem
              data={{
                name: '全市市级及以上道德模范人数',
                num: '112',
                unit: '个',
                time: '2020-04-03'
              }}
            />
            <ListItem
              data={{
                name: '全市市级及以上道德模范人数',
                num: '112',
                unit: '个',
                time: '2020-04-03'
              }}
            />
          </Tabs.Item>
          <Tabs.Item title="创文办投诉处理件数">
            <div className="line-content">
              <div className="chart-header">
                <div className="chart-header-item chart-header-item-left">
                  <div className="chart-header-item-label">累计处理件数</div>
                  <div className="chart-header-item-span">
                    333
                    <span className="chart-header-item-unit"></span>
                  </div>
                </div>
                <div className="chart-header-item chart-header-item-right">
                  <div className="chart-header-item-label">更新时间</div>
                  <div className="chart-header-item-span">2020/6/6</div>
                </div>
              </div>
              <Line className="line-container" />
            </div>
          </Tabs.Item>
          <Tabs.Item title="新时代文明实践中心数">
            <div className="pie-content">
              <div className="chart-header">
                <div></div>
                <div className="chart-header-item chart-header-item-right">
                  <div className="chart-header-item-label">更新时间</div>
                  <div className="chart-header-item-span">2020/6/6</div>
                </div>
              </div>
              <Pie className="pie-container" />
            </div>
          </Tabs.Item>
        </Tabs>
        
      </div>
    );
  }
}


const EmptyBlock = (props) => {
  const { height } = props;

  return (
    <div className="empty-block-container" style={ height ? {height} : {} }></div>
  );
}
