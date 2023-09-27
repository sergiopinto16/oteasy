import './RegisterPage.css'

import config from './../../config/config.json';

import react, {useContext, useEffect, useState, useRef, useMemo} from "react";
import {UserContext} from "../../UserContext";
import {Link, useParams} from "react-router-dom";
import TableContainer from "../../utils/TableContainer";
import {Container} from "reactstrap";

import {SelectColumnFilter} from "../../utils/filter";

import './ClientInfo.css'
import moment from 'moment'

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

        console.log("Session")
        //sessions
        fetch(api_host + '/api/sessionReport/sessionReports', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({"client_id": client_id}),
            headers: {'Content-Type': 'application/json'},
        }).then(response => {
            response.json().then(session => {
                console.log(session);
                setSession(session)
            });
        });

        //spms
        fetch(api_host + '/api/spm/spms', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({"client_id": client_id}),
            headers: {'Content-Type': 'application/json'},
        }).then(response => {
            response.json().then(spms => {
                console.log(spms);
                setSpms(spms)
            });
        });
    }, []);


    const table_spm = useMemo(
        () => [
            // {
            //     Header: "ID",
            //     accessor: "_id",
            //     Cell: props => <a href={"spm/" + props.value}>{props.value}</a>
            // },
            {
                Header: "evaluation_date",
                accessor: "evaluation_date",
                Cell: (props) => {
                    const formattedDate = moment(props.value).format('DD/MM/yyyy HH:mm');
                    return <a href={"spm/" + props.row.original._id}>{formattedDate}</a>
                },
                // Cell: props => {moment(props.row.original._id).format('DD/MM/yyyy HH:mm')}
            },
            // {
            //     Header: "Utente",
            //     accessor: "utente"
            // },
            // {
            //     Header: "Author",
            //     accessor: "author"
            // },
            {
                Header: "spm_type",
                accessor: "spm_type",
                Cell: (props) => {
                    switch (props.value){
                        case 0:
                            // return <span style={{ color: 'orange' }}>{"SPM CASA"}</span>;
                            return <span>{"SPM CASA"}</span>;
                        case 1:
                            return <span>{"SPM ESCOLA"}</span>;
                        case 2:
                            return <span>{"SPM-p CASA"}</span>;
                        case 3:
                            return <span>{"SPM-p ESCOLA"}</span>;
                        default:
                            return <span>{props.value}</span>;
                    }
                },
                filter: 'equals', // by default, filter: 'text', but in our case we don't want to filter options like text, we want to find exact match of selected option.
                Filter: SelectColumnFilter
            },
            {
                Header: "evaluation_reason",
                accessor: "evaluation_reason",
                disableFilters: true
            },

            // {
            //     Header: "Time",
            //     accessor: "createdAt",
            //     disableFilters: true
            //
            // },
        ],
        []
    );

    const table_session = useMemo(
        () => [
            /*{
                Header: "ID",
                accessor: "_id",
                Cell: props => <a href={"post/" + props.value}>{props.value}</a>
            },*/
            /*{
                Header: "Utente",
                accessor: "client"
            },
            {
                Header: "Author",
                accessor: "author"
            },*/
            {
                Header: "Day",
                accessor: "date",
                // Cell: props => <a href={"post/" + props.value}>{props.value}</a>
                Cell: props => <a href={"post/" + props.row.original._id}>{moment(props.value).format('DD/MM/yyyy HH:mm')}</a>
            },
            {
                Header: "Summary",
                accessor: "summary"
            },
            {
                Header: "Content",
                accessor: "content"
            },
            // {
            //     Header: "createAt",
            //     accessor: "createdAt",
            //     Cell: props => {moment(props.value).format('DD/MM/yyyy HH:mm')},// Add moment js or use js Date formatting
            //     disableFilters: true
            //
            // },
        ],
        []
    );

    return (
        <form className="client">
            <div className="client_info">
                <h1>CLIENT INFO</h1>


                <label>Name: </label><p>{client.name}</p>
                <label>Birth Date: </label><p> {client.birth_date}</p>
                <label>cardID: </label><p>{client.card_id}</p>

                <label>Parent Name: </label><p>{client.parent_name}</p>
                <label>Phone: </label><p>{client.contact_number}</p>
                <label>email: </label><p>{client.email}</p>
                <label>Address: </label><p>{client.address}</p>

            </div>

            <div className="client_reports">
                <h1>Reports</h1>


                <Link to={'/session_report/create/' + client_id}>
                    <button className="btn_insert">Insert Session Report</button>
                </Link>

                <Container style={{marginTop: 100}}>
                    <TableContainer columns={table_session} data={session}/>
                </Container>
            </div>

            <div className="client_spms">
                <h1>SPMs</h1>


                <Link to={"/spm/spm-casa/"+ client_id}>
                    <button className="btn_insert">NEW SPM CASA</button>
                </Link>
                <Link to={"/spm/spm-escola/"+ client_id}>
                    <button className="btn_insert">NEW SPM ESCOLA</button>
                </Link>
                <Link to={"/spm/spm-pcasa/"+ client_id}>
                    <button className="btn_insert">NEW SPM-p CASA</button>
                </Link>
                <Link to={"/spm/spm-pescola/"+ client_id}>
                    <button className="btn_insert">NEW SPM-p ESCOLA</button>
                </Link>

                <Container style={{marginTop: 100}}>
                    <TableContainer columns={table_spm} data={spms}/>
                </Container>
            </div>
        </form>
    );
}