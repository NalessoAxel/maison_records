import React from 'react'
import HeaderTop from './component/HeaderTop';
import Navbar from './component/Navbar'
import New from './component/New'
import SecondHand from './component/SecondHand'
import Merch from './component/Merch'
import Accessories from './component/Accessories'
import Live from './component/Live'
import SignUp from './component/SignUp'
import SignIn from './component/SignIn'
import './scss/main.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
    return (
        <>
        
        <Router>
            <HeaderTop />
            <Navbar />
            
            <Route path="/New" component={New} />
            <Route path="/SecondHand" component={SecondHand} />
            <Route path="/Merch" exact component={Merch} />
            <Route path="/Accessories" exact component={Accessories} />
            <Route path="/Live" exact component={Live} />
            <Route path="/SignUp" exact component={SignUp} />
            <Route path="/SignIn" exact component={SignIn} />
        </Router>
        </>
    )
}
export default App