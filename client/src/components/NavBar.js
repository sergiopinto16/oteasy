
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import './style/NavBar.css'

import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';


import config  from './../config/config.json';
// const config = require('config');

const api_host = config.api.host
const api_port = config.api.port
//' + api_host + ':' + api_port + '

const Navbar = () => {
    const { setUserInfo, userInfo } = useContext(UserContext);
    useEffect(() => {
        fetch('http://' + api_host + ':' + api_port + '/api/user/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    }, []);

    function logout() {
        fetch('http://' + api_host + ':' + api_port + '/api/user/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <nav>
            <Dropdown>
                <Dropdown.Toggle variant="success">SPMs</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/spm/spm_casa">SPM Casa</Dropdown.Item>
                    <Dropdown.Item href="/spm/spm_escola">SPM Escola</Dropdown.Item>
                    <Dropdown.Item href="/spm/spm_p_casa">SPM-p Casa</Dropdown.Item>
                    <Dropdown.Item href="/spm/spm_p_escola">SPM-p Escola</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Link to="/gas/gasReports">Gas Reports</Link>

            {/* 
            SPMs 
            GasReport
            Clients - OT
            */}
            {username && (
                <>
                    <Link to="/create">Create new post</Link>
                    <a onClick={logout}>Logout ({username})</a>
                </>
            )}
            {!username && (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    );
};

export default Navbar;
