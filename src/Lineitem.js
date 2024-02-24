import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const Lineitem = ({item,handleCheck,handleDelete}) => {
  return (
    // key={item.id} is already present in the Itemlistispresent component
    <li className="item" > 
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => {
                    handleCheck(item.id);
                  }}
                />
                <label
                  onDoubleClick={() => {
                    handleCheck(item.id);
                  }}
                  style={
                    item.checked ? { textDecoration: "line-through" } : null
                  }
                >
                  {item.item}
                </label>
                <FaTrashAlt
                  role="button"
                  tabIndex="0"
                  aria-label={`Delete ${item.item}`}
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                />
              </li>
  )
}

export default Lineitem