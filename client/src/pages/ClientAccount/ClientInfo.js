import './RegisterPage.css'

import config from './../../config/config.json';

import react, {useContext, useEffect, useState, useRef, useMemo} from "react";
import {UserContext} from "../../UserContext";
import {Link, useParams} from "react-router-dom";
import TableContainer from "../../utils/TableContainer";
import {Container} from "reactstrap";

import {SelectColumnFilter} from "../../utils/filter";

import './ClientInfo.css'

const api_host = config.api.host
//' + api_host + ':' + api_port + '

// TODO: how to get user id

export default function ClientInfo() {
    const {userInfo, setUserInfo} = useContext(UserContext);


    // if (userInfo?.email === undefined) {
    //     console.log("Not logged, return to home")
    //     window.location.replace("/");
    // }

    const [client, setClient] = useState('')
    const [session, setSession] = useState([])
    const [spms, setSpms] = useState([])
    const {client_id} = useParams()

    //TODO : get client info fron api
    //TODO : get reports from api
    //TODO: get spm from api

    //http://localhost:3010/api/client/client/64ae5f6d98a8e0320465d596
    useEffect(() => {
        console.log("CLient id = " + client_id)
        fetch(api_host + '/api/client/client/' + client_id, {credentials: 'include'}).then(response => {
            response.json().then(client => {
                console.log(client);
                setClient(client)
            });
        });

        //sessions
        fetch(api_host + '/api/sessionReport/sessionReports', {credentials: 'include'}).then(response => {
            response.json().then(session => {
                console.log(session);
                setSession(session)
            });
        });

        //spms
        fetch(api_host + '/api/spm/spms', {credentials: 'include'}).then(response => {
            response.json().then(spms => {
                console.log(spms);
                setSpms(spms)
            });
        });
    }, []);


    const table_spm = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "_id",
                Cell: props => <a href={"spm/" + props.value}>{props.value}</a>
            },
            {
                Header: "Utente",
                accessor: "utente"
            },
            {
                Header: "Author",
                accessor: "author"
            },
            {
                Header: "evaluation_date",
                accessor: "evaluation_date"
            },
            {
                Header: "evaluation_reason",
                accessor: "evaluation_reason",
                disableFilters: true
            },
            {
                Header: "spm_type",
                accessor: "spm_type",
                filter: 'equals', // by default, filter: 'text', but in our case we don't want to filter options like text, we want to find exact match of selected option.
                Filter: SelectColumnFilter
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
    );

    const table_session = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "_id",
                Cell: props => <a href={"spm/" + props.value}>{props.value}</a>
            },
            {
                Header: "Utente",
                accessor: "client"
            },
            {
                Header: "Author",
                accessor: "author"
            },
            {
                Header: "Title",
                accessor: "title"
            },
            {
                Header: "Summary",
                accessor: "summary"
            },
            {
                Header: "Time",
                accessor: "createdAt",
                disableFilters: true

            },
        ],
        []
    );


    return (
        <form className="client">
            <div className="client_info">
                <h1>CLIENT INFO</h1>

                <label>Name: </label><p>{client.name}</p>
                <label>email: </label><p>{client.email}</p>
                <label>cardID: </label><p>{client.cardId}</p>
            </div>

            <div className="client_reports">
                <h1>Reports</h1>


                <Link to={'/session_report/create/'+client_id}>
                    <button className="btn_insert">Insert Session Report</button>
                </Link>

                <Container style={{marginTop: 100}}>
                    <TableContainer columns={table_session} data={session}/>
                </Container>
            </div>

            <div className="client_spms">
                <h1>SPMs</h1>


                <Link to="/spm/spm-casa">
                    <button className="btn_insert">NEW SPM CASA</button>
                </Link>
                <Link to="/spm/spm-escola">
                    <button className="btn_insert">NEW SPM ESCOLA</button>
                </Link>
                <Link to="/spm/spm-pcasa">
                    <button className="btn_insert">NEW SPM-p CASA</button>
                </Link>
                <Link to="/spm/spm-pescola">
                    <button className="btn_insert">NEW SPM-p ESCOLA</button>
                </Link>

                <Container style={{marginTop: 100}}>
                    <TableContainer columns={table_spm} data={spms}/>
                </Container>
            </div>
        </form>
    );
}