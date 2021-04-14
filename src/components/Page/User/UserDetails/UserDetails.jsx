import React from 'react'

import UserHeader from '../UserHeader'
import ChangePassword from './UserFormDetails/ChangePassword/ChangePassword'
import ChangeInfos from './UserFormDetails/PersonalInfos/PersonnalInfos'


const LogIn = () => {
  

    return (
          <>
              <UserHeader />
              <div id="userInfosChange">
              <ChangeInfos />
              <ChangePassword />
              </div>
          </>
    )
  }


export default LogIn