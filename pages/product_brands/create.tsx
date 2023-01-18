import React from 'react'
import { useSelector } from 'react-redux'
import ProductBrandsCreate from '../../components/pages/AdminPage/Dashboard/ManageProducts/ProductBrands/ProductBrandsCreate';
import { controller } from '../../src/state/StateController';

interface Props {
}

const create: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return <ProductBrandsCreate />

}

export default create