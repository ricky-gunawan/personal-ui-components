import React from "react"
import ColorThemes from "./sidebar/ColorThemes"

const Sidebar = () => {
  return (
    <div className="fixed top-0 h-screen w-72 border-r-4 border-r-slate-300 bg-slate-50">
      <ColorThemes />
    </div>
  )
}

export default Sidebar
