import React from 'react'

import Home from './component/Page/Home'

import New from './component/Page/release/New'
import SecondHand from './component/Page/release/SecondHand'
import Merch from './component/Page/Merch'
import Accessories from './component/Page/Accessories'
import Live from './component/Page/Live/Live'
import SignUp from './component/Page/SignUp'
import SignIn from './component/Page/SignIn'
import Animations from './component/Header/Animations'
import Layout from './component/Layout'
import SellCollection from './component/Page/SellCollection'
import ReleaseDetails from './component/Page/release/ReleaseDetails'

// import TermAndCondition from './component/Footer/TermAndCondition'
// import About from './component/Footer/About'
// import Contact from './component/Footer/Contact'
// import ShippingInfos from './component/Footer/ShipingInfos'
import './scss/main.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
    const LayoutNew = () => <Layout><New/></Layout>
    const LayoutSecondHand = () => <Layout><SecondHand/></Layout>
    const LayoutSellCollection = () => <Layout><SellCollection/></Layout>
    const LayoutMerch = () => <Layout><Merch/></Layout>
    const LayoutAccessories = () => <Layout><Accessories/></Layout>
    const LayoutLive = () => <Layout><Live/></Layout>
    const LayoutSignUp = () => <Layout><SignUp/></Layout>
    const LayoutSignIn = () => <Layout><SignIn/></Layout>
    const LayoutAnimations = () => <Layout><Animations/></Layout>
    const LayoutReleaseDetails = () => <Layout><ReleaseDetails/></Layout>

    return (
        <>
        <div id="App">
        <Router>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Animations" component={LayoutAnimations} />
            <Route path="/New" component={LayoutNew} />
            <Route path="/SecondHand" component={LayoutSecondHand} />
            <Route path="/SellCollection" component={LayoutSellCollection} />
            <Route path="/Merch" component={LayoutMerch} />
            <Route path="/Accessories"  component={LayoutAccessories} />
            <Route path="/Live"  component={LayoutLive} />
            <Route path="/SignUp"  component={LayoutSignUp} />
            <Route path="/SignIn"  component={LayoutSignIn} />
            <Route path="/ReleaseDetails"  component={LayoutReleaseDetails} />
            </Switch> 
        </Router>
        </div>
        </>
    )
}

export default App