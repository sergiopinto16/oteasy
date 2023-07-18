// https://blog.bitsrc.io/email-confirmation-with-react-257e5d9de725
require('dotenv').config()

const { text } = require('body-parser');
const sendSlackNotification = require('../slackNotifications')

const secret = process.env.SECRET;

station = "9408227"
url_cp_cete = "https://www.infraestruturasdeportugal.pt/negocios-e-servicos/partidas-chegadas/9408227/2023-07-17%2000:00/2023-07-17%2023:59/INTERNACIONAL,%20ALFA,%20IC,%20IR,%20REGIONAL,%20URB%7CSUBUR,%20ESPECIAL"
let last_json = null
let current_json = null


// check supppress train
// app.post('/check_suppress_train', 
const checkSuppressTrain = (req, res) => {

    console.log("Check suppress train")

    date_string = new Date().toISOString().split('T')[0];

    
    url = "https://www.infraestruturasdeportugal.pt/negocios-e-servicos/partidas-chegadas/"+
                station +"/"+date_string+"%2000:00/"+date_string+
                "%2023:59/INTERNACIONAL,%20ALFA,%20IC,%20IR,%20REGIONAL,%20URB%7CSUBUR,%20ESPECIAL"
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(text => {
            current_json = text;
            
            if(last_json==null){
                console.log("Last json is null")        
            }
            else{
                let dif_json = diff(last_json,current_json)
                console.log(JSON.stringify(dif_json))
                
                for(var attributename in dif_json['response'][0]['NodesComboioTabelsPartidasChegadas']){
                    console.log(attributename+": "+ JSON.stringify(dif_json['response'][0]['NodesComboioTabelsPartidasChegadas'][attributename]));
                    if (dif_json['response'][0]['NodesComboioTabelsPartidasChegadas'][attributename]['Observacoes']!=null){
                            if(dif_json['response'][0]['NodesComboioTabelsPartidasChegadas'][attributename]['Observacoes'].length >0){
                        console.log("Comboio suprimido!")
                        console.log(current_json['response'][0]['NodesComboioTabelsPartidasChegadas'][attributename])
                        data = {
                            "DataHoraPartidaChegada_ToOrderBy":current_json['response'][0]['NodesComboioTabelsPartidasChegadas'][attributename]['DataHoraPartidaChegada_ToOrderBy'],
                            "NomeEstacaoOrigem":current_json['response'][0]['NodesComboioTabelsPartidasChegadas'][attributename]['NomeEstacaoOrigem'],
                            "NomeEstacaoDestino":current_json['response'][0]['NodesComboioTabelsPartidasChegadas'][attributename]['NomeEstacaoDestino'],
                            "ComboioPassou":current_json['response'][0]['NodesComboioTabelsPartidasChegadas'][attributename]['ComboioPassou'],
                            "Observacoes":current_json['response'][0]['NodesComboioTabelsPartidasChegadas'][attributename]['Observacoes'],
                        }
                        console.log(data)
                        sendSlackNotification(JSON.stringify(data))
                    }
                }
                }
                
            }
            
            last_json = current_json;
        
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