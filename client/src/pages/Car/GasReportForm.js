import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import './GasReportForm.css'
import { useState } from "react";
import { Navigate } from "react-router-dom";


export default function CreatePost() {

    const [car_plate, setCarPlate] = useState('CORSA | 82-RB-05');
    const [car_km, setKmCar] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [redirect, setRedirect] = useState(false);


    async function addGasReport(ev) {
        ev.preventDefault();

        if (!window.confirm('Are you sure?')) {
            return;
        }

        const response = await fetch('http://localhost:4000/api/gas/add', {
            method: 'POST',
            body: JSON.stringify({ car_plate, car_km, quantity, price }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        } else {
            
            alert('error adding to db - ' +response);
        }
    }

    if (redirect) {
        return <Navigate to={'/gas/gasReports'} />
    }


    return (
        <form onSubmit={addGasReport} >

            <div className="input">
                <label for="cars">Choose a car:</label>
                <select name="cars" id="cars"
                    value={car_plate}
                    onChange={ev => setCarPlate(ev.target.value)}>
                    <option value="CORSA | 82-RB-05">CORSA | 82-RB-05</option>
                    <option value="SMART | 49-PT-83">SMART | 49-PT-83</option>
                </select>
                <br></br>
            </div>
            {/* <input type="car_plate"
                placeholder={'Car license plate'}
                value={car_plate}
                onChange={ev => setCarPlate(ev.target.value)} /> */}
            <div className="input">
                <label for="km">Insert car kilometers:</label>
                <input type="number" name="km"
                    placeholder={'kilometers'}
                    value={car_km}
                    onChange={ev => setKmCar(ev.target.value)} />
            </div>
            <div className="input">
                <label for="liters">Insert bomb liters added:</label>
                <input type="number"
                    placeholder={'bomb liters'}
                    value={quantity}
                    onChange={ev => setQuantity(ev.target.value)} />
            </div >
            <div className="input">
                <label for="price">Insert gas price:</label>
                <input type="number"
                    placeholder={'gas price'}
                    value={price}
                    onChange={ev => setPrice(ev.target.value)} />
            </div >
            <button style={{ marginTop: '5px' }}>Add Gas Report</button>
        </form >
    );
}