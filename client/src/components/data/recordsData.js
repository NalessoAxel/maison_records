import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AllVinyls = () => {

const [allVinyls, setAllVinyls] = useState({})
const [loadingVinyl, setLoadingVinyl] =  useState(true);

const getAllVinyls = async () => {
    try {
        const res = await axios ({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}api/vinyl/New/`,
            withCredentials: true, 
        });
    
        setAllVinyls(res.data);
        setLoadingVinyl(false);
        return allVinyls
        
    } catch (err) {
        console.log(err);
    }

}
getAllVinyls()


}
export default AllVinyls