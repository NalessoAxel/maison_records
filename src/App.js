import  { useState } from 'react'

import Home from './component/Page/Home'
import New from './component/Page/release/New'
import SecondHand from './component/Page/release/SecondHand'
import Merch from './component/Page/Merch'
import Accessories from './component/Page/Accessories'
import Live from './component/Page/Live/Live'
import RegisterPage from './component/Page/LogInForm/RegisterPage'
import Animations from './component/Header/Animations'
import Layout from './component/Layout'
import SellCollection from './component/Page/SellCollection'
import ReleaseDetails from './component/Page/release/ReleaseDetails'
import Cart from './component/cart/Cart'

// import TermAndCondition from './component/Footer/TermAndCondition'
// import About from './component/Footer/About'
// import Contact from './component/Footer/Contact'
// import ShippingInfos from './component/Footer/ShipingInfos'
import './scss/main.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import data from './component/data/recordsData'

const App = () => {
    const { vinyls } = data
    const [ cartItems, setCartItems ] = useState([2])
    console.log(cartItems)
    const onAdd = (vinyl) => {
        const exist = cartItems.find(x => x.id === vinyl.id)
        if(exist) {
            setCartItems(cartItems.map(x => x.id === vinyl.id ? {...exist, quantity: exist.quantity + 1 } : x))
        } else  {
            setCartItems([...cartItems, {...vinyl, quantity: 1}])
        }
    }
    
    
    const LayoutNew = () => <Layout><New vinyl={vinyls} onAdd={onAdd}/></Layout>
    const LayoutSecondHand = () => <Layout><SecondHand/></Layout>
    const LayoutSellCollection = () => <Layout><SellCollection/></Layout>
    const LayoutMerch = () => <Layout><Merch/></Layout>
    const LayoutAccessories = () => <Layout><Accessories/></Layout>
    const LayoutLive = () => <Layout><Live/></Layout>
    const LayoutRegisterPage = () => <Layout><RegisterPage/></Layout>
    const LayoutAnimations = () => <Layout><Animations/></Layout>
    const LayoutReleaseDetails = () => <Layout><ReleaseDetails/></Layout>
    const LayoutCart = () => <Layout><Cart cartItems={cartItems} onAdd={onAdd}/></Layout>

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
            <Route path="/LogIn"  component={LayoutRegisterPage} />
            <Route path="/ReleaseDetails"  component={LayoutReleaseDetails} />
            <Route path="/Cart"  component={LayoutCart} />
            <Route path="/RegisterPage" component={LayoutRegisterPage} />
            </Switch> 
        </Router>
        </div>
        </>
    )
}

export default App