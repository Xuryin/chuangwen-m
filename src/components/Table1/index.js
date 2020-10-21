import React, {Component} from 'react';
import './index.styl';

class Table1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { data } = this.props;
    console.log(this.props)
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
        </div>

      </div>
    )
  }
}

export default Table1;