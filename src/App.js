import Home from './components/Page/Home'

// PAGE
import New from './components/Page/release/New'
import ReleaseDetails from './components/Page/release/ReleaseDetails'
import SecondHand from './components/Page/release/SecondHand'
import Merch from './components/Page/Merch'
import Accessories from './components/Page/Accessories'
import Live from './components/Page/Live/Live'
import UserRegisterPage from './components/Page/LogInForm/UserRegisterPage'
import Animations from './components/Header/Animations'
import Layout from './components/Layout'
import SellCollection from './components/Page/SellCollection'

import Cart from './components/cart/Cart'

// USER
import Orders from './components/Page/User/Orders'
import Adress from './components/Page/User/UserAdress.jsx'
import UserDetails from './components/Page/User/UserDetails/UserDetails'

// ADMIN
import AdminHeader from './components/Page/admin/AdminHeader'
import AdminDashboard from './components/Page/admin/AdminDashboard'
import AddReference from './components/Page/admin/AddReference'
import AdminOrders from './components/Page/admin/AdminOrders'
import AdminVisitors from './components/Page/admin/AdminVisitors'

// import TermAndCondition from './component/Footer/TermAndCondition'
// import About from './component/Footer/About'
// import Contact from './component/Footer/Contact'
// import ShippingInfos from './component/Footer/ShipingInfos'

import './scss/main.scss'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import data from './components/data/recordsData'


const App = () => {

    const { products } = data
    const [ cartItems, setCartItems ] = useState([]) 

    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id)
        if(exist) {
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, quantity: exist.quantity + 1 } : x))
    } else  {
            setCartItems([...cartItems, {...product, quantity: 1}])
        }
    }
    
    const onRemove = (product) => {
        const exist = cartItems.find(x => x.id === product.id)
        if(exist.quantity === 1) {
            setCartItems(cartItems.filter(x => x.id !== product.id))
        } else {
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, quantity: exist.quantity - 1 } : x))
        }
    }
    
    
    const LayoutNew = () => <Layout><New products={products} onAdd={onAdd}/></Layout>
    const LayoutSecondHand = () => <Layout><SecondHand products={products} onAdd={onAdd}/></Layout>
    const LayoutSellCollection = () => <Layout><SellCollection/></Layout>
    const LayoutMerch = () => <Layout><Merch/></Layout>
    const LayoutAccessories = () => <Layout><Accessories/></Layout>
    const LayoutLive = () => <Layout><Live/></Layout>
    const LayoutUserRegisterPage = () => <Layout><UserRegisterPage/></Layout>
    const LayoutAnimations = () => <Layout><Animations/></Layout>
    const LayoutReleaseDetails = () => <Layout><ReleaseDetails/></Layout>
    const LayoutCart = () => <Layout><Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} /></Layout>
    const LayoutOrders = () => <Layout><Orders /></Layout>
    const LayoutAdress = () => <Layout><Adress /></Layout>
    const LayoutUserDetails = () => <Layout><UserDetails/></Layout>
    const LayoutAdminHeader = () => <Layout><AdminHeader/></Layout>
    const LayoutAdminDashboard = () => <Layout><AdminDashboard/></Layout>
    const LayoutAddReference = () => <Layout><AddReference/></Layout>
    const LayoutAdminOrders = () => <Layout><AdminOrders/></Layout>
    const LayoutAdminVisitors = () => <Layout><AdminVisitors/></Layout>
    
    

    return (
        
        <div id="App">

        <Router>
            
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Animations" exact component={LayoutAnimations} />
            <Route path="/New" exact component={LayoutNew} />
            <Route path="/SecondHand" exact component={LayoutSecondHand} />
            <Route path="/SellCollection" exact component={LayoutSellCollection} />
            <Route path="/Merch" exact component={LayoutMerch} />
            <Route path="/Accessories"  exact component={LayoutAccessories} />
            <Route path="/Live"  exact component={LayoutLive} />
            <Route path="/LogIn"  exact component={LayoutUserRegisterPage} />
            <Route path="/ReleaseDetails"  exact component={LayoutReleaseDetails} />
            <Route path="/Cart"  exact component={LayoutCart} />
            <Route path="/UserRegisterPage" exact component={LayoutUserRegisterPage} />
            <Route path="/Orders" exact component={LayoutOrders} />
            <Route path="/Adress" exact component={LayoutAdress} />
            <Route path="/UserDetails" exact component={LayoutUserDetails} />
            <Route path="/AdminHeader" exact component={LayoutAdminHeader} />
            <Route path="/AdminDashboard" exact component={LayoutAdminDashboard} />
            <Route path="/AddReference" exact component={LayoutAddReference} />
            <Route path="/AdminOrders" exact component={LayoutAdminOrders} />
            <Route path="/AdminVisitors" exact component={LayoutAdminVisitors} />
            
            
            </Switch> 
            
        </Router>
        </div>
        
    )
}

export default App