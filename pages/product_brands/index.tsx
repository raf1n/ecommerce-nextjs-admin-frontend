import React from 'react'
import { useSelector } from 'react-redux'
import ProductBrands from '../../components/pages/AdminPage/Dashboard/ManageProducts/ProductBrands/ProductBrands';
import { controller } from './../../src/state/StateController';

interface Props {
}

const index: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return <ProductBrands />
}

export default index