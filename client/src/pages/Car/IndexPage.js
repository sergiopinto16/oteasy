import GasReports from "./GasReports";
import { Link, Route, Routes } from 'react-router-dom';

import { useContext, useEffect, useState, useRef } from "react";
import { UserContext } from "../../UserContext";



import config from './../../config/config.json';

const api_host = config.api.host
//' + api_host + ':' + api_port + '


// TODO - if not logged and not credentials redirect to home page or show message not credentials 

export default function IndexPage() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  if (userInfo?.email === undefined) {
    console.log("Not logged, return to home")
    window.location.replace("/");
  }


  const [gasReports, setGasReports] = useState([]);

  useEffect(() => {
    fetch(api_host + '/api/gas/gasReports').then(response => {
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
        <GasReports key={gasReports._id} {...gasReports} />
      ))}
    </>
  );
}