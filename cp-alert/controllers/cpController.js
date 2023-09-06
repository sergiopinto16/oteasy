// https://blog.bitsrc.io/email-confirmation-with-react-257e5d9de725
require('dotenv').config()

const { text } = require('body-parser');
const sendSlackNotification = require('../slackNotifications')

const secret = process.env.SECRET;

station = "9408227"
url_cp_cete = "https://www.infraestruturasdeportugal.pt/negocios-e-servicos/partidas-chegadas/9408227/2023-07-17%2000:00/2023-07-17%2023:59/INTERNACIONAL,%20ALFA,%20IC,%20IR,%20REGIONAL,%20URB%7CSUBUR,%20ESPECIAL"
let last_json = null
let current_json = null
let today_day = null
let today_trains = null
let today_trains_last_update = null

// check supppress train
// app.post('/check_suppress_train', 
const checkSuppressTrain = (req, res) => {

    console.log("Check suppress train")

    date_string = new Date().toISOString().split('T')[0];
    
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    
    const utc = localTime + localOffset;
    const offset = 1; // UTC of portugal is +01.00
    const portugal = utc + (3600000 * offset);
    
    
    const portugalTimeNow = new Date(portugal).toISOString().split('T')[0];
    date_string = portugalTimeNow
    console.log("Portugal Time = " + portugalTimeNow)
    
    if(date_string !== today_day){
        console.log("Update data")
        today_trains = {}
        today_day = date_string
    }
    
    url = "https://www.infraestruturasdeportugal.pt/negocios-e-servicos/partidas-chegadas/"+
                station +"/"+date_string+"%2000:00/"+date_string+
                "%2023:59/INTERNACIONAL,%20ALFA,%20IC,%20IR,%20REGIONAL,%20URB%7CSUBUR,%20ESPECIAL"
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(text => {
            current_json = text;
            
            // help to test
            // current_json = json_2
            // if (today_trains_last_update==null){
            //     console.log("current_json = json_1")
            //     current_json = json_1
            // }

            //filter data to add in today_trains by date
            for(var attributename in current_json['response'][0]['NodesComboioTabelsPartidasChegadas']){
                json_aux = current_json['response'][0]['NodesComboioTabelsPartidasChegadas'][attributename]
                // add data to today_trains
                today_trains[json_aux["DataHoraPartidaChegada_ToOrderBy"]]=json_aux
            }

            let station;
            if (today_trains_last_update == null) {
                console.log("Last json is null")
            } else {
                // let dif_json = diff(today_trains_last_update,today_trains)
                for (var attributename in today_trains) {
                    console.log("attributename = " + attributename)
                    if (today_trains[attributename]['Observacoes'] != null) {
                        if (today_trains[attributename]['Observacoes'].length > 0) {
                            console.log(today_trains[attributename]['Observacoes'] + " | " + today_trains_last_update[attributename]['Observacoes'])
                            if (today_trains[attributename]['Observacoes'] !== today_trains_last_update[attributename]['Observacoes']) {
                                console.log("Comboio suprimido!")
                                console.log(today_trains[attributename])
                                data = {}
                                data = {
                                    "DataHoraPartidaChegada_ToOrderBy": today_trains[attributename]['DataHoraPartidaChegada_ToOrderBy'],
                                    "NomeEstacaoOrigem": today_trains[attributename]['NomeEstacaoOrigem'],
                                    "NomeEstacaoDestino": today_trains[attributename]['NomeEstacaoDestino'],
                                    "ComboioPassou": today_trains[attributename]['ComboioPassou'],
                                    "Observacoes": today_trains[attributename]['Observacoes'],
                                }
                                station = "CETE";
                                if (today_trains[attributename]['NomeEstacaoOrigem'] == "PORTO-SÃO BENTO") {
                                    station = "PORTO-SÃO BENTO"
                                }
                                console.log(data)
                                sendSlackNotification(JSON.stringify(data), "CP-bot", station)

                                //if suprimido wirte in another channel
                                if (today_trains[attributename]['Observacoes'] === "SUPRIMIDO") {
                                    console.log("REALMENTE Comboio suprimido!")
                                    data = {
                                        "DataHoraPartidaChegada_ToOrderBy": today_trains[attributename]['DataHoraPartidaChegada_ToOrderBy'],
                                        "NomeEstacaoOrigem": today_trains[attributename]['NomeEstacaoOrigem'],
                                        "NomeEstacaoDestino": today_trains[attributename]['NomeEstacaoDestino'],
                                        "ComboioPassou": today_trains[attributename]['ComboioPassou'],
                                        "Observacoes": today_trains[attributename]['Observacoes'],
                                    }
                                    console.log(data)
                                    sendSlackNotification(JSON.stringify(data), "CP-SUPRIMIDO", station, true)
                                }
                            }
                        }
                    }


                }

            }
        
            today_trains_last_update =JSON.parse(JSON.stringify(today_trains));
        
        });

    // const { email } = req.body;
    // console.log("email = ", email)
    // dict_json = { 'email': email }
    // console.log("Send slack = ", dict_json)
    // sendSlackNotification(JSON.stringify(dict_json), "DB-userLogout")
    // res.cookie('token', '').json('Logout done!');
}



function diff(obj1, obj2) {
    const result = {};
    if (Object.is(obj1, obj2)) {
        return undefined;
    }
    if (!obj2 || typeof obj2 !== 'object') {
        return obj2;
    }
    Object.keys(obj1 || {}).concat(Object.keys(obj2 || {})).forEach(key => {
        if(obj2[key] !== obj1[key] && !Object.is(obj1[key], obj2[key])) {
            result[key] = obj2[key];
        }
        if(typeof obj2[key] === 'object' && typeof obj1[key] === 'object') {
            const value = diff(obj1[key], obj2[key]);
            if (value !== undefined) {
                result[key] = value;
            }
        }
    });
    return result;
}










module.exports = {
    checkSuppressTrain
}