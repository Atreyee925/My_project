import React from 'react'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import { About } from '../component/about/about'
import { Contact } from '../component/Contact/contact'
import { Home } from '../component/home/home'
import { Diffmenu } from '../component/Menu/diffmenu/diffmenu'

import { Header } from '../layout/header/header'
export const Routes = () => {
    return (
        <div>
            <Router>
                <Header></Header>
                <Switch>
                 <Route path="/home" component={Home}></Route>
                 <Route path="/about" component={About}></Route>
                 <Route path="/contact" component={Contact}></Route>
                 <Route path="/diffmenu" component={Diffmenu}></Route>
                 
                </Switch>
            </Router>
        </div>
    )
}
