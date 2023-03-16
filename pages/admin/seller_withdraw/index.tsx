import React from 'react'
import { useSelector } from 'react-redux'
import SellerWithdraw from '../../../components/pages/AdminPage/Dashboard/Withdraw/SellerWithdraw/SellerWithdraw'
import { controller } from '../../../src/state/StateController'

interface Props {
}

const index: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return <SellerWithdraw />
}

export default index