import React from 'react'
import HeaderTop from './component/HeaderTop';
import Navbar from './component/navigation/Navbar'
import New from './component/release/New'
import SecondHand from './component/release/SecondHand'
import Merch from './component/navigation/Merch'
import Accessories from './component/navigation/Accessories'
import Live from './component/navigation/Live'
import SignUp from './component/navigation/SignUp'
import SignIn from './component/navigation/SignIn'
import Footer from './component/Footer/Footer'
import SellCollection from './component/navigation/SellCollection'
import './scss/main.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
    return (
        <>
        <div id="App">
        <Router>
            <HeaderTop />
            <Navbar />
            
            <Route path="/New" component={New} />
            <Route path="/SecondHand" component={SecondHand} />
            <Route path="/SellCollection" component={SellCollection} />
            <Route path="/Merch" component={Merch} />
            <Route path="/Accessories"  component={Accessories} />
            <Route path="/Live"  component={Live} />
            <Route path="/SignUp"  component={SignUp} />
            <Route path="/SignIn"  component={SignIn} />
            
        </Router>
        <Footer />
        </div>
        </>
    )
}
export default App