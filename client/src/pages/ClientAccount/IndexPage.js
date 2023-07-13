import ClientsReports from "./ClientReports";
import { useEffect, useState } from "react";
import {Link, Route, Routes} from 'react-router-dom';




import config  from './../../config/config.json';

const api_host = config.api.host
//' + api_host + ':' + api_port + '


// TODO - if not logged and not credentials redirect to home page or show message not credentials 

export default function IndexPage() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(api_host + '/api/client/clients').then(response => {
      response.json().then(clients => {
        setClients(clients);
      });
    });
  }, []);
  return (
    <>

      <Link to="/client/register">
        <button className="btn_insert" >Register New Client</button>
      </Link>



      {clients.length > 0 && clients.map(clients => (
        <ClientsReports key={clients._id} {...clients} /> 
      ))}
    </>
  );
}