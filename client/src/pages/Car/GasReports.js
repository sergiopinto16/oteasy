import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
import './GasReports.css'

export default function GasReports({ _id, car_plate, car_km, quantity, price,createdAt }) {

  return (

    <div className="gas_report">

      <div className="content">
        <h1>{car_plate}</h1>

        <div className="input">
          <label>ID: </label>
          <p>{_id}</p>
        </div>
        <div className="input">
          <label>Time: </label>
          <p>{createdAt}</p>
        </div>


        <div className="input">
          <label>Car kilometers:</label>
          <p>{car_km}</p>
        </div>

        <div className="input">
          <label>Gas liters:</label>
          <p>{quantity}</p>
        </div>

        <div className="input">
          <label>Gas price:</label>
          <p>{price}</p>
        </div>


      </div>

    </div>
  );
}