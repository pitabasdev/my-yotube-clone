import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import './loginScreen.scss'
import { useNavigate } from 'react-router-dom';

import { login } from '../../../redux/actions/auth.action'


const LoginScreen = () => {
    const dispatch = useDispatch()
    const handleLogin = () => {
        dispatch(login())
    }
    const accessToken = useSelector(state => state.auth.accessToken)
    const navigate = useNavigate();
    useEffect(() => {
        if (accessToken) {
            navigate('/')
        }
    }, [accessToken, navigate])

    return (

        <div className='login'>
            <div className='login__container'>
                <h2>Youtube Clone</h2>
                <img
                    src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                    alt=''
                />
                <button onClick={handleLogin}>Login With google</button>
                <p>This Project is made using YOUTUBE DATA API</p>

            </div>
        </div>
    )
}

export default LoginScreen
