import React from 'react'
import { useSelector } from 'react-redux'
import SendEmailToAllCustomers from '../../../components/pages/AdminPage/Dashboard/Users/Customers/SendEmailToAllCustomers'
import { controller } from '../../../src/state/StateController'

interface Props {
}

const send_email_to_all_customer: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return <SendEmailToAllCustomers />
}

export default send_email_to_all_customer