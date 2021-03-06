import React, { PureComponent } from 'react';
import fetch from "@/env/fetch";
import {getAuth} from '@/services/auth'

class Authorized extends PureComponent {
  state = {
    // a21f815169dbf2a65d71fd2b033cca18
    token: '898a6950595753b3525e410e71d7f406'
  }

  //初始化权限
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const COCKPIT_ID = "scwb-1252-m"

    let token = ''
    if(/token=([0-9a-zA-Z]+)/.test(location.href)) {
      token = RegExp.$1
    }
    fetch.defaults.headers.common['token'] = '898a6950595753b3525e410e71d7f406';
    // window.Cockpit && Cockpit.getToken(COCKPIT_ID, ({token}) => {
    // console.log(token)
    getAuth({
      token,
      // 驾驶舱编号
      cockpitCode: COCKPIT_ID
    }).then((res) => {
      console.log(res)
      if(res && res.result) {
        const {
          token: cockpitToken
        } = res.result

        // 设置统一的头部变量
        fetch.defaults.headers.common['token'] = cockpitToken;
        this.setState({
          token: cockpitToken
        })
      }
    })
    // });

  }

  render() {
    const { children } = this.props;
    const dom = this.state.token !== "" ? children : <div style={{ textAlign: 'center' }}>努力登录中...</div>;
    return dom;
  }
}

export default Authorized;
