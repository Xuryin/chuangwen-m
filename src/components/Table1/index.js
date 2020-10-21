import React, {Component} from 'react';
import './index.styl';
import { Modal } from 'antd';
import "antd/dist/antd.css";

class Table1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  showModal = ( code ) => {
    this.getDetails( code )
    console.log(code)
    this.setState({
      visible: true,
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
    console.log(this.props)
    const { visible } = this.state
    return (
      <div className='low-table-staff'>
        <div className="low-table-report-title">
          <span>期数</span>
          <span>督察组</span>
          <span>问题描述</span>
          <span>解决方式</span>
        </div>
        <div className="low-table-report-table">
          <div className="low-table-report-content">
            {data.map((item, index) => (
              <div>
                <span>{item.issue || ""}</span>
                <span>{item.inspectorGroup || ""}</span>
                <span>{item.questionContent || ""}</span>
                <span>{item.solution || ""}</span>
              </div>)
            )}
          </div>

          <Modal
            width={'730px'}
            footer={null}
            style={{ top: '150px' }}
            bodyStyle={{ height: '484px',background: 'rgba(5,49,115,0.97)',
              boxShadow: 'inset 0 0 11px 0 rgba(8,130,255,0.54)'}}
            centerd
            visible={visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >

          </Modal>
        </div>

      </div>
    )
  }
}

export default Table1;