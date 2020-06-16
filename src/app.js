import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Framework from './layouts/framework'
import Auth from '@/components/auth/auth'

import Index from './pages/index'



import './app.styl'

export default class App extends Component {
  render() {
    return (
      // <Auth>
        <Router>
          <Framework>
            <Switch>
              <Route excat path={'/'} component={Index} />
              <Route render={() => <div className="FBV FBAC FBJC" style={{fontSize: 100}}>404</div>} />
            </Switch>
          </Framework>
        </Router>
      // </Auth>
    )
  }
}
