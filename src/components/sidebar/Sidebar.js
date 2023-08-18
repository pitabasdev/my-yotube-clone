import React from 'react'
import "./_sidebar.scss"
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
} from 'react-icons/md'
import { log_out } from '../../redux/actions/auth.action'

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
    const dispatch = useDispatch()
    const logOutHandler = () => {
       dispatch(log_out())
    }
    return (
        <nav className={sidebar ? 'sidebar open' : 'sidebar'}  onClick={() => handleToggleSidebar(false)}>
            
            <Link to='/' style={{textDecoration:"none"}}>
            <li>
               <MdHome size={23} />
               <span>Home</span>
            </li>
         </Link>
            <li>
                <MdSubscriptions size={23} />
                <span>Subscriptions</span>
            </li>
            <li>
                <MdThumbUp size={23} />
                <span>Liked Videos</span>
            </li>
            <li>
                <MdHistory size={23} />
                <span>History</span>
            </li>
            <li>
                <MdLibraryBooks size={23} />
                <span>Library</span>
            </li>
            <li>
                <MdSentimentDissatisfied size={23} />
                <span>I don't know</span>
            </li>
            <hr />
            <li onClick={logOutHandler}>
                <MdExitToApp size={23} />
                <span>Log Out</span>
            </li>


        </nav>
    )
}

export default Sidebar
