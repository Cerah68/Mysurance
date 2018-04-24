import React from 'react'
import { Switch, Route } from 'react-router-dom'
import InsurancePage from '../src/components/insurance/InsurancePage'
import ManageInsurancePage from '../src/components/insurance/ManageInsurancePage';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={InsurancePage} />
        <Route path="/insurance" component={ManageInsurancePage} />
    </Switch>
)

export default Routes
