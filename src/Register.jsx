import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SignUpForm from './components/signupForm';
import LoginForm from './components/loginForm';

function Register(){
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
  
    const handleSignUpClose = () => {
        setShowSignUpForm(false);
    };
    const handleLoginClose = () => {
        setShowLoginForm(false);
    };

    return (
        <div id="register" className="h-screen w-full bg-registerBack bg-no-repeat bg-cover">
            <div className="relative flex h-full items-center justify-evenly gap-28 bg-circle bg-no-repeat bg-center">
                <div className="register h-auto p-5 flex items-center justify-center gap-5 transition duration-300 hover:-translate-y-1">
                    <button onClick={() => setShowSignUpForm(!showSignUpForm)} className="h-20 w-14 rounded-full">
                    <FontAwesomeIcon icon={faCircleArrowLeft} size="4x" style={{color: "#d90368",}} />
                    </button>
                    <h1 className="text-5xl font-bold text-white font-bree ">Sign Up</h1>
                </div>
                <div className="login h-auto p-5 flex items-center justify-center gap-5 transition duration-300 hover:-translate-y-1">
                    <h1 className="text-5xl font-bold text-white font-bree ">Log In</h1>
                    <button onClick={() => setShowLoginForm(!showLoginForm)} className="h-20 w-14 rounded-full ">
                    <FontAwesomeIcon icon={faCircleArrowLeft} flip='horizontal' size="4x" style={{color: "#d90368",}} />
                    </button>
                </div>
            </div>
            <SignUpForm show={showSignUpForm} onClose={handleSignUpClose} />
            <LoginForm show={showLoginForm} onClose={handleLoginClose}/>
        </div>
    )
}
export default Register