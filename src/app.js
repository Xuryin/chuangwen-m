import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Framework from './layouts/framework'
import Auth from '@/components/auth/auth'

import Hello from './pages/hello'



import './app.styl'

export default class App extends Component {
  render() {
    return (
      <Auth>
        <Router>
          <Framework>
            <Switch>
              <Route excat path={'/hello'} component={Hello} />
              <Redirect exact from={'/'} to={'/hello'} />
              <Route render={() => <div className="FBV FBAC FBJC" style={{fontSize: 100}}>404</div>} />
            </Switch>
          </Framework>
        </Router>
      </Auth>
    )
  }
}
