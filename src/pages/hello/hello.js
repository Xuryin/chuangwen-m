import React, { Component } from 'react';
import {getIndicator} from '@/services/hello'

class Hello extends Component {

  onClick = () => {
    console.log(process.env.NODE_ENV)
    getIndicator({a: 1}).then((response) => {
      console.log(response)
      console.log('request ok')
    })
  }

  render() {
    return <div>
      <button type="primary" onClick={this.onClick}>点发送请求</button>
    </div>
  }
}

export default Hello
