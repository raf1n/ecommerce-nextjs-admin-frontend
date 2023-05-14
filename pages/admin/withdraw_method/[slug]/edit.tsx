import React from 'react'
import { useSelector } from 'react-redux'
import EditWithdrawMethod from '../../../../components/pages/AdminPage/Dashboard/Withdraw/WithdrawMethod/EditWithdrawMethod'
import { controller } from '../../../../src/state/StateController'

interface Props {
}

const edit: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return <EditWithdrawMethod />
}

export default edit