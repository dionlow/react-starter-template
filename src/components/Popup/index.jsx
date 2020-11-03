import React from "react"

import { popup, popuptext, show } from "./styles.module.css"

const Popup = ({ isOpen, text }) => {
  const popupClass = isOpen ? `${popup} ${show}` : popup
  console.log(popupClass)

  return (
    <div className={popupClass}>
      <span className={popuptext}>{text}</span>
    </div>
  )
}

export default Popup
