import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../../../src/state/StateController'

interface Props {
}

const CreateWithdrawMethod: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return (
    <div>
      CreateWithdrawMethod
    </div>
  )
}

export default CreateWithdrawMethod