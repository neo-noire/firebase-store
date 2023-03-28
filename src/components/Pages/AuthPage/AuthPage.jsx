import React, { useState } from 'react'
import s from './AuthPage.module.css'
import HomeIcon from '@mui/icons-material/Home';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { NavLink as Link, useNavigate } from 'react-router-dom'


 const AuthPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [passVisible, setPassVisible] = useState(false)
    const [error, setError] = useState(false)


    const handleVisibility = () => {
        if (passVisible) {
            return 'text'
        } else {
            return 'password'
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        
    }


    return (
        <div className={s.main}>
            <div className={s.form}>
                <Link to='/'>
                    <HomeIcon className={s.home} />
                </Link>
                <div className={s.left}>
                    <img src='https://res.cloudinary.com/dj8y8vspg/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1678135511/00_story_4fbdb90b75.webp' />
                </div>
                <div className={s.right}>
                    <h1>
                        Register your account
                    </h1>
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className={s.item}>
                            <label htmlFor="email" >Your User Name</label>
                            <input
                                className={userName.length >= 6 ? `${s.valid}` : undefined}
                                type="text"
                                value={userName}
                                onChange={e => setUserName(e.currentTarget.value)}
                                placeholder="User Name" required={true} />
                        </div>
                        <div className={s.item}>
                            <label htmlFor="email" >Your email</label>
                            <input
                                className={email.length >= 6 ? `${s.valid}` : undefined}
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.currentTarget.value)}
                                placeholder="name@company.com" required={true} />
                        </div>
                        <div className={s.item}>
                            <label htmlFor="password" >Password</label>
                            <input
                                className={password.length >= 6 ? `${s.valid}` : undefined}
                                type={handleVisibility()}
                                value={password}
                                onChange={e => setPassword(e.currentTarget.value)}

                                placeholder="Enter your password"
                                required={true} />
                            {
                                passVisible
                                    ? <VisibilityOffIcon onClick={() => setPassVisible(false)} className={s.visibility} />
                                    : <VisibilityIcon onClick={() => setPassVisible(true)} className={s.visibility} />
                            }
                        </div>
                        {
                            error &&
                            <div className={s.error}>
                                <span>{error.data.error.message}</span>
                            </div>
                        }

                        <button
                            className={s.submitBtn}
                            type="submit"
                        >Register</button>
                        <p>
                            Already have an account?
                            <Link to='/login'>Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthPage;
