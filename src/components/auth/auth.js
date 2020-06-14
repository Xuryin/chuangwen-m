import React, { PureComponent } from 'react';
import fetch from "@/env/fetch";
import {getAuth} from '@/services/auth'

class Authorized extends PureComponent {
  state = {
    token: ''
  }

  //初始化权限
  constructor(props) {
    super(props)
  }

  componentDidMount() {

    window.Cockpit && Cockpit.getToken("csdn-1202-pc", ({token}) => {
      // console.log(token)
      getAuth({
        token,
        // 驾驶舱编号
        cockpitCode: 'csdn-1202-pc'
      }).then((res) => {
        console.log(res)
        if(res && res.result) {
          const {
            token: cockpitToken
          } = res.result
          this.setState({
            token: cockpitToken
          })

          // 设置统一的头部变量
          fetch.defaults.headers.common['token'] = cockpitToken;
        }
      })
    });

  }

  render() {
    const { children } = this.props;
    const dom = this.state.token !== "" ? children : <div style={{ textAlign: 'center' }}>努力登录中...</div>;
    return dom;
  }
}

export default Authorized;
