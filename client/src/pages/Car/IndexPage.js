import GasReports from "./GasReports";
import { useEffect, useState } from "react";
import {Link, Route, Routes} from 'react-router-dom';



export default function IndexPage() {
  const [gasReports, setGasReports] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/gas/gasReports').then(response => {
      response.json().then(gasReports => {
        setGasReports(gasReports);
      });
    });
  }, []);
  return (
    <>

      <Link to="/gas/add">
        <button className="btn_insert" >Insert Gas Report</button>
      </Link>



      {gasReports.length > 0 && gasReports.map(gasReports => (
        <GasReports {...gasReports} />
      ))}
    </>
  );
}