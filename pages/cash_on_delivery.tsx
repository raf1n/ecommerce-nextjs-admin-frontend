import React from 'react'
import { useSelector } from 'react-redux'
import CashOnDelivery from '../components/pages/AdminPage/Dashboard/Orders/CashOnDelivery/CashOnDelivery';
import { controller } from './../src/state/StateController';

interface Props {
}

const cash_on_delivery: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return (
    <CashOnDelivery />
  )
}

export default cash_on_delivery