import React from "react"

import { popup, popuptext, show } from "./styles.module.css"

// TODO: this popup or callout affordance is WIP. It's not very clear when to use this over an error message.
const Popup = ({ isOpen, text }) => {
  const popupClass = isOpen ? `${popup} ${show}` : popup

  return (
    <div className={popupClass}>
      <span className={popuptext}>{text}</span>
    </div>
  )
}

export default Popup
