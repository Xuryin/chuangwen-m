import React, {Component} from 'react';
import './index.styl';
import { Modal } from 'antd';
import "antd/dist/antd.css";

class Table1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      currentIndex: 0
    }
  }

  showModal = ( code ) => {
    console.log(code)
    this.setState({
      visible: true,
      currentIndex: code
    }, () => {
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render () {
    const { data } = this.props;
    const { visible, currentIndex } = this.state
    return (
      <div className='low-table-staff'>
        <div className="low-table-report-title">
          <span>期数</span>
          <span>督察组</span>
          <span>问题描述</span>
        </div>
        <div className="low-table-report-table">
          <div className="low-table-report-content">
            {data.map((item, index) => (
              <div className='low-table-report-item'>
                <span>{item.issue || ""}</span>
                <span>{item.inspectorGroup || ""}</span>
                <div className='item-issue' onClick={() => this.showModal(index)}>
                  <span>{item.questionContent || ""}</span>
                  <span>查看更多>></span>
                </div>
              </div>)
            )}
          </div>

          <Modal
            width= {'320px'}
            footer={null}
            style={{ top: '150px'}}
            centerd
            visible={visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div className='modal-content'>
              <div>
                <span>期数：</span>
                <span>{data[currentIndex].issue || ""}</span>
              </div>
              <div>
                <span>督查组：</span>
                <span>{data[currentIndex].inspectorGroup || ""}</span>
              </div>
              <div>
                <span>问题描述：</span>
                <span>{data[currentIndex].questionContent || ""}</span>
              </div>
              <div>
                <span>解决方案：</span>
                <span>{data[currentIndex].solution || ""}</span>
              </div>

            </div>
          </Modal>
        </div>

      </div>
    )
  }
}

export default Table1;