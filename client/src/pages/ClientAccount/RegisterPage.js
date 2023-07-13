import { useState } from "react";
import './RegisterPage.css'

import config from './../../config/config.json';

const api_host = config.api.host
//' + api_host + ':' + api_port + '

// TODO: how to get user id

export default function RegisterPage() {


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
            headers: { 'Content-Type': 'application/json' },
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

            <input type="number"
                placeholder="card ID"
                value={cardId}
                onChange={ev => setCardId(ev.target.value)} />

            <input type="text"
                placeholder="name"
                value={name}
                onChange={ev => setName(ev.target.value)} />
            <input type="email"
                placeholder="email"
                value={email}
                onChange={ev => setEmail(ev.target.value)} />

            {/* TODO: Use type date */}
            <input type="number"
                placeholder="bird year"
                value={birdYear}
                onChange={ev => setBirdYear(ev.target.value)} />
            <input type="number"
                placeholder="bird month"
                value={birdMonth}
                onChange={ev => setBirdMonth(ev.target.value)} />
            <input type="number"
                placeholder="bird day"
                value={birdDay}
                onChange={ev => setBirdDay(ev.target.value)} />

            <input type="text"
                placeholder="parent name"
                value={parentName}
                onChange={ev => setParentName(ev.target.value)} />
            <input type="number"
                placeholder="contact number"
                value={contactNumber}
                onChange={ev => setContactNumber(ev.target.value)} />

            <button>Register</button>
        </form>
    );
}