import React from 'react'
import { useSelector } from 'react-redux'
import Inventory from '../../../components/pages/AdminPage/Dashboard/Inventory/Inventory'
import { controller } from '../../../src/state/StateController'

interface Props {
}

const index: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return <Inventory />
}

export default index