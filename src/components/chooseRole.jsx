import { Link } from 'react-router-dom';

function ChooseRole(){
    return (
        <div id="chooseRole" className="RoleContainer bg-customViolet h-auto pt-20 pb-20">
            <div className="flex flex-row justify-between ">
                <div className="h-auto w-auto flex-1 flex flex-col gap-6 items-center justify-center">
                    <h1 className="font-bree text-5xl w-[12em] text-wrap leading-normal text-center">Let&#39;s Create A <span className="text-customPink">Horizon</span> Where <span className="text-customPink">Ideas</span> Meet</h1>
                    <Link to="/register">
                    <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-btnC4 p-2 flex justify-center items-center font-extrabold">
                        <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-btnC3 delay-150 group-hover:delay-75"></div>
                        <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-btnC5 delay-150 group-hover:delay-100"></div>
                        <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-btnC2 delay-150 group-hover:delay-150"></div>
                        <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-btnC1 delay-150 group-hover:delay-200"></div>
                        <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-customPink delay-150 group-hover:delay-300"></div>
                        <p className="z-10 text-xl font-bree tracking-widest">Join Us</p>
                    </button>
                    </Link>


                </div>
                <div className="w-[50%] h-[40em] flex-1 relative">
                    <div className="absolute left-[18.5em] top-[12.5em] w-44 h-44 bg-white rounded-full z-10 flex items-center justify-center">
                        <p className="text-center text-customPink text-2xl font-bree">Choose Your Role</p>
                    </div>
                    <div className="absolute left-[3em] top-5 h-80 w-80 bg-customDarkPink rounded-full flex items-center justify-center">
                        <p className="text-center text-white text-3xl font-bree">Designer</p>
                    </div>
                    <div className="absolute left-[25em] top-5 h-80 w-80 bg-customDarkPink rounded-full flex items-center justify-center">
                        <p className="text-center text-white text-3xl font-bree">Developer</p>
                    </div>
                    <div className="absolute left-[14em] top-80 h-80 w-80 bg-customDarkPink rounded-full flex items-center justify-center">
                        <p className="text-center text-white text-3xl font-bree">Engineer</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ChooseRole;