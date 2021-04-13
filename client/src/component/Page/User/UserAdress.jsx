import React, { useContext, useState , useEffect} from 'react'
import UserHeader from './UserHeader'

import ModalBilling from './Modal/ModalBilling/ModalBilling'
import ModalShipping from './Modal/ModalShipping/ModalShipping'
import { UidContext } from '../../AppContext';
import axios from 'axios'



const UserAdress = () => {
    // console.log(`
    //       ▄▀▀▄                ▄▀▀▄
    //      ▐▒▒▒▒▌              ▌▒▒▒▒▌
    //      ▌▒▒▒▒▐             ▐▒▒▒▒▒▐
    //     ▐▒▒▒▒▒▒▌─▄▄▄▀▀▀▀▄▄▄─▌▒▒▒▒▒▒▌
    //    ▄▌▒▒▒▒▒▒▒▀▒▒▒▒▒▒▒▒▒▒▀▒▒▒▒▒▒▐
    //  ▄▀▒▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌
    // ▐▒▒▒▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐
    // ▌▒▒▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌
    // ▒▒▐▒▒▒▒▒▒▒▒▒▄▀▀▀▀▄▒▒▒▒▒▄▀▀▀▀▄▒▒▐
    // ▒▒▌▒▒▒▒▒▒▒▒▐▌ ▄▄ ▐▌▒▒▒▐▌ ▄▄ ▐▌▒▒▌
    // ▒▐▒▒▒▒▒▒▒▒▒▐▌▐█▄▌▐▌▒▒▒▐▌▐█▄▌▐▌▒▒▐
    // ▒▌▒▒▒▒▒▒▒▒▒▐▌ ▀▀ ▐▌▒▒▒▐▌ ▀▀ ▐▌▒▒▒▌
    // ▒▌▒▒▒▒▒▒▒▒▒▒▀▄▄▄▄▀▒▒▒▒▒▀▄▄▄▄▀▒▒▒▒▐
    // ▒▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▄▄▒▒▒▒▒▒▒▒▒▒▒▐
    // ▒▌▒▒▒▒▒▒▒▒▒▒▒▒▀▒▀▒▒▒▀▒▒▒▀▒▀▒▒▒▒▒▒▐
    // ▒▌▒▒▒▒▒▒▒▒▒▒▒▒▒▀▒▒▒▄▀▄▒▒▒▀▒▒▒▒▒▒▒▐
    // ▒▐▒▒▒▒▒▒▒▒▒▒▀▄▒▒▒▄▀▒▒▒▀▄▒▒▒▄▀▒▒▒▒▐
    // ▒▓▌▒▒▒▒▒▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒▐
    // ▒▓▓▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌
    // ▒▒▓▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌
    // ▒▒▓▓▀▀▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐
    // ▒▒▒▓▓▓▓▓▀▀▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▄▀▀▒▌
    // ▒▒▒▒▒▓▓▓▓▓▓▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▒▒▒▒▒▐
    // ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌
    // ▒▒▒▒▒▒▒█▒█▒█▀▒█▀█▒█▒▒▒█▒█▒█▒▒▒▒▒▒▐
    // ▒▒▒▒▒▒▒█▀█▒█▀▒█▄█▒▀█▒█▀▒▀▀█▒▒▒▒▒▒▐
    // ▒▒▒▒▒▒▒▀▒▀▒▀▀▒▀▒▀▒▒▒▀▒▒▒▀▀▀▒▒▒▒▒▒▐
    // █▀▄▒█▀▄▒█▀▒█▀█▒▀█▀▒█▒█▒█▒█▄▒█▒▄▀▀▐
    // █▀▄▒█▀▄▒█▀▒█▄█▒▒█▒▒█▀█▒█▒█▀██▒█▒█▐
    // ▀▀▒▒▀▒▀▒▀▀▒▀▒▀▒▒▀▒▒▀▒▀▒▀▒▀▒▒▀▒▒▀▀▐
    // ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐`
    // );


    const {uid} = useContext(UidContext)
    
    const [loading, setLoading] = useState(true);
    const [formValue, setFormValue] = useState({});

    useEffect(() => {
      const getInfo = async () => {
        try {
          const res = await axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}api/user/` + uid.id,
            withCredentials: true,
          });
          setFormValue(res.data);
          setLoading(false);
          console.log("helllllo",res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getInfo();
    }, []);
    

    return (
        <>
        {uid ? (
          <>
          {!uid.admin ? (
            <> 
            <UserHeader />
              <div className="adress">
            
            <ModalBilling />
            <ModalShipping />
            </div> 
            </>
          ) : (
            <p>You're an admin so not supposed to be here</p>
          )}
          </>
        ) : ( 
        <p>Please login if you're attempting to reach your profile.</p>
        )}
        
        </>
)}

export default UserAdress
