import React, {Component} from 'react';
import './index.styl';

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { total, data } = this.props;
    console.log(this.props)

    return (
      <div>
        <div className='low-table-staff'>
          <div className='table-staff-title'>
            <span>社区</span>
            <span>人数 <span className='title-total'>{total} <span className='title-per'>(个)</span> </span> </span>
          </div>
        </div>

        <div className='low-table-staff-table' >
          <div className='low-table-staff-content' >
            {data.map((item, index) => (
              <div className='table-staff-content'>
                <span>
                  {item.company}</span>
                <span>{item.ctn}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Table;