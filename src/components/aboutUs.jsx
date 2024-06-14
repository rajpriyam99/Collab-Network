function AboutUs(){
    return (
        <div id="aboutUs" className="AboutUs h-auto p-10 mt-10 mb-10">
            <div className="h-[40em] flex justify-around gap-20 p-2 items-center">
                <img src="/src/assets/aboutback.png" className="h-[47em] left-5 absolute -z-10"></img>
                <div className="flex-1 h-auto flex items-center rounded-3xl backdrop-blur-3xl bg-transparent bg-white bg-opacity-25">
                    <p className="text-2xl font-medium font-bree text-left p-10 tracking-wide leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                    At Collaboration Network, we believe in the power of teamwork and collaboration to fuel creativity and drive innovation. Our platform is designed to bring together designers, developers, and engineers from around the world, providing a space where ideas flourish and projects thrive.
                    <br />Whether you&#39;re a designer with a vision, a developer with a solution, or an engineer with expertise, Collaboration Network is your gateway to finding the perfect partners for your projects. Join our vibrant community and unlock endless possibilities for collaboration, growth, and success. Welcome to Collaboration Network, where great minds collaborate to create extraordinary things. 
                    </p>
                </div>
                <div className="flex-1 h-[80%] flex items-center justify-center">
                    <h1 className="font-bree text-8xl text-btnC5">ABOUT US</h1>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;