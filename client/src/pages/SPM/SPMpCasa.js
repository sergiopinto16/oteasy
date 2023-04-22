

import { useContext, useEffect, useState, useRef } from "react";
import { Navigate } from "react-router-dom";
// import {UserContext} from "../UserContext";
import SPMRadioAnswer from "../../components/SPMRadioAnswer";
import './SPM.css'
import calc_SPMpcasa, { calc_a, calc_cc, calc_go, calc_me, calc_pmi, calc_ps, calc_pv, calc_t, calc_v, calc_total } from "./calc/calc_SPMpcasa";
import CustomizedTables from './components/table';
import TextClassificacaoNivel from './components/table'
import GraphSPM from './components/graph'


import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { StyledTableCell, StyledTableRow, createData } from './components/table'

import ReactPDF from '@react-pdf/renderer';

import { spmPDF } from './components/pdf';
import TableWithRadioButtons from '../../components/SPMTableQuestionGroup'
import * as htmlToImage from 'html-to-image';
import html2canvas from 'html2canvas'




const questionGroup_PS = 0;
const questionGroup_V = 1;
const questionGroup_A = 2;
const questionGroup_T = 3;
const questionGroup_GO = 4;
const questionGroup_CC = 5;
const questionGroup_ME = 6;
const questionGroup_PMI = 7;
const questionGroup_TOTAL = 8;



let rows = [
    createData('Participação Social', 0, 0),
    createData('Visão', 0, 0),
    createData('Audição', 0, 0),
    createData('Toque', 0, 0),
    // createData('Gosto e Olfato', 0, 0),
    createData('Consciência Corporal', 0, 0),
    createData('Movimento e Equilibrio', 0, 0),
    createData('Planeamento Motor e Ideação', 0, 0),
    createData('TOTAL', 0, 0)
];



export default function SPMpCasa() {



    const [valueArray, setValueArray] = useState([]);

    const [sumQuestions, setsumQuestions] = useState([]);
    const [scoreQuestions, setscoreQuestions] = useState([]);
    const [tsQuestions, settsQuestions] = useState([]);
    const [classificacaoQuestions, setclassificacaoQuestions] = useState([]);

    const [updateTabel, setupdateTable] = useState(0)

    const chartRef = useRef(null);



    // const tsQuestions_data = [{ name: 'Participação Social', tscore: 0 },
    // { name: 'Visão', tscore: 0 },
    // { name: 'Audição', tscore: 0 },
    // { name: 'Toque', tscore: 0 },
    // { name: 'Gosto e Olfato', tscore: 0 },
    // { name: 'Consciência Corporal', tscore: 0 },
    // { name: 'Movimento e Equilibrio', tscore: 0 },
    // { name: 'Planeamento Motor e Ideação', tscore: 0 },
    // { name: 'TOTAL', tscore: 0 },];

    const [tsQuestions_data, settsQuestions_data] = useState([]);




    const getRadioValue = (name, value) => {
        console.log("SPMCASA - " + name + ' | ' + value)
        // setValueArray([
        //     { id: name, value: value }
        //   ])

        // setValueArray([
        //     ...valueArray,
        //     {
        //       id: name,
        //       value: value
        //     }
        //   ]); 

        valueArray[name] = value
        // console.log(valueArray)
        calculate_spm()
    }

    //TODO create all funtions to calculate all block
    //TODO functions will return sum value
    const calculate_question_group = (indexStart, indexEnd, invertido) => {

        let sumaux = 0
        let valueaux = 0
        for (let i_var = indexStart; i_var <= indexEnd; i_var++) {
            // console.log('question_'+i_var)
            // console.log(valueArray['question_'+i_var])
            if (valueArray['question_' + i_var] != null) {
                valueaux = parseInt(valueArray['question_' + i_var])
                if (invertido && valueaux > 0) {
                    valueaux = 5 - valueaux
                }
                sumaux += valueaux
            }
        }
        return sumaux

    }

    const calculate_spm = () => {

        sumQuestions[questionGroup_PS] = calculate_question_group(1, 8, true)
        sumQuestions[questionGroup_V] = calculate_question_group(9, 19, false)
        sumQuestions[questionGroup_A] = calculate_question_group(20, 28, false)
        sumQuestions[questionGroup_T] = calculate_question_group(29, 42, false)
        sumQuestions[questionGroup_GO] = calculate_question_group(43, 46, false)
        sumQuestions[questionGroup_CC] = calculate_question_group(47, 55, false)
        sumQuestions[questionGroup_ME] = calculate_question_group(56, 66, false)
        sumQuestions[questionGroup_PMI] = calculate_question_group(67, 75, false)

        console.log('PS = ' + sumQuestions[questionGroup_PS])
        console.log('V  = ' + sumQuestions[questionGroup_V])
        console.log('A  = ' + sumQuestions[questionGroup_A])
        console.log('T  = ' + sumQuestions[questionGroup_T])
        console.log('GO = ' + sumQuestions[questionGroup_GO])
        console.log('CC = ' + sumQuestions[questionGroup_CC])
        console.log('ME = ' + sumQuestions[questionGroup_ME])
        console.log('PMI= ' + sumQuestions[questionGroup_PMI])
        console.log('TOTAL= ' + sumQuestions[questionGroup_TOTAL])


        console.log("Calculate score and ts")
        // console.log(calc_ps(sumQuestions[questionGroup_PS])['score_group'])
        scoreQuestions[questionGroup_PS] = calc_ps(sumQuestions[questionGroup_PS])['score_group']
        scoreQuestions[questionGroup_V] = calc_v(sumQuestions[questionGroup_V])['score_group']
        scoreQuestions[questionGroup_A] = calc_a(sumQuestions[questionGroup_A])['score_group']
        scoreQuestions[questionGroup_T] = calc_t(sumQuestions[questionGroup_T])['score_group']
        scoreQuestions[questionGroup_GO] = calc_go(sumQuestions[questionGroup_GO])['score_group']
        scoreQuestions[questionGroup_CC] = calc_cc(sumQuestions[questionGroup_CC])['score_group']
        scoreQuestions[questionGroup_ME] = calc_me(sumQuestions[questionGroup_ME])['score_group']
        scoreQuestions[questionGroup_PMI] = calc_pmi(sumQuestions[questionGroup_PMI])['score_group']



        tsQuestions[questionGroup_PS] = calc_ps(sumQuestions[questionGroup_PS])['tscore_group']
        tsQuestions[questionGroup_V] = calc_v(sumQuestions[questionGroup_V])['tscore_group']
        tsQuestions[questionGroup_A] = calc_a(sumQuestions[questionGroup_A])['tscore_group']
        tsQuestions[questionGroup_T] = calc_t(sumQuestions[questionGroup_T])['tscore_group']
        tsQuestions[questionGroup_GO] = calc_go(sumQuestions[questionGroup_GO])['tscore_group']
        tsQuestions[questionGroup_CC] = calc_cc(sumQuestions[questionGroup_CC])['tscore_group']
        tsQuestions[questionGroup_ME] = calc_me(sumQuestions[questionGroup_ME])['tscore_group']
        tsQuestions[questionGroup_PMI] = calc_pmi(sumQuestions[questionGroup_PMI])['tscore_group']



        classificacaoQuestions[questionGroup_PS] = calc_ps(sumQuestions[questionGroup_PS])['classificacao_group_int']
        classificacaoQuestions[questionGroup_V] = calc_v(sumQuestions[questionGroup_V])['classificacao_group_int']
        classificacaoQuestions[questionGroup_A] = calc_a(sumQuestions[questionGroup_A])['classificacao_group_int']
        classificacaoQuestions[questionGroup_T] = calc_t(sumQuestions[questionGroup_T])['classificacao_group_int']
        classificacaoQuestions[questionGroup_GO] = calc_go(sumQuestions[questionGroup_GO])['classificacao_group_int']
        classificacaoQuestions[questionGroup_CC] = calc_cc(sumQuestions[questionGroup_CC])['classificacao_group_int']
        classificacaoQuestions[questionGroup_ME] = calc_me(sumQuestions[questionGroup_ME])['classificacao_group_int']
        classificacaoQuestions[questionGroup_PMI] = calc_pmi(sumQuestions[questionGroup_PMI])['classificacao_group_int']


        let tscoreTOTAL = tsQuestions[0] + tsQuestions[1] + tsQuestions[2] + tsQuestions[3] + tsQuestions[4] + tsQuestions[5] + tsQuestions[6] + tsQuestions[7]
        scoreQuestions[questionGroup_TOTAL] = calc_total(tscoreTOTAL)['score_group']
        tsQuestions[questionGroup_TOTAL] = calc_total(tscoreTOTAL)['tscore_group']
        classificacaoQuestions[questionGroup_TOTAL] = calc_total(tscoreTOTAL)['classificacao_group_int']


        let data = [
            { name: 'Participação Social', tscore: tsQuestions[questionGroup_PS] },
            { name: 'Visão', tscore: tsQuestions[questionGroup_V] },
            { name: 'Audição', tscore: tsQuestions[questionGroup_A] },
            { name: 'Toque', tscore: tsQuestions[questionGroup_T] },
            // { name: 'Gosto e Olfato', tscore: tsQuestions[questionGroup_GO] },
            { name: 'Consciência Corporal', tscore: tsQuestions[questionGroup_CC] },
            { name: 'Movimento e Equilibrio', tscore: tsQuestions[questionGroup_ME] },
            { name: 'Planeamento Motor e Ideação', tscore: tsQuestions[questionGroup_PMI] },
            { name: 'TOTAL', tscore: tsQuestions[questionGroup_TOTAL] },];

        settsQuestions_data(data)

        console.log(scoreQuestions, tsQuestions, classificacaoQuestions)
        console.log('tsQuestions_data')
        console.log(tsQuestions_data)


        setupdateTable((prevCount) => prevCount + 1);
    }

    async function calculate_spm_p_casa(ev) {
        ev.preventDefault();

        console.log("No refresh page")



        // const base64Image = chartRef.current.chartInstance.toBase64Image();



        // setupdateTable((prevCount) => prevCount + 1);


        //TODO add spm to database, create a endpoint
        //TODO check the login, or receive them by jwt to add in db
        // const response = await fetch('http://localhost:4000/api/user/login', {
        //   method: 'POST',
        //   body: JSON.stringify({username, password}),
        //   headers: {'Content-Type':'application/json'},
        //   credentials: 'include',
        // });
        // if (response.ok) {
        //   response.json().then(userInfo => {
        //     setUserInfo(userInfo);
        //     setRedirect(true);
        //   });
        // } else {
        //   alert('wrong credentials');
        // }
    }







    const tableElement = useRef()
    const graphElement = useRef()


    async function downloadElement(ev, domElement) {

        ev.preventDefault();

        console.log("donwload element");

        html2canvas(domElement).then(canvas => {
            saveAs(canvas.toDataURL(), 'element.png');

        });
    };


    function saveAs(uri, filename) {

        var link = document.createElement('a');

        if (typeof link.download === 'string') {

            link.href = uri;
            link.download = filename;

            //Firefox requires the link to be in the body
            document.body.appendChild(link);

            //simulate click
            link.click();

            //remove the link when done
            document.body.removeChild(link);

        } else {

            window.open(uri);

        }
    }

    useEffect(() => {
        // CustomizedTables(scoreQuestions, classificacaoQuestions)
        console.log("useEffect runs!")

        rows = [
            createData('Participação Social', scoreQuestions[0], classificacaoQuestions[0]),
            createData('Visão', scoreQuestions[1], classificacaoQuestions[1]),
            createData('Audição', scoreQuestions[2], classificacaoQuestions[2]),
            createData('Toque', scoreQuestions[3], classificacaoQuestions[3]),
            // createData('Gosto e Olfato', scoreQuestions[4], classificacaoQuestions[4]),
            createData('Consciência Corporal', scoreQuestions[5], classificacaoQuestions[5]),
            createData('Movimento e Equilibrio', scoreQuestions[6], classificacaoQuestions[6]),
            createData('Planeamento Motor e Ideação', scoreQuestions[7], classificacaoQuestions[7]),
            createData('TOTAL', scoreQuestions[8], classificacaoQuestions[8]),
        ];

        console.log(rows)
    }, [updateTabel])


    //   if (redirect) {
    //     return <Navigate to={'/'} />
    //   }
    return (
        <form className="spm_p_casa" >



            <div className="button-download-formulario" onClick={() => window.open(require('../../static/SPM/docs/SPM-p_Casa_TUDO_COMPLETO(2-5Anos).pdf'), '_none')}>
                <button> Donwload Formulário</button>
            </div>


            <h1 className="title spm_p_casa" >SPM-p CASA</h1>

            <div id="PS" className="question_group" >

                <h1>PARTICIPAÇÃO SOCIAL A criança ...</h1>

                <div className="question">
                    <p>1. Brinca com os amigos cooperativamente</p>
                    <SPMRadioAnswer name={"question_01"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>2. Partilha o que tem quando lhe é pedido</p>
                    <SPMRadioAnswer name={"question_02"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>3. Junta-se às bincadeiras dos outros sem interromper a sequência da
                        respetiva atividade</p>
                    <SPMRadioAnswer name={"question_03"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>4. Interage adequadamente com os que estão presentes na hora da
                        refeição</p>
                    <SPMRadioAnswer name={"question_04"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>5. Participa adequadamente nos passeios de família tais como jantar
                        fora, ir a um parque ou a um
                        museu</p>
                    <SPMRadioAnswer name={"question_05"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>6. Participa adequadamente nos ajuntamentos familiares tais como ir
                        de férias, casamentos,
                        aniversários</p>
                    <SPMRadioAnswer name={"question_06"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>7. Participa adequadamente nas atividade com amigos tais como festas
                        ou uso de equipamentos no
                        parque</p>
                    <SPMRadioAnswer name={"question_07"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>8. Coopera durante as tarefas familiares tais como ir com os pais ao
                        supermercado do shopping ou
                        ir com os pais buscar o irmão(ã) à escola</p>
                    <SPMRadioAnswer name={"question_08"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>


                <div className="resultado">
                    <p>PARTICIPAÇÃO SOCIAL = {sumQuestions[questionGroup_PS]} |
                        % score = {scoreQuestions[questionGroup_PS]} % |
                        T-score = {tsQuestions[questionGroup_PS]} |

                        <TextClassificacaoNivel classificacao={classificacaoQuestions[questionGroup_PS]} />
                    </p>

                </div>

            </div>


            <div id="VISAO" className="question_group">


                <h1>VISÃO A criança ...</h1>


                <div className="question">
                    <p>9. Fica aborrecida na presença de luzes especialmente luzes intensas
                        (pisca os olhos ou quase que os fecha, chora, etc.)</p>
                    <SPMRadioAnswer name={"question_09"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>10. Tem dificuldade em encontrar um objeto pretendido no meio de
                        tantos outros diferentes</p>
                    <SPMRadioAnswer name={"question_10"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>11. Tem dificuldade em reconhecer se os objetos são semelhantes ou
                        diferentes
                        baseando-se nas cores, formas ou tamanhos</p>
                    <SPMRadioAnswer name={"question_11"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>12. Gosta de observar objetos que rodopiem ou que se movam
                        mais do que a maioria das crianças da sua idade</p>
                    <SPMRadioAnswer name={"question_12"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>13. Caminha de encontro a pessoas e objetos como se não estivessem
                        lá</p>
                    <SPMRadioAnswer name={"question_13"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>14. Gosta de ligar e desligar repetidamente o interruptor da luz</p>
                    <SPMRadioAnswer name={"question_14"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>15. Gosta de olhar pelo canto do olho para objetos que se movam</p>
                    <SPMRadioAnswer name={"question_15"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>16. Tem dificuldade em prestar atenção se estiver num ambiente com
                        muita informação visual</p>
                    <SPMRadioAnswer name={"question_16"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>17. Fica aborrecida num ambiente muito confuso (visualmente), tal
                        como
                        um quarto desarrumado ou uma loja com muitos objetos</p>
                    <SPMRadioAnswer name={"question_17"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>18. Distrai-se facilmente ao olhar para as coisas enquanto caminha</p>
                    <SPMRadioAnswer name={"question_18"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>19. Tem dificuldade em completar tarefas simples quando existem
                        muitos objetos à sua volta</p>
                    <SPMRadioAnswer name={"question_19"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>


                <div className="resultado">
                    <p>VISÃO = {sumQuestions[questionGroup_V]} |
                        % score = {scoreQuestions[questionGroup_V]} % |
                        T-score = {tsQuestions[questionGroup_V]} |

                        <TextClassificacaoNivel classificacao={classificacaoQuestions[questionGroup_V]} />
                    </p>

                </div>

            </div>


            <div id="AUDICAO" className="question_group">

                <h1>AUDIÇÃO A criança ...</h1>

                <div className="question">
                    <p>20. Fica aborrecida com sons típicos de casa tais como o aspirador,
                        secador de cabelo ou
                        autoclismo</p>
                    <SPMRadioAnswer name={"question_20"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>21. Foge, chora, tapa os ouvidos com as mãos ou responde
                        negativamente quando ouve sons muito
                        altos</p>
                    <SPMRadioAnswer name={"question_21"} color={"blue"} callbackValueRadio={getRadioValue} /></div>



                <div className="question">
                    <p>22. Parece não ouvir certos sons</p>
                    <SPMRadioAnswer name={"question_22"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>23. Parece perturbado por ou intensamente interessado em sons que
                        não são usualmente notados
                        pelas outras pessoas</p>
                    <SPMRadioAnswer name={"question_23"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>24. Distrai-se facilmente com barulhos de fundo tais como o cortador
                        de relva no exterior,
                        o ar condicionado, o frigorífico ou lâmpadas fluorescentes</p>
                    <SPMRadioAnswer name={"question_24"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>25. Gosta de produzir certos sons repetidamente como por exemplo
                        puxar o autoclismo várias vezes
                        seguidas</p>
                    <SPMRadioAnswer name={"question_25"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>26. Fica angustiada com sons estridentes ou metálicos tais como
                        apitos, assobios, flautas e
                        trompetes</p>
                    <SPMRadioAnswer name={"question_26"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>27. Fica stressada em ambientes ativos tais como festas ou salas com
                        muita gente</p>
                    <SPMRadioAnswer name={"question_27"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>28. Assusta-se facilmente quando ouve sons muito altos ou
                        inesperados</p>
                    <SPMRadioAnswer name={"question_28"} color={"blue"} callbackValueRadio={getRadioValue} /></div>



                <div className="resultado">
                    <p>AUDIÇÃO = {sumQuestions[questionGroup_A]} |
                        % score = {scoreQuestions[questionGroup_A]} % |
                        T-score = {tsQuestions[questionGroup_A]} |

                        <TextClassificacaoNivel classificacao={classificacaoQuestions[questionGroup_A]} />
                    </p>

                </div>


            </div>



            <div id="TOQUE" className="question_group">


                <h1>TOQUE A criança ...</h1>

                <div className="question">

                    <p>29. Afasta-se de ser tocado suavemente</p>
                    <SPMRadioAnswer name={"question_29"} color={"blue"} callbackValueRadio={getRadioValue} /></div>


                <div className="question">
                    <p>30. Prefere ser ela a tocar em vez de ser tocada por outros</p>
                    <SPMRadioAnswer name={"question_30"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>31. Fica angustiada quando tem que cortar as unhas</p>
                    <SPMRadioAnswer name={"question_31"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>32. Fica aborrecida quando alguém toca na sua cara</p>
                    <SPMRadioAnswer name={"question_32"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>33. Evita tocar ou brincar com digitintas, pastas de modelar, areia,
                        barro, lama, cola ou outros
                        materiais moles</p>
                    <SPMRadioAnswer name={"question_33"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>34. Tem uma grande tolerância à dor</p>
                    <SPMRadioAnswer name={"question_34"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>35. Não gosta de lavar os dentes quando comparada com as demais
                        crianças da sua idade</p>
                    <SPMRadioAnswer name={"question_35"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>36. Aprecia sensações que podem ser dolorosas para as demais
                        crianças tais como atirar-se
                        para o chão ou bater no seu próprio corpo</p>
                    <SPMRadioAnswer name={"question_36"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>37. Não gosta que lavem, penteiem ou arranjem o seu cabelo</p>
                    <SPMRadioAnswer name={"question_37"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>38. Não gosta de cortar o cabelo</p>
                    <SPMRadioAnswer name={"question_38"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>39. Evita comidas com certas texturas</p>
                    <SPMRadioAnswer name={"question_39"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>40. Engasga-se ou vomitas perante comidas com certas texturas</p>
                    <SPMRadioAnswer name={"question_40"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">
                    <p>41. Não gosta de lavar nem de limpar a cara</p>
                    <SPMRadioAnswer name={"question_41"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>42. Baba-se mais do que a maioria das crianças da sua idade</p>
                    <SPMRadioAnswer name={"question_42"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="resultado">
                    <p>TOQUE = {sumQuestions[questionGroup_T]} |
                        % score = {scoreQuestions[questionGroup_T]} % |
                        T-score = {tsQuestions[questionGroup_T]} |

                        <TextClassificacaoNivel classificacao={classificacaoQuestions[questionGroup_T]} />
                    </p>

                </div>


            </div>



            <div id="GOSTO_E_OLFATO" className="question_group">


                <h1>GOSTO E OLFATO A criança ...</h1>



                <div className="question">

                    <p>43. Gosta de levar à boca objetos não comestíveis tais como cola ou
                        tintas</p>
                    <SPMRadioAnswer name={"question_43"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>44. Parece não dar conta ou ignorar odores fortes</p>
                    <SPMRadioAnswer name={"question_44"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>45. Prefere tanto certos sabores de comida ao ponto de recusara
                        refeição oferecida</p>
                    <SPMRadioAnswer name={"question_45"} color={"blue"} callbackValueRadio={getRadioValue} /></div>


                <div className="question">
                    <p>46. Recusa-se a usar a pasta dos dentes</p>
                    <SPMRadioAnswer name={"question_46"} color={"blue"} callbackValueRadio={getRadioValue} /></div>



                <div className="resultado">
                    <p>GOSTO E OLFATO = {sumQuestions[questionGroup_GO]} |
                        % score = {scoreQuestions[questionGroup_GO]} % |
                        T-score = {tsQuestions[questionGroup_GO]} |

                        <TextClassificacaoNivel classificacao={classificacaoQuestions[questionGroup_GO]} />
                    </p>

                </div>


            </div>


            <div id="CONSCIENCIA_CORPORAL" className="question_group">



                <h1>CONSCIÊNCIA CORPORAL A criança ...</h1>



                <div className="question">

                    <p>47. Agarra nos objetos (lápis ou colher da sopa) com tanta força que
                        se torna difícil usar o
                        objeto</p>
                    <SPMRadioAnswer name={"question_47"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>48. Tem o impulso de procurar atividades tais como puxar, empurrar,
                        arrastar, levantar e saltar</p>
                    <SPMRadioAnswer name={"question_48"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>49. Tem dificuldade em calcular os movimentos do corpo precisos para
                        se sentar corretamente
                        numa cadeira ou avançar um obstáculo sem esbarrar no mesmo</p>
                    <SPMRadioAnswer name={"question_49"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>50. Agarra nos objetos (lápis ou colher da sopa) de forma tão suave
                        que se torna difícil usar o
                        objeto</p>
                    <SPMRadioAnswer name={"question_50"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>51. Parece exercer demasiada pressão nas tarefas (ex: bate com os
                        pés no chão ao caminhar,
                        bate com as portas ou exerce demasiada força ao usar o lápis)</p>
                    <SPMRadioAnswer name={"question_51"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>52. Salta muito</p>
                    <SPMRadioAnswer name={"question_52"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>53. Tem tendência a fazer festas aos animais com demasiada força</p>
                    <SPMRadioAnswer name={"question_53"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>54. Empurra ou puxa as outras crianças com frequência</p>
                    <SPMRadioAnswer name={"question_54"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>55. Morde objetos ou até mesmo a roupa com maior frequência do que
                        as crianças da sua idade</p>
                    <SPMRadioAnswer name={"question_55"} color={"blue"} callbackValueRadio={getRadioValue} /></div>


                <div className="resultado">
                    <p>CONSCIÊNCIA CORPORAL = {sumQuestions[questionGroup_CC]} |
                        % score = {scoreQuestions[questionGroup_CC]} % |
                        T-score = {tsQuestions[questionGroup_CC]} |

                        <TextClassificacaoNivel classificacao={classificacaoQuestions[questionGroup_CC]} />
                    </p>

                </div>

            </div>


            <div id="MOVIMENTO_E_EQILIBRIO" className="question_group">


                <h1>MOVIMENTO E EQUILIBRIO A criança ...</h1>


                <div className="question">
                    <p>56. Mostra um medo excessivo do movimento em atividades como subir e
                        descer escadas,
                        andar de baloiço, escorregão ou outras atividades</p>
                    <SPMRadioAnswer name={"question_56"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>57. Evita atividades que exijam equilíbrio,
                        como por exemplo, caminhar nas bermas dos passeios
                        ou pavimentos irregulares ou desnivelados</p>
                    <SPMRadioAnswer name={"question_57"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>58. Deixa-se escorregar pela cadeira quando está sentado (tem
                        dificuldade em manter o tronco
                        ereto)</p>
                    <SPMRadioAnswer name={"question_58"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>59. Tem dificuldade em proteger-se da queda (é tardia em usar as
                        reações de proteção)</p>
                    <SPMRadioAnswer name={"question_59"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>60. Parece não ficar tonta com o movimento enquanto as outras
                        crianças geralmente ficam</p>
                    <SPMRadioAnswer name={"question_60"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>61. Rodopia ou gira sobre si própria mais do que as outras crianças</p>
                    <SPMRadioAnswer name={"question_61"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>62. Fica perturbada quando inclina a cabeça</p>
                    <SPMRadioAnswer name={"question_62"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>63. Revela pobre coordenação e parece ser trapalhona</p>
                    <SPMRadioAnswer name={"question_63"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>64. Encosta-se nas pessoas ou na mobília como suporte de apoio
                        enquanto está sentada
                        ou quando se tenta levantar do chão</p>
                    <SPMRadioAnswer name={"question_64"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>65. Balanceia o corpo enquanto está sentada</p>
                    <SPMRadioAnswer name={"question_65"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">
                    <p>66. Balanceia o corpo enquanto está sentada</p>
                    <SPMRadioAnswer name={"question_66"} color={"blue"} callbackValueRadio={getRadioValue} /></div>


                <div className="resultado">
                    <p>MOVIMENTO E EQUILIBRIO = {sumQuestions[questionGroup_ME]} |
                        % score = {scoreQuestions[questionGroup_ME]} % |
                        T-score = {tsQuestions[questionGroup_ME]} |

                        <TextClassificacaoNivel classificacao={classificacaoQuestions[questionGroup_ME]} />
                    </p>

                </div>


            </div>



            <div id="PLANEAMENTO_MOTOR_E_IDEACAO" className="question_group" >


                <h1>PLANEAMENTO MOTOR E IDEAÇÃO A criança ...</h1>


                <div className="question">
                    <p>67. Tem dificuldade em descobrir como manipular múltiplos objetos</p>
                    <SPMRadioAnswer name={"question_67"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>68. Fica confusa quando tem que arrumar os materiais nos seus
                        devidos lugares</p>
                    <SPMRadioAnswer name={"question_68"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>69. Tem dificuldade em seguir a sequência das atividades da vida
                        diárias tal como vestir-se
                        ou tomar banho (ex.: para se vestir, primeiro pega nas cuecas,
                        depois nas meias, depois nas
                        calças, etc.)</p>
                    <SPMRadioAnswer name={"question_69"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>70. Tem dificuldade em completar tarefas com vários passos</p>
                    <SPMRadioAnswer name={"question_70"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>71. Tem dificuldade em imitar corretamente ações que foram
                        demonstradas previamente
                        (ex: jogos com movimento, canções com gestos)</p>
                    <SPMRadioAnswer name={"question_71"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>72. Tem dificuldade em copiar uma construção feita por um colega ou
                        pelo adulto</p>
                    <SPMRadioAnswer name={"question_72"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>73. Tem dificuldade em introduzir novas ideias durante as suas
                        brincadeiras</p>
                    <SPMRadioAnswer name={"question_73"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>74. Tem tendência a brincar repetidamente com as mesmas atividades e
                        não gosta de mudar
                        para atividades novas quando surge essa oportunidade</p>
                    <SPMRadioAnswer name={"question_74"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>75. Tem dificuldade em entrar e sair do triciclo</p>
                    <SPMRadioAnswer name={"question_75"} color={"blue"} callbackValueRadio={getRadioValue} /></div>

                <div className="resultado">
                    <p>PLANEAMENTO MOTOR E IDEAÇÃO= {sumQuestions[questionGroup_PMI]} |
                        % score = {scoreQuestions[questionGroup_PMI]} % |
                        T-score = {tsQuestions[questionGroup_PMI]} |

                        <TextClassificacaoNivel classificacao={classificacaoQuestions[questionGroup_PMI]} />
                    </p>

                </div>


            </div>



            <div className="spm_table">



                {/* <CustomizedTables scoreQuestions classificacaoQuestions/> */}

                <div ref={tableElement}>
                    {/* <p>Count {updateTabel}</p> */}

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Avaliação</StyledTableCell>
                                    <StyledTableCell align="right">Pontuação</StyledTableCell>
                                    <StyledTableCell align="right">Comentário</StyledTableCell>
                                    {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell> */}
                                </TableRow>
                            </TableHead>



                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.pontuacao}</StyledTableCell>
                                        <StyledTableCell align="right">{row.comentario}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div >



                <button onClick={(ev) => downloadElement(ev, tableElement.current)}>Download Graph</button>

            </div>


            <div className="spm_graph">



                <div ref={graphElement} >
                    <GraphSPM tsQuestions_data={tsQuestions_data} ref={chartRef} />
                </div>

                <button onClick={(ev) => downloadElement(ev, graphElement.current)}>Download Table</button>



            </div>



            <div className="spm_calculate_button">

                <button onClick={spmPDF}>Export to  PDF (NOT WORKING)</button>



            </div>
        </form>
    );
}







