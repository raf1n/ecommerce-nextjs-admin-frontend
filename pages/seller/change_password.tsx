import React from 'react'
import { useSelector } from 'react-redux'
import ChangePassword from '../../components/pages/SellerPage/SellerProfile/ChangePassword'
import { controller } from '../../src/state/StateController'

interface Props {
}

const change_password: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return <ChangePassword />
}

export default change_password;