import React from 'react'
import { useSelector } from 'react-redux'
import CreateWithdrawMethod from '../../../components/pages/AdminPage/Dashboard/Withdraw/WithdrawMethod/CreateWithdrawMethod'
import { controller } from '../../../src/state/StateController'

interface Props {
}

const create: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return <CreateWithdrawMethod />
}

export default create