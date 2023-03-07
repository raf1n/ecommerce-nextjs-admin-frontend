import React from 'react'
import { useSelector } from 'react-redux'
import SingleCustomerShow from '../../../../components/pages/AdminPage/Dashboard/Users/Customers/SingleCustomerShow'
import { controller } from '../../../../src/state/StateController'

interface Props {
}

const SingleCustomer: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return <SingleCustomerShow />
}

export default SingleCustomer