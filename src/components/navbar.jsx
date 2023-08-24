

import { Link } from "react-router-dom"
function navbar() {
    return (
        
            <div className = " flex flex-row justify-between min-w-screen  bg-black h-24 border-b-[1px] shadow-md0">
                    <div className = "text-3xl font-mono text-white m-8 pl-3 font-semibold">AERO VISION</div>
                    
                    <div className = "flex flex-row items-center  mr-20 pl-20 space-x-56 text-gray-500 font-mono font-thin">
                        <Link to ='/' >
                        <h3 className = "hover:text-gray-200 font-regular">
                            HOME
                        </h3>
                        </Link>
                        <Link to ='/Profile' ><h3 className = "hover:text-gray-200 font-regular">
                            PROFILE
                        </h3></Link>
                        <Link to ='/Home'>
                        <h3 className = "hover:text-gray-200 font-regular">
                            LOG-OUT
                        </h3>
                        </Link>
                        

                    </div>
           </div>
           

        
    )
}

export default navbar
