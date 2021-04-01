import Home from './component/Page/Home'

// PAGE
import New from './component/Page/release/New'
import SecondHand from './component/Page/release/SecondHand'
import Merch from './component/Page/Merch'
import Accessories from './component/Page/Accessories'
import Live from './component/Page/Live/Live'
import UserRegisterPage from './component/Page/LogInForm/UserRegisterPage'
import Animations from './component/Header/Animations'
import Layout from './component/Layout'
import SellCollection from './component/Page/SellCollection'
import ReleaseDetails from './component/Page/release/ReleaseDetails'
import Cart from './component/cart/Cart'

// USER
import Orders from './component/Page/User/Orders'
import Adress from './component/Page/User/UserAdress'
import UserDetails from './component/Page/User/UserDetails'

// ADMIN
import AdminHeader from './component/Page/admin/AdminHeader'
import AdminDashboard from './component/Page/admin/AdminDashboard'
import AddReference from './component/Page/admin/AddReference'
import AdminOrders from './component/Page/admin/AdminOrders'


// import TermAndCondition from './component/Footer/TermAndCondition'
// import About from './component/Footer/About'
// import Contact from './component/Footer/Contact'
// import ShippingInfos from './component/Footer/ShipingInfos'

import './scss/main.scss'
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import data from './component/data/recordsData'
<<<<<<< HEAD:src/App.js
import AdminVisitors from './component/Page/admin/AdminVisitors'
=======
import {UidContext} from './component/AppContext'
import axios from 'axios'
>>>>>>> 548a2a3a46b65acc5997a8c73fe97e3f8f1c8f56:client/src/App.js

const App = () => {

    const [uid,setUid] = useState(null);

  useEffect(()=>{  
    const fetchToken = async () =>{
      await axios ({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true
      })
      .then((res)=>{
        console.log(res);
        setUid(res.data);
      })
      .catch((err)=>console.log("No token"))
    };
    fetchToken();
  }, []); // no callback otherwise useEffect will loop [we take admin status]




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
<<<<<<< HEAD:src/App.js
    const LayoutAdminHeader = () => <Layout><AdminHeader/></Layout>
    const LayoutAdminDashboard = () => <Layout><AdminDashboard/></Layout>
    const LayoutAddReference = () => <Layout><AddReference/></Layout>
    const LayoutAdminOrders = () => <Layout><AdminOrders/></Layout>
    const LayoutAdminVisitors = () => <Layout><AdminVisitors/></Layout>
    
    
=======

>>>>>>> 548a2a3a46b65acc5997a8c73fe97e3f8f1c8f56:client/src/App.js

    return (
      <UidContext.Provider value={uid}>  // we place the UID at the top of our app so we don't have to put it in every page
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
        
      </UidContext.Provider>
        
    )
}

export default App