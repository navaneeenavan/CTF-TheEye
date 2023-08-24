import React from "react"
import eye from "../assets/DARK_BANNER_TRANSP.png"
function footer() {
    return (
        <div className = "flex flex-row justify-center min-w-screen bg-fixed bg-black pt-20 pl-20 pr-20 pb-10 h-min-screen ">
            <div className ="text-xs font-mono font-regular text-gray-400">
                Powered By -
            </div>
            <img className = "opacity-50 h-32" src={eye} alt="" />
        </div>
    )
}

export default footer
 