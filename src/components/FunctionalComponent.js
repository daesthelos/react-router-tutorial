import React from 'react'
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'
import ComponentThree from './ComponentThree'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function FunctionalComponent(props) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ComponentOne} />
          <Route path="/two" component={ComponentTwo} />
          <Route path="/three" component={ComponentThree} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default FunctionalComponent;