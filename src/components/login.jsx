import React from "react";
import transparent from "../assets/DARK_BANNER_TRANSP.png"
import aerovison from "../assets/logo.png"
import ReactTyped from "react-typed";
import { Link } from "react-router-dom"
function login() {
    return (
        <div>
            <div class="min-h-screen bg-black">
           <div className ="flex flex-col justify-center items-center p-40">
                
                
<section>
	<div class="bg-black text-gray-500 py-4">
		<div class="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
			<div class="flex flex-col w-full lg:w-1/3 p-8">
                <div className = "flex flex-row">
                    <ReactTyped className=" text-yellow-300 text-3xl uppercase tracking-loose font-mono" strings={['AEROVISION']} typeSpeed={60}/>
                    <div class="  ml-2 text-3xl uppercase tracking-loose font-mono">CTF</div> 
                </div>
                <p class="text-sm md:text-base my-5 leading-snug text-gray-500 text-opacity-100">
                            "Unleash Your Inner Hacker: Join the Ultimate CTF Challenge!"
                </p>
			</div>
			<div class="flex flex-col w-full lg:w-2/3 justify-center">
				<div class="container w-full px-4">
					<div class="flex flex-wrap justify-center">
						<div class="w-full lg:w-6/12 px-4">
							<div
								class="w-96 flex flex-col min-w-0 break-words  mb-6 shadow-sm shadow-blue-400 rounded-xl border-[1px] border-gray-400">
                                    <div class="flex p-5 lg:pl-10">
									<form id="feedbackForm" action="" method="">
										<div class="w-72 mt-5 ">
											<label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="userName">UserName</label><input type="userName" name="userName" id="userName" class="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-500 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
                         required />
                    </div>	
									</form>
								</div>
								<div class="flex-auto pl-5 lg:pl-10">
									<form id="feedbackForm" action="" method="">
										<div class="w-72  mb-3">
											<label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="Password">PassWord</label><input type="password" name="password" id="password" class="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-500 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
                         required />
                    </div>		
					<div class="text-center mt-8 mb-6">
					    <Link to ="/">
						<button id="feedbackBtn"
                        class="border-[1px] border-gray-400 text-gray-400 text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="">Login
                      </button>						
						</Link>
						
					</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
            <div className = "h-full w-60 mb-14 flex justify-center">
                <img className = "opacity-40"src={transparent} alt="" />
            </div>
           </div>
            </div>
        </div>
    )
}

export default login
