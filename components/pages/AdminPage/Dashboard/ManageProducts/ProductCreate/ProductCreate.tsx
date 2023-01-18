import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from './../../../../../../src/state/StateController';

interface Props {
}

const ProductCreate: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return (
    <div>
      ProductCreate
    </div>
  )
}

export default ProductCreate