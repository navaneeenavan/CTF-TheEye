import CustomizedTables from "./table"
import CustomizedTables2 from "./profiletable"
function profileComponent() {
    return (

            <div className ="flex flex-row bg-black min-w-screen min-h-screen  border-b-[1px] shadow-xl shadow-blue-400 text-gray-400">
                <div className = "flex flex-col  w-1/2 border-r-[1px] border-gray-400">
                    <div className ="flex flex-row w-1/2 ">
                        <div className ="flex flex-col">
                            <div className = "text-white text-2xl ml-10 mt-10 font-thin font-mono">
                                PROFILE
                            </div>
                            <div className = "text-white text-md ml-20 mt-5 font-thin font-mono">
                                Name : 
                            </div>
                            <div className = "text-white text-md ml-20 mt-5 font-thin font-mono">
                                DEP :
                            </div>
                            <div className = "text-white text-md ml-20 mt-5 font-thin font-mono">
                                Name : 
                            </div>
                           
                        </div>
                    </div>
                    
                    
                    
                    

                    
                </div>

                <div className = "flex flex-col w-2/3 border-r-[1px]">
                <div className ="flex flex-col h-1/4 mt-10 ">
                        <div className = "text-white text-2xl ml-10 mt-2 font-thin font-mono">
                            OWN SCORE
                        </div>
                        
                        
                        <div className = "ml-7 mr-7 mb-7 mt-3">
                            <CustomizedTables2/>
                        </div>
                        <div className =" border-[1px] shadow-xl shadow-blue-400">

                        </div>
                    
                    </div>
                    <div className = "text-white text-2xl  ml-10 mt-10 font-thin font-mono ">
                        LEADERBOARD
                    </div>
                    <div className = "ml-7 mr-7 mt-3 border-b-[1px]">
                        <CustomizedTables/>
                    </div>
                </div>
                
            </div>

    )
}

export default profileComponent
