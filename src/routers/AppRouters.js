import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import DashboardPage from '@pages/DashboardPage'

const AppRouters = () => (
  <BrowserRouter >
    <div>
      <Switch>
        <Route path="/" component={DashboardPage} exact={true}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouters
