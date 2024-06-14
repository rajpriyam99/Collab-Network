import '../styles/customStyles.css';

function Section() {
    return (
        <div id="section" className="Section h-auto">
            <div className="text-center">
                <p className="text-5xl mt-24 font-bold font-bree">To All The</p>
            </div>
            <div className="flex justify-evenly ml-7 mt-20">
                <div className="w-full md:w-1/3">
                    <div className="relative">
                        <img src="/src/assets/desig2.jpg" alt="Designers" className="w-[29em] h-[30em] border-customPink border-2 object-cover object-right rounded-[40px] overflow-hidden hover:drop-shadow-2xl transition duration-300 transform hover:-translate-y-1" />
                        <p className="text-center mt-4 font-bree text-2xl">Designers</p>
                    </div>
                </div>
                <div className="w-full mt-20 md:w-1/3">
                    <div className="relative">
                        <img src="/src/assets/dev2.jpg" alt="Developers" className="w-[29em] h-[30em] border-customPink border-2 object-cover object-right rounded-[40px] overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1" />
                        <p className="text-center mt-4 font-bree text-2xl">Developers</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="relative">
                        <img src="/src/assets/engin.jpg" alt="Engineers" className="w-[29em] h-[30em] border-customPink border-2 object-cover object-right rounded-[40px] overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1" />
                        <p className="text-center mt-4 font-bree text-2xl">Engineers</p>
                    </div>
                </div>
            </div>
            {/*Content cards*/}
            <div className="flex flex-col mt-28 pb-20 items-center bg-[url('/src/assets/blobs.png')] bg-no-repeat bg-contain bg-center">
                {/* Card 1 */}
                <div className="w-[70%] mb-8 border-l-4 border-customPink backdrop-blur-3xl">
                    <div className="h-[30em] flex flex-col md:flex-row justify-between gap-20 items-center p-4 rounded-lg shadow-lg">
                        <div className="md:order-2 mb-4 md:mb-0 md:ml-4 md:mr-8 flex-1">
                            <img src="/src/assets/desig3.jpg" alt="Image 1" className="w-[25em] h-[28em] object-cover rounded-3xl" />
                        </div>
                        <div className="text-center md:text-left md:order-1 flex-1 h-96 flex items-center justify-center p-10">
                            <p className="text-3xl font-bold text-center font-bree">Connect with skilled developers and engineers to bring your designs to life, turning concepts into captivating digital experiences.</p>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="w-[70%] mb-8 border-r-4 border-customPink backdrop-blur-3xl">
                    <div className="h-[30em] flex flex-col md:flex-row justify-between gap-20 items-center p-4 rounded-lg shadow-lg">
                        <div className="md:mr-4 mb-4 md:mb-0 md:order-1 flex-1">
                            <img src="/src/assets/dev3.jpg" alt="Image 2" className="w-[25em] h-[28em] object-cover rounded-3xl" />
                        </div>
                        <div className="text-center md:text-right md:order-2 flex-1 h-96 flex items-center justify-center p-10">
                            <p className="text-3xl font-bold text-center font-bree">Find talented designers and engineers to collaborate with, ensuring your projects not only function flawlessly but also look stunning.</p>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="w-[70%] mb-8 border-l-4 border-customPink backdrop-blur-3xl">
                    <div className="h-[30em] flex flex-col md:flex-row justify-between gap-20 items-center p-4 rounded-lg shadow-lg">
                        <div className="md:order-2 mb-4 md:mb-0 md:ml-4 md:mr-8 flex-1">
                            <img src="/src/assets/engin2.jpg" alt="Image 3" className="w-[25em] h-[28em] object-cover rounded-3xl" />
                        </div>
                        <div className="text-center md:text-left md:order-1 flex-1 h-96 flex items-center justify-center p-10">
                            <p className="text-3xl font-bold text-center font-bree">Join forces with innovative designers and developers to build groundbreaking solutions, transforming ideas into reality with precision and expertise.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Section;