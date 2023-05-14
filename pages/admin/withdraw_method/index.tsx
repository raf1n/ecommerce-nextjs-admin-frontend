import React from 'react'
import { useSelector } from 'react-redux'
import WithdrawMethod from '../../../components/pages/AdminPage/Dashboard/Withdraw/WithdrawMethod/WithdrawMethod'
import { controller } from '../../../src/state/StateController'

interface Props {
}

const index: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return <WithdrawMethod />
}

export default index