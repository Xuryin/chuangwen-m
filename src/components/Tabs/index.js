import React, { Component, Fragment } from 'react';
import './index.styl'

class Tabs extends Component {
  constructor() {
    super()
    this.state = {
      cur: 1
    }
  }
  onClickTab = (index) => {
    let _width = document.body.offsetWidth,
      width = this.dom.scrollWidth
    this.dom.scrollLeft = `${(index / this.props.children.length) * width}`
    this.setState({ cur: ++index })

    this.props.onClick && this.props.onClick();
  }
  render () {
    const { cur } = this.state
    return <div className="tabs-wrap">
      <div className="tabs flex" id="tabs">
        {this.props.children.map((item, index) => (
          <span className={index + 1 === cur ? 'cur' : ''} onClick={() => this.onClickTab(index)}>{item.props.title}</span>
        ))}
      </div>
      <div className="tabs-content flex" style={{ marginLeft: `-${(cur - 1) * 100}%` }}>
        {this.props.children.map((item, index) => (
          <div className="tabs-content-box" style={{}}>
            {item}
          </div>
        ))}
      </div>
    </div >
  }
  componentDidMount () {
    this.dom = document.getElementById('tabs')
  }
  componentWillUnmount () {

  }
}

class Item extends Component {
  render () {
    return <>
      {this.props.children}
    </>
  }
}

Tabs.Item = Item

export default Tabs
