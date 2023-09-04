import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import Editor from "../../Editor";


import config from './../../config/config.json';

const api_host = config.api.host
//' + api_host + ':' + api_port + '

export default function CreateSession() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [client, setClient] = useState('')
    const {client_id} = useParams()

    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        //add utente
        //add doctor
        ev.preventDefault();
        const response = await fetch(api_host + '/api/sessionReport/add', {
            method: 'POST',
            body: JSON.stringify({title, summary, content, files, client_id}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        } else {

            alert('error adding to db - ' + response);
        }
    }

    if (redirect) {
        //TODO - Redirect to client page
        return <Navigate to={''}/>
    }
    return (
        <form onSubmit={createNewPost}>
            <input type="title"
                   placeholder={'Title'}
                   value={title}
                   onChange={ev => setTitle(ev.target.value)}/>
            <input type="summary"
                   placeholder={'Summary'}
                   value={summary}
                   onChange={ev => setSummary(ev.target.value)}/>
            <input type="file"
                   onChange={ev => setFiles(ev.target.files)}/>
            <Editor value={content} onChange={setContent}/>
            <button style={{marginTop: '5px'}}>Create session report</button>
        </form>
    );
}