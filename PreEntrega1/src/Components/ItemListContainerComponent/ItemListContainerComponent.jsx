
import React from 'react'

const ItemListContainerComponent = ({greeting}) => {
    const custonStyles = {
        color: "red",
        fontSize: "4rem",
        margin: "auto",
        width: "100vw",
        height: "80vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    }
  return (
    <div style={custonStyles}>{greeting}</div>
  )
}

export default ItemListContainerComponent