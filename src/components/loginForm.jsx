import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

function LoginForm({show, onClose}){
    const history = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Navigate to the Login component
        history('/application');
    };
    return (
        <div className={`login-form fixed top-1/2 left-auto right-44 transform -translate-y-1/2 ${show ? 'transition-transform ease-in-out duration-500' : 'hidden'}`}>
            {/* Form content */}
            <button className='absolute h-10 w-10 z-40 top-5 left-5'onClick={onClose}>
            <FontAwesomeIcon icon={faCircleXmark} size='2xl' color='white' />
            </button>
            <div className="form-container backdrop-blur-2xl bg-white bg-opacity-10 rounded-3xl h-[38em] w-[35rem] border-2 border-customViolet">
                <h1 className='font-bree text-3xl text-center p-5 tracking-wider text-white'>Login To Account</h1>
                <hr className="border-t-4 border-white w-96 ml-auto mr-auto" />
                <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
                    <div className="ml-20 mr-20 mt-14">
                        <label htmlFor="email" className="block text-1xl font-bree text-white">Email or Username</label>
                        <input placeholder="example@email.com" required type="email" id="email" name="email" className="px-3 py-2 mt-1 h-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="mt-8 mr-20 ml-20 mb-10">
                        <label htmlFor="password" className="block text-1xl font-bree font-medium text-white">Password</label>
                        <input type="password" id="password" name="password" className="px-3 py-2 mt-1 h-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <button type='submit' className="ml-auto mr-auto w-fit relative px-8 py-2 rounded-md isolation-auto z-10 border border-customPurple before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-customDarkPink before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black border-gray-200 bg-white shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                    Login
                    </button>
                </form>
                <p className='w-full p-2 mt-1 text-center font-bree text-white text-xl'>OR</p>
                <div className=' flex items-center justify-center gap-3'>
                    <hr className="border-t-3 border-white w-36" /> 
                    <p className='text-white font-bree text-xm'>Login With</p>
                    <hr className="border-t-3 border-white w-36" /> 
                </div>
                <div className='flex flex-row items-center justify-center gap-28 mt-1'>
                    <div className='hover:-translate-y-1 transition duration-200 hover:cursor-pointer'>
                        <img src="/src/assets/google.png" height='40px' width='40px'></img>
                    </div>
                    <div className='hover:-translate-y-1 transition duration-200 hover:cursor-pointer'>
                        <img src="/src/assets/github.png" height='45px' width='45px'></img>
                    </div>
                </div>
                <div className="text-center mt-4 text-sm text-gray-400 font-bree">
                    Don&#39;t have an account? <button onClick={show} className="text-blue-600 hover:text-blue-500 focus:outline-none">Switch to sign up</button>
                </div>
            </div>
        </div>
    )
}

LoginForm.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.bool.isRequired,
};

export default LoginForm