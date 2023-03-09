import React from 'react'
import { useSelector } from 'react-redux'
import PendingSellers from '../../../components/pages/AdminPage/Dashboard/Users/PendingSellers/PendingSellers'
import { controller } from '../../../src/state/StateController'

interface Props {
}

const index: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return <PendingSellers />
}

export default index