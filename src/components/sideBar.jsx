import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGear, faTableCells } from '@fortawesome/free-solid-svg-icons';
function SideBar(){
    return (
        <>
            <div className="sideBar bg-red-500 w-36 h-screen">
                <div className='profilePic border-4 w-auto pt-4 pb-4'>
                    <img src="/src/assets/engin.jpg" height='80px' width='80px' className="rounded-full m-auto"></img>
                </div>
                <div className="sideContainer border-4">
                    <div className="home-btn text-center">
                        <button className='border-2 h-12 w-12 rounded-full'>
                            <FontAwesomeIcon icon={faHouse} size='2xl'/>
                        </button>
                        <h1>Home</h1>
                    </div>
                    <div className="dash-btn text-center">
                        <button className='border-2 h-12 w-12 rounded-full'>
                            <FontAwesomeIcon icon={faTableCells} size='2xl'/>
                        </button>
                        <h1>Dashboard</h1>
                    </div>
                    <div className="settings-btn text-center">
                        <button className='border-2 h-12 w-12 rounded-full'>
                            <FontAwesomeIcon icon={faGear} size='2xl'/>
                        </button>
                        <h1>Settings</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SideBar;