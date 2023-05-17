
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import './style/NavBar.css'

import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';


import config from './../config/config.json';
// const config = require('config');

const api_host = config.api.host
//' + api_host + ':' + api_port + '


const spm_credentials = 0
const gas_report_credentials = 1

const Navbar = () => {
    const { setUserInfo, userInfo } = useContext(UserContext);
    useEffect(() => {
        fetch(api_host + '/api/user/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    }, []);

    function logout(username) {
        console.log("NavBar Logout username = ", username)
        fetch(api_host + '/api/user/logout', {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify({ 'username':username}),
            headers: { 'Content-Type': 'application/json' },
        });
        setUserInfo(null);
    }

    console.log("NavBar.js | userInfo = " + userInfo?.username)
    const username = userInfo?.username;
    const credentials_level = userInfo?.credentials_level;
    console.log("NavBar.js | credentials_level =" + credentials_level)

    return (
        <nav>


            {username && credentials_level !== undefined && (
                <>
                    {credentials_level[spm_credentials] === 1 && (
                        <>
                            <Dropdown>
                                <Dropdown.Toggle variant="success">SPMs</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item> <Link to="/spm/spm-casa">SPM Casa</Link></Dropdown.Item>
                                    <Dropdown.Item> <Link to="/spm/spm-escola">SPM Escola</Link></Dropdown.Item>
                                    <Dropdown.Item> <Link to="/spm/spm-pcasa">SPM-p Casa</Link></Dropdown.Item>
                                    <Dropdown.Item  ><Link to="/spm/spm-pescola">SPM-p Escola</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </>)}
                </>
            )
            }
            {/* 
            SPMs 
            GasReport
            Clients - OT
            */}
            {
                username && credentials_level !== undefined && (
                    <>
                        {credentials_level[gas_report_credentials] === 1 && (
                            <>
                                <Link to="/gas/gasReports">Gas Reports</Link>
                            </>)}
                    </>
                )
            }


            {
                username && (
                    <>
                        {/* <Link to="/create">Create new post</Link> */}
                        <a onClick={logout(username)}><Link to="/"> Logout ({username}) </Link></a>
                    </>
                )
            }
            {
                !username && (
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
