import React, {useState, useEffect} from 'react'
import Vinyl from './Vinyl'
import axios from 'axios'

const New = (props) => {
    const { products, onAdd } = props

    const [allVinyls, setAllVinyls] = useState({})
    const [loading, setLoading] =  useState(true);
    
    const getAllVinyls = async () => {
        try {
            const res = await axios ({
                method: "get",
                url: `${process.env.REACT_APP_API_URL}api/vinyl/New/`,
                withCredentials: true, 
            });
            setAllVinyls(res.data);
            setLoading(false);
            
        } catch (err) {
            console.log(err);
        }

    }
    
    useEffect(()=>{ 
        getAllVinyls()
    }, []);

    
        if (!loading){
            return(
            <>

            <main products={products}>
                <div className="header-container">
                    <h2>NEW RELEASE</h2>
                </div>
            <div className="container">
                <div className="entries">
                {allVinyls.map((product) =>(
                    <Vinyl key={product._id} product={product} onAdd={onAdd} ></Vinyl>
                ))}
                </div>
            </div>
            </main>
            </>
            )
        } else {
        return(<h3>Loading ...</h3>)
}
}


export default New