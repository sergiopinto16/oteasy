import ClientsReports from "./ClientReports";
import {Link, Route, Routes} from 'react-router-dom';


import TableContainer from "../../utils/TableContainer";
import {SelectColumnFilter} from '../../utils/filter';

import {useContext, useEffect, useState, useRef, useMemo} from "react";
import {UserContext} from "../../UserContext";


import config from './../../config/config.json';
import {Container} from "reactstrap";

const api_host = config.api.host
//' + api_host + ':' + api_port + '


// TODO - if not logged and not credentials redirect to home page or show message not credentials 

export default function IndexPage() {

    const {userInfo, setUserInfo} = useContext(UserContext);

    if (userInfo?.email === undefined) {
        console.log("Not logged, return to home")
        window.location.replace("/");
    }

    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch(api_host + '/api/client/clients', {credentials: 'include'}).then(response => {
            response.json().then(clients => {
                console.log(clients)
                setClients(clients);
            });
        });
    }, []);

    const table_columns = useMemo(
        () => [
            /*{
                Header: "ID",
                accessor: "_id",
                Cell: props => <a href={"client/" + props.value}>{props.value}</a>
            },*/
            {
                Header: "Name",
                accessor: "name",

                Cell: props => <a href={"client/" + props.value}>{props.value}</a>
            },
            {
                Header: "Email",
                accessor: "email"
            },
            {
                Header: "Doctor",
                accessor: "doctor",
                filter: 'equals', // by default, filter: 'text', but in our case we don't want to filter options like text, we want to find exact match of selected option.
                Filter: SelectColumnFilter

            },
            {
                Header: "Time",
                accessor: "createdAt",
                disableFilters: true

            },
        ],
        []
    )


    return (
        <>

            <Link to="/client/register">
                <button className="btn_insert">Register New Client</button>
            </Link>


            {/*{clients.length > 0 && clients.map(clients => (*/}
            {/*  <ClientsReports key={clients._id} {...clients} />*/}
            {/*))}*/}


            <Container style={{marginTop: 100}}>
                <TableContainer columns={table_columns} data={clients}/>
            </Container>


        </>
    );
}