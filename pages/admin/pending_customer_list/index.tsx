import React from 'react'
import { useSelector } from 'react-redux'
import PendingCustomers from '../../../components/pages/AdminPage/Dashboard/Users/PendingCustomers/PendingCustomers'
import { controller } from '../../../src/state/StateController'

interface Props {
}

const index: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return <PendingCustomers />
}

export default index