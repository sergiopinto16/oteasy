


import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
// import {UserContext} from "../UserContext";
import SPMRadioAnswer from "../../components/SPMRadioAnswer";
import './SPM.css'


export default function SPMpCasa() {


    const [valueArray, setValueArray] = useState('[]');

    const getRadioValue = (name, value) => {
        console.log("SPMCASA - " + name + ' | ' + value)
        setValueArray([
            { id: name, value: value }
        ])

    }


    async function calculate_spm_p_casa(ev) {
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
        <form className="spm_p_casa" onSubmit={calculate_spm_p_casa}>


            <h1 className="title spm_p_casa" >SPM-p CASA</h1>

            <div id="PS" className="question_grpup" >

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
                    <p>88. Coopera durante as tarefas familiares tais como ir com os pais ao
                        supermercado do shopping ou
                        ir com os pais buscar o irmão(ã) à escola</p>
                    <SPMRadioAnswer name={"question_08"} color={"blue"} callbackValueRadio={getRadioValue} />
                </div>



            </div>


            <div id="VISAO" className="question_grpup">


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



            </div>


            <div id="AUDICAO" className="question_grpup">

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





            </div>



            <div id="TOQUE" className="question_grpup">


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


            </div>



            <div id="GOSTO_E_OLFATO" className="question_grpup">


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



            </div>


            <div id="CONSCIENCIA_CORPORAL" className="question_grpup">



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



            </div>


            <div id="MOVIMENTO_E_EQILIBRIO" className="question_grpup">


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


            </div>



            <div id="PLANEAMENTO_MOTOR_E_IDEACAO" className="question_grpup" >


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


            </div>


            <div className="spm_calculate_button">
                <button>Calculate SPM</button>
            </div>
        </form>
    );
}







