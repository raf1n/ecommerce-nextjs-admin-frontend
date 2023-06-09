import React from 'react'
import { useSelector } from 'react-redux'
import Customers from '../../../components/pages/AdminPage/Dashboard/Users/Customers/Customers'
import { controller } from '../../../src/state/StateController'

interface Props {
}

const index: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return <Customers />
}

export default index