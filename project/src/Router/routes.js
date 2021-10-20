import React from 'react'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'


import { About } from '../component/about/about'
import { Barbecue } from '../component/barbecue/barbecue'
import { Burger } from '../component/burger/burger'
import { Contact } from '../component/Contact/contact'
import { Final } from '../component/final/final'
import { Gallery } from '../component/Gallery/gallery'
import { Home } from '../component/home/home'
import Login from '../component/Login/login'
import { Diffmenu } from '../component/Menu/diffmenu/diffmenu'
import { Fullmenu } from '../component/Menu/Fullmenu/fullmenu'
import { Mexican } from '../component/mexican/mexican'
import { Pizza } from '../component/pizza/pizza'
import Reg from '../component/Registration/reg'


import { Sandwich } from '../component/sandwich/sandwich'
import Scroll from '../component/scroll'
import { Sushi } from '../component/Sushi/sushi'
import { Tabb } from '../component/Tab/tabb'

import { Team } from '../component/Team/team'
import { Testimonial, testimonial } from '../component/Testi/testimonial'



import { Header } from '../layout/header/header'
export const Routes = () => {
    return (
        <div>
            <Router>
                <Header></Header>
                <Switch>
                 <Route exact path="/" component={Home}></Route>
                 <Route path="/about" component={About}></Route>
                 <Route path="/contact" component={Contact}></Route>
                 <Route path="/diffmenu" component={Diffmenu}></Route>
                 <Route path="/fullmenu" component={Fullmenu}></Route>
                 <Route path="/sus" component={Sushi}></Route>
                 <Route path="/bur" component={Burger}></Route>
                 <Route path="/pizza" component={Pizza}></Route>
                 <Route path="/sand" component={Sandwich}></Route>
                 <Route path="/barb" component={Barbecue}></Route>
                 <Route path="/mex" component={Mexican}></Route>
                 <Route path="/fin" component={Final}></Route>
                 <Route path="/login" component={Login}></Route>
                 <Route path="/regi" component={Reg}></Route>
                 <Route path="/testi" component={Testimonial}></Route>
                 <Route path ="/team" component={Team}></Route>
                 <Route path="/tab" component={Tabb}></Route>
                
                 <Route path="/gal" component={Gallery}></Route>
                </Switch>
                <Scroll/>
            </Router>
        </div>
    )
}
