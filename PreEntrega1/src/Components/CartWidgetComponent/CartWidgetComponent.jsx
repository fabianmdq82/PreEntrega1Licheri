import React from 'react'

import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const CartWidgetComponent = () => {
  return (
    <div>
        <FontAwesomeIcon icon={faCartShopping} />
        <span style={{ marginLeft: '0.5rem' }}>0</span>
    </div>
  )
}

export default CartWidgetComponent