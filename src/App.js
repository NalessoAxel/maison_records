import React from 'react'
import HeaderTop from './component/Header/HeaderTop';
import Navbar from './component/Navbar/Navbar'
import New from './component/release/New'
import SecondHand from './component/release/SecondHand'
import Merch from './component/navigation/Merch'
import Accessories from './component/navigation/Accessories'
import Live from './component/navigation/Live'
import SignUp from './component/navigation/SignUp'
import SignIn from './component/navigation/SignIn'
import Footer from './component/Footer/Footer'
import SellCollection from './component/navigation/SellCollection'
import TermAndCondition from './component/Footer/TermAndCondition'
import About from './component/Footer/About'
import Contact from './component/Footer/Contact'
import ShippingInfos from './component/Footer/ShipingInfos'
import './scss/main.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <>
        <div id="App">
        <Router>
            <HeaderTop />
            <Navbar />
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/New" component={New} />
            <Route path="/SecondHand" component={SecondHand} />
            <Route path="/SellCollection" component={SellCollection} />
            <Route path="/Merch" component={Merch} />
            <Route path="/Accessories"  component={Accessories} />
            <Route path="/Live"  component={Live} />
            <Route path="/SignUp"  component={SignUp} />
            <Route path="/SignIn"  component={SignIn} />
            
            </Switch> 
            
        </Router>
        <Footer />
        </div>
        </>
    )
}
const Home = () => {
    return(
        <>
        <h1>HOME PAGE</h1>
        </>
    )
}
export default App