
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import './style/NavBar.css'
import { Navigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';


import config from './../config/config.json';
// const config = require('config');

const api_host = config.api.host
//' + api_host + ':' + api_port + '


const spm_credentials = 0
const gas_report_credentials = 1

const Navbar = () => {

    const { userInfo, setUserInfo } = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);

    // Dont understand how information change this userInfo
    // useEffect(() => {
    //     let userToken = localStorage.getItem("userInfo")
    //     console.log("useEffect NavBar token = " + userToken)

    //     //TODO cehck if ok in api

    //     const response = fetch(api_host + '/api/user/profile', {
    //         method: 'POST',
    //         body: JSON.stringify({ "token": userToken }),
    //         headers: { 'Content-Type': 'application/json' },
    //         credentials: 'include',
    //     });
    //     console.log(response)
    //     console.log(response.ok)
    //     if (response.ok) {
    //         response.json().then(userInfo => {
    //             setUserInfo(userInfo);
    //         });
    //     }
    //     else {
    //         setUserInfo({})
    //         console.log('useEffect NavBar No profile')
    //     }

    //     // setUserInfo(localStorage.getItem("userInfo"))

    //     // console.log("NavBar UserInfo = " + userInfo)
    //     // console.log("NavBar UserInfo.token = " + userInfo.token)
    // }, []);

    const email = userInfo?.email;
    console.log("NavBar.js | email =" + email)
    const name = userInfo?.name;
    console.log("NavBar.js | name = " + name)
    const credentials_level = userInfo?.credentials_level;
    console.log("NavBar.js | credentials_level =" + credentials_level)

    async function logout(ev) {
        ev.preventDefault();
        console.log("NavBar Logout email = ", email)
        const response = await fetch(api_host + '/api/user/logout', {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify({ 'email': email }),
            headers: { 'Content-Type': 'application/json' },
        }).catch(console.error);
        
        // setUserInfo({});
        // console.log("Remove item from localStorage = " +localStorage.getItem("userInfo"))
        // localStorage.removeItem("userInfo");
        // console.log("Item removed = " + localStorage.getItem("userInfo"))
        window.location.replace("/");
        // setRedirect(true);
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }


    return (
        <nav>
            {
                email && (
                    <>
                        {/* <Link to="/create">Create new post</Link> */}
                        <a onClick={logout}> Logout ({name})</a>
                    </>
                )
            }
            {
                !email && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )
            }
        </nav >
    );
};

export default Navbar;
