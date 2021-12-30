import React from "react"

export function wrapPageElement({ element, props }) {
  return <div className="browser bg-background h-full ">{element}</div>
}
