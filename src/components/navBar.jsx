import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import websiteIcon from '../assets/websiteicon.jpg';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`NavContainer h-14 w-full bg-transparent fixed top-0 z-10 flex justify-between text-white items-center px-8 ${scrolled ? 'backdrop-filter backdrop-blur-lg bg-white bg-opacity-25 text-black font-bold' : ''}`}>
            <img src={websiteIcon} alt="Website Icon" className="h-8 w-auto" />
            <ul className={`NavList list-none flex gap-8 justify-end text-lg font-mono font-medium ${scrolled ? 'text-black font-bold' : ''}`}>
                <li className='px-3 hover:cursor-pointer hover:-translate-y-1 font-bree'>
                    <ScrollLink to="mainHead" smooth={true} duration={600}>
                        Home
                    </ScrollLink>
                </li>
                <li className='px-2 hover:cursor-pointer hover:-translate-y-1 font-bree'>
                    <ScrollLink to="section" smooth={true} duration={600}>
                        Explore
                    </ScrollLink>
                </li>
                <li className='px-2 hover:cursor-pointer hover:-translate-y-1 font-bree'>
                    <ScrollLink to="chooseRole" smooth={true} duration={600}>
                        Join
                    </ScrollLink>
                </li>
                <li className='px-3 hover:cursor-pointer hover:-translate-y-1 font-bree'>
                    <ScrollLink to="aboutUs" smooth={true} duration={600}>
                        About
                    </ScrollLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
