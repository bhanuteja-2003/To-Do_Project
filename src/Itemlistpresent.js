import React from 'react'
import Lineitem from './Lineitem.js'
const Itemlistpresent = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
          {items.map((item) => {
            return (
              <Lineitem 
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
              />
            );
          })}
        </ul>
  )
}

export default Itemlistpresent