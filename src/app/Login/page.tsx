export default function Login(){
    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="relative flex flex-col items-center gap-8 -translate-y-48">

                <label className="relative flex flex-col items-center justify-center w-[50px] h-[20px] gap-8">
                    <input type="checkbox" className="peer hidden" />

                    <span className="absolute inset-0 cursor-pointer rounded-md border-2 border-gray-800 bg-white 
                    shadow-[4px_4px_0_0_#323232] transition-colors duration-300 peer-checked:bg-blue-500"></span>
                    <span className="before:absolute before:content-['Log_in'] before:-left-[70px] before:top-0 
                    before:underline before:font-semibold before:text-gray-800 after:absolute after:content-['Sign_up'] 
                    after:left-[70px] after:top-0 after:w-[100px] after:font-semibold after:text-gray-800 
                    peer-checked:before:no-underline peer-checked:after:underline"></span>

                    <span className="before:absolute before:content-[''] before:h-[20px] before:w-[20px] before:rounded-md before:border-2 
                    before:border-gray-800 before:bg-white before:shadow-[0_3px_0_#323232] before:transition-transform before:duration-300 
                    peer-checked:before:translate-x-[30px]"></span>

                    <div className="relative w-[300px] h-[350px] text-center transition-transform duration-700 [transform-style:preserve-3d] 
                    [perspective:1000px] peer-checked:[transform:rotateY(180deg)]">

                        <div className="absolute inset-0 flex flex-col items-center gap-5 rounded-md border-2 border-gray-800 bg-gray-200 p-5
                        shadow-[4px_4px_0_0_#323232] backface-hidden">
                            <div className="my-5 text-2xl font-black text-gray-800">Log in</div>
                            <form className="flex flex-col items-center gap-5 w-full">
                                <input type="text" placeholder="User Name" className="w-[250px] h-[40px] rounded-md border-2 border-gray-800 
                                bg-white px-3 py-1 text-[15px] font-semibold text-gray-800 shadow-[4px_4px_0_0_#323232] outline-none 
                                focus:border-blue-500 placeholder:text-gray-500 placeholder:opacity-80" />
                                <input type="password" placeholder="Password" className="w-[250px] h-[40px] rounded-md border-2 border-gray-800 
                                bg-white px-3 py-1 text-[15px] font-semibold text-gray-800 shadow-[4px_4px_0_0_#323232] outline-none 
                                focus:border-blue-500 placeholder:text-gray-500 placeholder:opacity-80" />
                                <button className="mt-5 w-[120px] h-[40px] rounded-md border-2 border-gray-800 bg-white text-lg font-semibold
                                text-gray-800 shadow-[4px_4px_0_0_#323232] active:shadow-none active:translate-x-[3px] active-translate-y-[3px]">
                                    Let's go!
                                </button>
                            </form>
                        </div>

                        <div className="absolute inset-0 flex flex-col items-center gap-5 rounded-md border-2 border-gray-800 bg-gray-200 p-5
                        [transform:rotateY(180deg)] shadow-[4px_4px_0_0_#323232] backface-hidden">
                            <div className="my-5 text-2xl font-black text-gray-800">Sign up</div>
                            <form className="flex flex-col items-center gap-5 w-full">
                                <input type="text" placeholder="Full Name" className="w-[250px] h-[40px] rounded-md border-2 border-gray-800 
                                bg-white px-3 py-1 text-[15px] font-semibold text-gray-800 shadow-[4px_4px_0_0_#323232] outline-none 
                                focus:border-blue-500 placeholder:text-gray-500 placeholder:opacity-80" />
                                <input type="tel" placeholder="Phone Number" className="w-[250px] h-[40px] rounded-md border-2 border-gray-800 
                                bg-white px-3 py-1 text-[15px] font-semibold text-gray-800 shadow-[4px_4px_0_0_#323232] outline-none 
                                focus:border-blue-500 placeholder:text-gray-500 placeholder:opacity-80" />
                                <button className="mt-5 w-[120px] h-[40px] rounded-md border-2 border-gray-800 bg-white text-lg font-semibold
                                text-gray-800 shadow-[4px_4px_0_0_#323232] active:shadow-none active:translate-x-[3px] active-translate-y-[3px]">
                                    Let's go!
                                </button>
                            </form>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    )
}