


import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
// import {UserContext} from "../UserContext";
import SPMRadioAnswer from "../../components/SPMRadioAnswer";
import './SPM.css'


export default function SPMEscola() {

    
    const [valueArray, setValueArray] = useState('[]');

    const getRadioValue = (name, value) => {
        console.log("SPMCASA - " + name + ' | ' + value)
        setValueArray([
            { id: name, value: value }
        ])

    }
    async function calculate_spm_escola(ev) {
        ev.preventDefault();
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

    //   if (redirect) {
    //     return <Navigate to={'/'} />
    //   }
    return (
        <form className="spm_escola" onSubmit={calculate_spm_escola}>

            <h1 className="title spm_escola">SPM ESCOLA</h1>

            <div id="PS" className="question_grpup" >

                <h1>PARTICIPAÇÃO SOCIAL Este aluno ...</h1>

                <div className="question">
                    <p>1. Trabalha em equipa; é prestável com os outros.</p>
                    <SPMRadioAnswer name={"question_01"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>2. Resolve conflitos com os colegas sem intervenção do professor.</p>
                    <SPMRadioAnswer name={"question_02"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>3. Lida com a frustração sem explodir ou demonstrar comportamentos
                        agressivos.</p>
                    <SPMRadioAnswer name={"question_03"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>4. Brinca, de bom grado, com os colegas numa variedade de jogos e
                        atividades.</p>
                    <SPMRadioAnswer name={"question_04"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>5. Entra nas brincadeiras com os colegas sem interromper o decorrer
                        da atividade.</p>
                    <SPMRadioAnswer name={"question_05"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>6. Tem amigos e escolhe estar com eles quando é possível.</p>
                    <SPMRadioAnswer name={"question_06"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>7. Usa e percebe o humor quando brinca com os colegas.</p>
                    <SPMRadioAnswer name={"question_07"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>8. Mantém “espaço pessoal” adequado (não fica demasiado perto dos
                        outros durante uma conversa).</p>
                    <SPMRadioAnswer name={"question_08"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>9. Mantém contacto visual adequado durante uma conversa.</p>
                    <SPMRadioAnswer name={"question_09"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>10. Muda os temas de conversa de acordo com os interesses dos
                        colegas; não fica fixo a um só tema.</p>
                    <SPMRadioAnswer name={"question_10"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>


            </div>


            <div id="VISAO" className="question_grpup">


                <h1>VISÃO Este aluno ...</h1>


                <div className="question">
                    <p>11. Semicerra, tapa os olhos ou queixa-se da iluminação da sala de
                        aula ou da luz solar intensa.</p>
                    <SPMRadioAnswer name={"question_11"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>12. Mostra-se aflito/perturbado ao ver objetos em movimento.</p>
                    <SPMRadioAnswer name={"question_12"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>13. Distrai-se com estímulos visuais próximos (imagens, coisas nas
                        paredes, janelas, outras crianças).</p>
                    <SPMRadioAnswer name={"question_13"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>14. Enquanto são dadas instruções ou informações, o aluno olha à sua
                        volta ou para os colegas, em vez de olhar para a
                        pessoa que está a falar ou para o quadro.</p>
                    <SPMRadioAnswer name={"question_14"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>15. Enquanto são dadas instruções ou informações, o aluno olha à sua
                        volta ou para os colegas, em vez de olhar para a
                        pessoa que está a falar ou para o quadro.</p>
                    <SPMRadioAnswer name={"question_15"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>16. Olha fixamente para pessoas ou objetos.</p>
                    <SPMRadioAnswer name={"question_16"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>17. Mostra-se aflito/perturbado quando as luzes são diminuídas para
                        filmes e apresentações.</p>
                    <SPMRadioAnswer name={"question_17"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>



            </div>


            <div id="AUDICAO" className="question_grpup">

                <h1>AUDIÇÃO Este aluno ...</h1>



                <div className="question">
                    <p>18. Mostra-se aflito/perturbado com sons altos (bater da porta,
                        aparelhos elétricos, campainha da escola, alarme de
                        incêndio).</p>
                    <SPMRadioAnswer name={"question_18"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>19. Mostra-se aflito/perturbado com sons de canções ou de
                        instrumentos musicais.</p>
                    <SPMRadioAnswer name={"question_19"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>20. Não responde a vozes ou sons novos.</p>
                    <SPMRadioAnswer name={"question_20"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>21. Não responde a vozes ou sons novos</p>
                    <SPMRadioAnswer name={"question_21"} color={"orange"} callbackValueRadio={getRadioValue} /></div>



                <div className="question">
                    <p>22. Faz barulhos, murmura, canta, ou grita durante momentos
                        silenciosos da aula.</p>
                    <SPMRadioAnswer name={"question_22"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>23. Fala muito alto ou faz excessivo barulho durante as transições
                        (quando muda de atividade ou de espaço).</p>
                    <SPMRadioAnswer name={"question_23"} color={"orange"} callbackValueRadio={getRadioValue} />
                </div>

                <div className="question">
                    <p>24. Fala muito alto ou faz excessivo barulho durante as transições
                        (quando muda de atividade ou de espaço).</p>
                    <SPMRadioAnswer name={"question_24"} color={"orange"} callbackValueRadio={getRadioValue} /></div>





            </div>



            <div id="TOQUE" className="question_grpup">


                <h1>TOQUE Este aluno ...</h1>

                <div className="question">

                    <p>25. Mostra-se aflito/perturbado quando as mãos ou a cara estão sujas
                        (com cola, digitintas, comida, sujidade, etc).</p>
                    <SPMRadioAnswer name={"question_25"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>26. Não tolera sujidade nas mãos ou roupa, mesmo que por pouco
                        tempo.</p>
                    <SPMRadioAnswer name={"question_26"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>27. Mostra-se aflito/perturbado quando toca em certas texturas
                        (materiais da sala de aula, utensílios, equipamentos
                        desportivos, etc).</p>
                    <SPMRadioAnswer name={"question_27"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>28. Fica aflito/perturbado quando é tocado acidentalmente pelos
                        colegas (pode ter uma resposta agressiva ou afastarse).</p>
                    <SPMRadioAnswer name={"question_28"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>29. Não responde ao toque dos outros.</p>
                    <SPMRadioAnswer name={"question_29"} color={"orange"} callbackValueRadio={getRadioValue} /></div>


                <div className="question">
                    <p>30. Procura temperaturas quentes ou frias tocando em janelas, outras
                        superfícies.</p>
                    <SPMRadioAnswer name={"question_30"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>31. Procura temperaturas quentes ou frias tocando em janelas, outras
                        superfícies.</p>
                    <SPMRadioAnswer name={"question_31"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>32. Não limpa a saliva ou a comida da cara.</p>
                    <SPMRadioAnswer name={"question_32"} color={"orange"} callbackValueRadio={getRadioValue} /></div>




            </div>



            <div id="GOSTO_E_OLFATO" className="question_grpup">


                <h1>GOSTO E OLFATO Este aluno ...</h1>


                <div className="question">

                    <p>33. Mostra-se aflito/perturbado com sabores ou cheiros de diferentes
                        comidas.</p>
                    <SPMRadioAnswer name={"question_33"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>34. Não se apercebe de cheiros fortes ou invulgares (cola, tinta,
                        marcadores, etc).</p>
                    <SPMRadioAnswer name={"question_34"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>35. Não consegue distinguir odores; não prefere bons cheiros a maus
                        cheiros.</p>
                    <SPMRadioAnswer name={"question_35"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>36. Tenta provar ou lamber objetos ou pessoas.</p>
                    <SPMRadioAnswer name={"question_36"} color={"orange"} callbackValueRadio={getRadioValue} /></div>




            </div>


            <div id="CONSCIENCIA_CORPORAL" className="question_grpup">



                <h1>CONSCIÊNCIA CORPORAL Este aluno ...</h1>

                <div className="question">

                    <p>37. Entorna os conteúdos quando abre recipientes.</p>
                    <SPMRadioAnswer name={"question_37"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>38. Mastiga ou leva à boca roupa, lápis, lápis de cera, ou materiais
                        escolares.</p>
                    <SPMRadioAnswer name={"question_38"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>39. Move a cadeira bruscamente (empurra a cadeira para debaixo da
                        mesa ou puxa a cadeira com muita força).</p>
                    <SPMRadioAnswer name={"question_39"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>40. Corre, saltita, ou pula em vez de andar.</p>
                    <SPMRadioAnswer name={"question_40"} color={"orange"} callbackValueRadio={getRadioValue} /></div>


                <div className="question">
                    <p>41. Anda com “pés pesados” ou bate com os pés no chão quando anda.</p>
                    <SPMRadioAnswer name={"question_41"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>42. Salta ou anda com “pés pesados” quando sobe ou desce escadas.</p>
                    <SPMRadioAnswer name={"question_42"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>43. Bate as portas ou abre-as com demasiada força.</p>
                    <SPMRadioAnswer name={"question_43"} color={"orange"} callbackValueRadio={getRadioValue} /></div>




            </div>


            <div id="MOVIMENTO_E_EQILIBRIO" className="question_grpup">


                <h1>MOVIMENTO E EQUILIBRIO Este aluno ...</h1>


                <div className="question">

                    <p>44. Passa as mãos ao longo da parede quando anda.</p>
                    <SPMRadioAnswer name={"question_44"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>45. Enrola as pernas à volta das pernas da cadeira.</p>
                    <SPMRadioAnswer name={"question_45"} color={"orange"} callbackValueRadio={getRadioValue} /></div>



                <div className="question">
                    <p>46. Baloiça na cadeira quando sentado à secretária ou mesa.</p>
                    <SPMRadioAnswer name={"question_46"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>47. Fica irrequieto quando está sentado à secretária ou mesa.</p>
                    <SPMRadioAnswer name={"question_47"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>48. Cai da cadeira quando está sentado à secretária ou mesa.</p>
                    <SPMRadioAnswer name={"question_48"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>49. Encosta-se nas paredes, móveis, ou em outras pessoas para se
                        apoiar quando está de pé.</p>
                    <SPMRadioAnswer name={"question_49"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>50. Quando está sentado no chão, não consegue manter-se sem apoio.</p>
                    <SPMRadioAnswer name={"question_50"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>51. Escorrega, deita-se na secretária, ou segura a cabeça com as
                        mãos quando sentado à secretária.</p>
                    <SPMRadioAnswer name={"question_51"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>52.Tem pouca coordenação; parece desajeitado.</p>
                    <SPMRadioAnswer name={"question_52"} color={"orange"} callbackValueRadio={getRadioValue} /></div>



            </div>



            <div id="PLANEAMENTO_MOTOR_E_IDEACAO" className="question_grpup" >


                <h1>PLANEAMENTO MOTOR E IDEAÇÃO Este aluno ...</h1>

                <div className="question">

                    <p>53. Não desempenha as tarefas diárias de forma consistente; a
                        qualidade do trabalho varia consideravelmente.</p>
                    <SPMRadioAnswer name={"question_53"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>54. É incapaz de resolver problemas eficazmente.</p>
                    <SPMRadioAnswer name={"question_54"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>55. É incapaz de resolver problemas eficazmente.</p>
                    <SPMRadioAnswer name={"question_55"} color={"orange"} callbackValueRadio={getRadioValue} /></div>


                <div className="question">
                    <p>56. Não desempenha as tarefas numa sequência adequada.</p>
                    <SPMRadioAnswer name={"question_56"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>57. Não desempenha as tarefas numa sequência adequada.</p>
                    <SPMRadioAnswer name={"question_57"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>58. Tem dificuldade em imitar corretamente demonstrações (jogos de
                        movimento, canções com movimentos).</p>
                    <SPMRadioAnswer name={"question_58"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>59. Tem dificuldade em completar tarefas segundo um modelo
                        apresentado.</p>
                    <SPMRadioAnswer name={"question_59"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>60. Demonstra pouca imaginação e criatividade no brincar e nos
                        tempos livres (tal como ser incapaz de criar jogos
                        novos).</p>
                    <SPMRadioAnswer name={"question_60"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>61. Brinca repetitivamente durante os tempos livres; não desenvolve
                        nem altera a atividade quando lhe é dada a
                        oportunidade.</p>
                    <SPMRadioAnswer name={"question_61"} color={"orange"} callbackValueRadio={getRadioValue} /></div>

                <div className="question">

                    <p>62. Mostra pouca organização dos materiais dentro, em cima e na área
                        à volta da secretária.</p>
                    <SPMRadioAnswer name={"question_62"} color={"orange"} callbackValueRadio={getRadioValue} /></div>



            </div>


            <div className="spm_calculate_button">
                <button>Calculate SPM</button>
            </div>
        </form>
    );
}







