import React from 'react'

const Footer = ({itemLen}) => {
    const today = new Date();
  return (
    <footer>
        <p>{itemLen} List {itemLen===1?"item":"items"}</p>
    </footer>
  )
}

export default Footer