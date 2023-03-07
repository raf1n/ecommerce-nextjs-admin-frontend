import React from 'react'
import { useSelector } from 'react-redux'
import Sellers from '../../../components/pages/AdminPage/Dashboard/Users/Sellers/Sellers'
import { controller } from '../../../src/state/StateController'

interface Props {
}

const index: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return <Sellers />
}

export default index