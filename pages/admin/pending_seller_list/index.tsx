import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import PendingSellers from '../../../components/pages/AdminPage/Dashboard/Users/PendingSellers/PendingSellers'
import { controller } from '../../../src/state/StateController'
import { CookiesHandler } from '../../../src/utils/CookiesHandler'

interface Props {
}

const index: React.FC<Props> = (props) => {
  useEffect(() => {
    console.log(CookiesHandler.getSlug(), "getSlug");
  }, [])

  const states = useSelector(() => controller.states)
  
  return <PendingSellers />
}

export default index;