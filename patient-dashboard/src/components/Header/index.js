import {  CgProfile } from "react-icons/cg";
import { MdMenu } from "react-icons/md";
import './index.css'

const Header=()=>(
    <>
    <div className="desktop-header-container">
        <ul className='list-container'>
            <li className='dashboard-text-container'>
                <p className="header-heading">Dashboard</p>
            </li>
            <li className='container3'>
                <p className='overview-text'>Overview</p>
            </li>
            <li className='notification-text'>Home</li>
            <li className='notification-container'><p className="notification-text">Notifications <span className="dot">.</span></p></li>
            
        </ul>
        <div className='sidebar-profile-container'>
            <CgProfile className="cg-profile"/>
            <p className="profile-text">Vamsi</p>
        </div>
        
    </div>
    <div className="mobile-nav-container">
        <h1 className="header-heading">Dashboard</h1>
        <MdMenu className="menu"/>
    </div>
    </>
)

export default Header