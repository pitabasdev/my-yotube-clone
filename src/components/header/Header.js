import React from 'react'
import './_header.scss'
import {  useSelector } from 'react-redux'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
const Header = ({ handleToggleSidebar }) => {

    


    const user = useSelector(state => state.auth?.user)
    return (
        <div className='header '>
            <FaBars className='header__menu'
                size={26}
                onClick={() => handleToggleSidebar()}
            >

            </FaBars>
            <img
                src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                alt=''
                className='header__logo'
            />
            <h2 >Youtube</h2>
            <form>

                <input type='text'
                    placeholder='Search'></input>
                <button type='submit'>
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className='header__icons'>
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src={user?.photoURL} alt='avatar' />
                
            </div>
        </div>
    )
}

export default Header
