import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../home/home';
import Group from '../group/group';


const Router = () =>

    <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/group" component={Group}></Route>
    </Switch>

    export default Router;
