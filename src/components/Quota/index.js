import React, {Component} from 'react';
import './index.styl';

class Quota extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { title, imgUrl, number, code, quota } = this.props.data;

    return (
      <div className='quota-item'>
        <div className='item-img'>
          <img src={imgUrl} alt=""/>
        </div>
        <div class="item-number">
          <span>{title}</span>
          <span>{number} <span className="item-per">{quota}</span></span>

        </div>
      </div>
    )
  }
}

export default Quota;