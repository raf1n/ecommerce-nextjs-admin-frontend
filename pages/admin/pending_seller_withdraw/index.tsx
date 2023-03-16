import React from 'react'
import { useSelector } from 'react-redux'
import PendingSellerWithdraw from '../../../components/pages/AdminPage/Dashboard/Withdraw/PendingSellerWithdraw/PendingSellerWithdraw'
import { controller } from '../../../src/state/StateController'

interface Props {
}

const index: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return <PendingSellerWithdraw />
}

export default index