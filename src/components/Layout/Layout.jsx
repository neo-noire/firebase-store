import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';
import { Body, Wrapper } from '../../styles/styles';


export const Layout = () => {

    const logout = async () => {
        await signOut(auth)
        console.log(auth);
    }
    useEffect(() => {
        console.log(auth);
    }, [auth])
    return (
        <Body>
            <Wrapper>
                <Navbar />
                <Outlet />
                <Footer />
            </Wrapper>
        </Body>
    )
}
