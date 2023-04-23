import GasReports from "./GasReports";
import { useEffect, useState } from "react";
import {Link, Route, Routes} from 'react-router-dom';




import config  from './../../config/config.json';

const api_host = config.api.host
const api_port = config.api.port
//' + api_host + ':' + api_port + '


export default function IndexPage() {
  const [gasReports, setGasReports] = useState([]);

  useEffect(() => {
    fetch('http://' + api_host + ':' + api_port + '/api/gas/gasReports').then(response => {
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