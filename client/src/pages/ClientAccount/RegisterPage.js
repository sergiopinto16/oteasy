import './RegisterPage.css'

import config from './../../config/config.json';

import {useContext, useEffect, useState, useRef} from "react";
import {UserContext} from "../../UserContext";

const api_host = config.api.host
//' + api_host + ':' + api_port + '

// TODO: how to get user id

export default function RegisterPage() {
    const {userInfo, setUserInfo} = useContext(UserContext);

    if (userInfo?.email === undefined) {
        console.log("Not logged, return to home")
        window.location.replace("/");
    }


    const [cardId, setCardId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birdYear, setBirdYear] = useState('');
    const [birdMonth, setBirdMonth] = useState('');
    const [birdDay, setBirdDay] = useState('');
    const [parentName, setParentName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [doctor, setDoctor] = useState('');


    async function register_client(ev) {
        ev.preventDefault();

        if (cardId.length === 0 ||
            name.length === 0 ||
            email.length === 0 ||
            birdYear.length === 0 ||
            birdMonth.length === 0 ||
            birdDay.length === 0 ||
            parentName.length === 0 ||
            contactNumber.length === 0) {
            console.log("Fields not OK")
            alert("Fields not OK")
            return
        }

        const response = await fetch(api_host + '/api/client/register', {
            method: 'POST',
            body: JSON.stringify({
                card_id: cardId, name, email,
                bird_year: birdYear,
                bird_month: birdMonth,
                bird_day: birdDay,
                parent_name: parentName,
                contact_number: contactNumber
            }),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });


        if (response.status === 200) {
            alert('Registration successful');
        } else {
            alert('BD - registration failed');
        }
    }


    return (
        <form className="register" onSubmit={register_client}>
            <h1>CLIENT Register</h1>

            <div className="div_input">
                <span className="span_input_name" >Name:</span>
                <input className="span_input_value" type="text"
                       placeholder="name"
                       value={name}
                       onChange={ev => setName(ev.target.value)}/>
            </div>
            <div className="div_input">
                <span className="span_input_name" > email: </span>
                <input  className="span_input_value" type="email"
                       placeholder="email"
                       value={email}
                       onChange={ev => setEmail(ev.target.value)}/>
            </div>
            <div className="div_input">
                <span className="span_input_name" >CardID:</span>
                <input className="span_input_value" type="number"
                       placeholder="card ID"
                       value={cardId}
                       onChange={ev => setCardId(ev.target.value)}/>
            </div>


            <div className="div_input">
                {/* TODO: Use type date */}
                <span className="span_input_name" >Bird year:</span>
                <input className="span_input_value" type="number"
                       placeholder="bird year"
                       value={birdYear}
                       onChange={ev => setBirdYear(ev.target.value)}/>
            </div>
            <div className="div_input">
                <span className="span_input_name" >bird month:</span>
                <input className="span_input_value" type="number"
                       placeholder="bird month"
                       value={birdMonth}
                       onChange={ev => setBirdMonth(ev.target.value)}/>
            </div>
            <div className="div_input">
                <span className="span_input_name" >brid day:</span>
                <input className="span_input_value" type="number"
                       placeholder="bird day"
                       value={birdDay}
                       onChange={ev => setBirdDay(ev.target.value)}/>
            </div>
            <div className="div_input">
                <span className="span_input_name" >Parent Name:</span>
                <input className="span_input_value" type="text"
                       placeholder="parent name"
                       value={parentName}
                       onChange={ev => setParentName(ev.target.value)}/>
            </div>
            <div className="div_input">
                <span className="span_input_name" >Contact number:</span>
                <input className="span_input_value" type="number"
                       placeholder="contact number"
                       value={contactNumber}
                       onChange={ev => setContactNumber(ev.target.value)}/>
            </div>
            <div>
                <button>Register</button>
            </div>
        </form>
    );
}