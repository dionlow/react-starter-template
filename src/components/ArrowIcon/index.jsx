import React from "react"

import { arrow, arrowUp } from "./styles.module.css"

// Defaults Up Arrow Icon
const ArrowIcon = ({ down = true }) => (
  <span className={down ? arrow : `${arrow} ${arrowUp}`} />
)

export default ArrowIcon
