
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

    useEffect(() => {
        fetch(api_host + '/api/user/profile', {
            credentials: 'include',
        }).then(response => {
            if(response.ok){
                response.json().then(userInfo => {
                    setUserInfo(userInfo);
                });
            }
            else{
                throw new Error('No profile')
            }
        }).catch((error) => {
            console.log(error)
            setUserInfo({ });
        });
    }, []);

    console.log("NavBar.js | userInfo = " + userInfo?.username)
    const email = userInfo?.email;
    const name = userInfo?.name;
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
        });
        setUserInfo({});
        // setRedirect(true);
        window.location.replace("/")

    }

    if (redirect) {
        return <Navigate to={'/'} />
    }


    return (
        <nav>


            {email && credentials_level !== undefined && (
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
                email && credentials_level !== undefined && (
                    <>
                        {credentials_level[gas_report_credentials] === 1 && (
                            <>
                                <Link to="/gas/gasReports">Gas Reports</Link>
                            </>)}
                    </>
                )
            }


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
