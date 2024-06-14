import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function MainHead(){
    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        const navbar = document.querySelector('.NavContainer');
        if (navbar) {
            setNavHeight(navbar.offsetHeight);
        }
    }, [navHeight]); // Include navHeight in the dependency array

    return (
        <div id="mainHead" className="MainContainer h-screen bg-gradient-to-b from-darkPurple via-midPurple to-darkBlack text-white" style={{ paddingTop: navHeight + 'px' }}>
            <div className="bg-center h-full w-full bg-contain bg-no-repeat bg-oval"></div>
            <div className="absolute w-80 h-96 top-[4em] left-[50em] bg-cover bg-center bg-desig rounded-tl-[100px] rounded-br-[90px] rounded-tr-[60px] rounded-bl-[40px]"></div>
            <div className="absolute w-80 h-96 top-[20em] left-[65em] bg-cover bg-center bg-deve rounded-tl-[100px] rounded-br-[90px] rounded-tr-[60px] rounded-bl-[40px]"></div>
            <h1 className="text-4xl font-bree w-[10em] md:text-5xl font-bold lg:text-6xl xl:text-5xl text-white" style={{ position: 'absolute', left: '20%', top: '50%', transform: 'translateY(-100%)' }}>Looking For Right People?</h1>
            <div style={{ position: 'absolute', left: '20%', top: 'calc(50% + 70px)', transform: 'translateY(-50%)' }}>
                <p className="font-bree leading-10 h-auto font-bold text-lg md:text-xl lg:text-2xl xl:text-5xl text-customPink w-[7em]">Let’s Connect & Collab..</p>
                <Link
                to="section"
                smooth={true}
                duration={800} >
                    <button className="absolute font-bree w-40 rounded-2xl text-xl align-middle left-1 inline-block mt-4 px-4 py-2 border border-customPink text-customPink bg-transparent transition duration-300 hover:bg-customPink hover:text-white hover:-translate-y-1 hover:shadow-xl">
                    Explore
                    <span className="absolute inset-0 rounded-2xl bg-customPink -z-10 opacity-0 transition duration-300 hover:opacity-100 hover: text-white"></span>
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default MainHead;
