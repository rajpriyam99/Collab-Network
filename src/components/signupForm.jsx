import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

function SignUpForm({ show, onClose  }) {
    return (
        <div className={`sign-up-form fixed top-1/2 left-44 transform -translate-y-1/2 ${show ? 'transition-transform ease-in-out duration-500' : 'hidden'}`}>
            {/* Form content */}
            <button className='absolute h-10 w-10 z-40 top-5 left-5'onClick={onClose}>
            <FontAwesomeIcon icon={faCircleXmark} size='2xl' color='white' />
            </button>
            <div className="form-container backdrop-blur-2xl bg-white bg-opacity-10 rounded-3xl h-[38em] w-[35rem] border-2 border-customViolet">
                <h1 className='font-bree text-3xl text-center p-5 tracking-wider text-white'>Create An Account</h1>
                <hr className="border-t-4 border-white w-96 ml-auto mr-auto" />
                <form>
                    <div className="ml-20 mr-20 mt-14">
                        <label htmlFor="email" className="block text-1xl font-bree text-white">Email</label>
                        <input placeholder="example@email.com" required type="email" id="email" name="email" className="px-3 py-2 mt-1 h-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="mt-8 mr-20 ml-20">
                        <label htmlFor="password" className="block text-1xl font-bree font-medium text-white">Password</label>
                        <input type="password" id="password" name="password" className="px-3 py-2 mt-1 h-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="mt-8 mr-20 ml-20 mb-10">
                        <label htmlFor="role" className="block text-1xl font-bree font-medium text-white">Choose Role</label>
                        <select id="role" name="role" className="px-3 py-2 mt-1 h-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option value="designer">Designer</option>
                            <option value="developer">Developer</option>
                            <option value="engineer">Engineer</option>
                        </select>
                    </div>
                    <button type='submit' className="ml-auto mr-auto flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                        Sign Up
                    </button>
                </form>
                <hr className="border-t-3 border-white w-96 ml-auto mr-auto mt-5" />
                <div className="text-center mt-4 text-sm text-gray-400 font-bree">
                    Already have an account? <button className="text-blue-600 hover:text-blue-500 focus:outline-none">Switch to login</button>
                </div>
            </div>
        </div>
    )
}
SignUpForm.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.bool.isRequired,
};

export default SignUpForm