


import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
// import {UserContext} from "../UserContext";
import SPMRadioAnswer from "../../components/SPMRadioAnswer";
import './SPM.css'


export default function SPMpEscola() {

    const [valueArray, setValueArray] = useState('[]');

    const getRadioValue = (name, value) => {
        console.log("SPMCASA - " + name + ' | ' + value)
        setValueArray([
            { id: name, value: value }
          ])

    }

  
  async function calculate_spm_p_escola(ev) {
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
    <form className="spm_p_escola" onSubmit={calculate_spm_p_escola}>

        
<h1 className="title spm_p_escola" >SPM-p ESCOLA</h1>

        <div id="PS" className="question_grpup" >

            <h1>PARTICIPAÇÃO SOCIAL Este aluno ...</h1>

            <div className="question">
                <p>1. Brinca voluntariamente com os pares numa variedade de jogos e
                                                        actividades</p>
                <SPMRadioAnswer name={"question_01"} color={"red"} callbackValueRadio={getRadioValue} />
            </div>
            
            <div className="question">
                <p>2. Espera pela sua vez</p>
                <SPMRadioAnswer name={"question_02"} color={"red"} callbackValueRadio={getRadioValue} />
            </div>
            
            <div className="question">
                <p>3. Participa apropriadamente no tempo do circulo</p> 
                <SPMRadioAnswer name={"question_03"} color={"red"} callbackValueRadio={getRadioValue} />
            </div>
            
            <div className="question">
                <p>4. Transita suavemente para novas actividades</p>
                <SPMRadioAnswer name={"question_04"} color={"red"} callbackValueRadio={getRadioValue} />
            </div>
            
            <div className="question">
                <p>5. Entra para as brincadeiras dos pares sem interromper a
                                                        continuidade da actividade</p>
                <SPMRadioAnswer name={"question_05"} color={"red"} callbackValueRadio={getRadioValue} />
            </div>
            
            <div className="question">
                <p>6. Segue as regras e as rotinas da sala</p>
                <SPMRadioAnswer name={"question_06"} color={"red"} callbackValueRadio={getRadioValue} />
            </div>
            
            <div className="question">
                <p>7. Partilha os brinquedos e os materiais da sala quando lhe é pedido</p>
                <SPMRadioAnswer name={"question_07"} color={"red"} callbackValueRadio={getRadioValue} />
            </div>
            
            <div className="question">
                <p>8. Trabalha cooperativamente com os pares para atingir um objectivo
                                                        comum (ex: durante a limpeza, construções)</p>
                <SPMRadioAnswer name={"question_08"} color={"red"} callbackValueRadio={getRadioValue} />
            </div>
            
            <div className="question">
                <p>9. Interage com os pares durante o jogo simbólico</p>
                <SPMRadioAnswer name={"question_09"} color={"red"} callbackValueRadio={getRadioValue} />
            </div>

            <div className="question">
                <p>10. Resolve os conflitos dos pares sem a intervenção da Educadora</p>
                <SPMRadioAnswer name={"question_10"} color={"red"} callbackValueRadio={getRadioValue} />
            </div>


        </div>


        <div id = "VISAO" className="question_grpup">


        <h1>VISÃO Este aluno ...</h1>
        
            
            <div className="question">
        <p>11. Pisca os olhos, tapa os olhos ou queixa-se da luz da sala ou da
                                                        luz do sol</p>
        <SPMRadioAnswer name={"question_11"} color={"red"} callbackValueRadio={getRadioValue} />
        </div>
            
            <div className="question">
        <p>12. Distrai-se com objetos próximos ou pessoas (imagens, figuras nas
                                                        paredes, janelas, outras crianças, etc)</p>
        <SPMRadioAnswer name={"question_12"} color={"red"} callbackValueRadio={getRadioValue} />
        </div>
            
            <div className="question">
        <p>13. Tem dificuldade em localizar objectos ou pessoas ao olhar ao
                                                        redor da sala ou do espaço de brincadeira</p>
        <SPMRadioAnswer name={"question_13"} color={"red"} callbackValueRadio={getRadioValue} />
        </div>
            
            <div className="question">
        <p>14. Tem dificuldade em encontrar um objeto pretendido entre vários
                                                        espalhados na secretária ou na mesa</p>
        <SPMRadioAnswer name={"question_14"} color={"red"} callbackValueRadio={getRadioValue} />
        </div>
            
            <div className="question">
        <p>15. Olha para a sala ou para os pares enquanto a professora está a
                                                        falar
        </p>
        <SPMRadioAnswer name={"question_15"} color={"red"} callbackValueRadio={getRadioValue} />
        </div>
            
            <div className="question">
        <p>16. Tem dificuldade em identificar objetos pela cor ou pela forma</p>
        <SPMRadioAnswer name={"question_16"} color={"red"} callbackValueRadio={getRadioValue} />
        </div>
            
            <div className="question">
        <p>17. Vai de encontro aos outros que estão a brincar no espaço de jogo</p>
        <SPMRadioAnswer name={"question_17"} color={"red"} callbackValueRadio={getRadioValue} />
        </div>
            
            <div className="question">
        <p>18. Fixa intensamente pessoas ou objetos</p>
        <SPMRadioAnswer name={"question_18"} color={"red"} callbackValueRadio={getRadioValue} />
        </div>
            
            <div className="question">
        <p>19. Fixa intensamente pessoas ou objetos</p>
        <SPMRadioAnswer name={"question_19"} color={"red"} callbackValueRadio={getRadioValue} />
        </div>
            
            <div className="question">
        <p>20. Gosta de observar objectos a mover pelo canto do olho</p>
        <SPMRadioAnswer name={"question_20"} color={"red"} callbackValueRadio={getRadioValue} />
        </div>
       
        </div>


        <div id = "AUDICAO" className="question_grpup">

        <h1>AUDIÇÃO Este aluno ...</h1>

                 
        <div className="question">
        <p>21. Mostra stresse perante altos sons (blocos que caem, gritos ou
                                                        choro de outras crianças,
                                                        corredores barulhentos, autoclismo, etc)</p>
        <SPMRadioAnswer name={"question_21"} color={"red"} callbackValueRadio={getRadioValue} /></div>



            <div className="question">
        <p>22. Mostra stress quando os colegas cantam ou usam instrumentos
                                                        musicais</p>
        <SPMRadioAnswer name={"question_22"} color={"red"} callbackValueRadio={getRadioValue} />
        </div>
            
            <div className="question">
        <p>23. Permanece ignorar novas vozes ou novos sons na sala</p>
        <SPMRadioAnswer name={"question_23"} color={"red"} callbackValueRadio={getRadioValue} />
        </div>
            
            <div className="question">
        <p>24. Permanece ignorar novas vozes ou novos sons na sala</p>
        <SPMRadioAnswer name={"question_24"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">

        <p>25. Faz barulhos, grunhidos, canta ou grita durante momentos de aula
                                                        silenciosos</p>
        <SPMRadioAnswer name={"question_25"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>26. Gosta de provocar certos sons repetidamente (ex: puxar várias
                                                        vezes o autoclismo)</p>
        <SPMRadioAnswer name={"question_26"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>27. Parece não ter consciência de sons que são notados pelos outros</p>
        <SPMRadioAnswer name={"question_27"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>28. Tem dificuldade em estar atento quando a sala de aula é
                                                        barulhenta</p>
        <SPMRadioAnswer name={"question_28"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>29. Parece incapaz de seguir direções verbais</p>
        <SPMRadioAnswer name={"question_29"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
        <div className="question">
        <p>30. Aborrece-se com ou comenta barulhos de fundo constantes que
                                                        outras crianças ignoram (ex: ventoinha, tic-tac do relógio)</p>
        <SPMRadioAnswer name={"question_30"} color={"red"} callbackValueRadio={getRadioValue} /></div>
       

        </div>



        <div id="TOQUE" className="question_grpup">


        <h1>TOQUE Este aluno ...</h1>

        
            
          
            
            <div className="question">
        
        <p>31. Evita ser tocado pelos outros (ex: recusa ser tocado ou
                                                        abraçado, recusa participar na roda de mãos dadas)</p>
        <SPMRadioAnswer name={"question_31"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>32. Mostra stresse quando as mãos ou a cara estão sujas (ex: cola,
                                                        tintas nos dedos, comida, etc)</p>
        <SPMRadioAnswer name={"question_32"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>33. Mostra stresse quando lava as mãos quer em água quente quer em
                                                        água fria</p>
        <SPMRadioAnswer name={"question_33"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>34. Fica stressado com o toque acidental dos colegas (Sacode onde
                                                        foi tocado ou afasta-se dos colegas)</p>
        <SPMRadioAnswer name={"question_34"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>35. Não limpa a saliva ou restos de comida na cara</p>
        <SPMRadioAnswer name={"question_35"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>36. Fica stressado ao tocar em certas texturas (materias da sala,
                                                        utensílios, equipamentos desportivos, etc)</p>
        <SPMRadioAnswer name={"question_36"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>37. Recusa vestir outras roupas por cima (ex: batas, kispos)</p>
        <SPMRadioAnswer name={"question_37"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>38. Tem alta tolerância à dor (ex: mostra uma ligeira impressão ou
                                                        nem repara nos cortes
                                                        e nódoas negras que tem e que as demais crianças sentem dor)</p>
        <SPMRadioAnswer name={"question_38"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>39. Parece não ter consciência da necessidade de usar a sanita (quer
                                                        tenha xixi ou cócó)</p>
        <SPMRadioAnswer name={"question_39"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>40. Evita tocar ou brincar com digitintas, plasticinas, pastas de
                                                        modelar, areias, colas ou outros materiais)</p>
        <SPMRadioAnswer name={"question_40"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            

        </div>



        <div id="GOSTO_E_OLFATO" className="question_grpup">


        <h1>GOSTO E OLFATO Este aluno ...</h1>
        
        
            <div className="question">
        <p>41. Lambe ou morde objectos (equipamentos do espaço onde brinca,
                                                        mobílias, brinquedos, etc)</p>
        <SPMRadioAnswer name={"question_41"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>42. Parece indiferente perante odores fortes ou pouco vulgares (ex:
                                                        cola, tinta, marcadores etc)</p>
        <SPMRadioAnswer name={"question_42"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>43. Fica stressado perante o cheiros da sopa, perfume, laca do
                                                        cabelo ou loções do corpo</p>
        <SPMRadioAnswer name={"question_43"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>44. Fica stressado com o sabor da comida comparativamente às outras
                                                        crianças da mesma idade</p>
        <SPMRadioAnswer name={"question_44"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>45. Recusa experimentar novas comidas</p>
        <SPMRadioAnswer name={"question_45"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
        
        

        </div>


        <div id="CONSCIENCIA_CORPORAL" className="question_grpup">



        <h1>CONSCIÊNCIA CORPORAL Este aluno ...</h1>

        
            
            <div className="question">
        <p>46. Move a cadeira bruscamente (empurra a cadeira para baixo da mesa
                                                        bruscamente ou afasta-a com muita força)</p>
        <SPMRadioAnswer name={"question_46"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>47. Carrega no papel com muita força e parte com facilidade pontas
                                                        dos lápis, crayons e batons de cola</p>
        <SPMRadioAnswer name={"question_47"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>48. Salta constantemente; procura saltar para o chão de locais altos</p>
        <SPMRadioAnswer name={"question_48"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>49. Fecha ou abre as portas com excessiva força</p>
        <SPMRadioAnswer name={"question_49"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>50. Usa demasiada força quando brinca com os objectos
                                                        (ex: dá pancadas nos instrumentos musicais ou esbarra blocos de
                                                        construção uns contra os outros)</p>
        <SPMRadioAnswer name={"question_50"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>51. Vai de encontro aos colegas com frequência (ex: enquanto está na
                                                        fila ou enquanto se move no espaço onde brinca)</p>
        <SPMRadioAnswer name={"question_51"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>52. Mastiga ou morde roupa, lápis, crayons, ou outros materiais da
                                                        sala</p>
        <SPMRadioAnswer name={"question_52"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>53. Transporta comida ou conteúdos de bebida bruscamente (pode
                                                        amassar, partir ou deixar cair o conteúdo que transporta)</p>
        <SPMRadioAnswer name={"question_53"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>54. Derruba as construções que as outras crianças fizeram (ex:
                                                        torres de blocos, esculturas, estradas, carruagens)</p>
        <SPMRadioAnswer name={"question_54"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>55. Quando está a recortar, fecha a tesoura com demasiada força</p>
        <SPMRadioAnswer name={"question_55"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            


        </div>


        <div id= "MOVIMENTO_E_EQILIBRIO" className="question_grpup">


        <h1>MOVIMENTO E EQUILIBRIO Este aluno ...</h1>
        
            
            <div className="question">
        <p>56. Rodopia ou gira à volta excessivamente</p>
        <SPMRadioAnswer name={"question_56"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>57. Encosta-se às paredes, móveis ou pessoas como forma de apoio
                                                        enquanto está de pé</p>
        <SPMRadioAnswer name={"question_57"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>58. Escorrega, deita-se sobre secretária/mesa ou segura a cabeça com
                                                        as mãos
                                                        enquanto está sentado à mesa de trabalho</p>
        <SPMRadioAnswer name={"question_58"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>59. Tem um medo excessivo de actividades movimentadas tais como
                                                        andar de baloiço, cavalos de balancé, escorregas
                                                        ou outros equipamentos de parque infantil</p>
        <SPMRadioAnswer name={"question_59"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>60. Prefere actividades movimentadas</p>
        <SPMRadioAnswer name={"question_60"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>61. Fica desorientada ou mostra receio quando se baixa para apanhar
                                                        objectos do chão</p>
        <SPMRadioAnswer name={"question_61"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>62. Tem dificuldade em recompor-se quando falha numa actividade</p>
        <SPMRadioAnswer name={"question_62"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>63. Fica stressada quando está em equipamentos altos</p>
        <SPMRadioAnswer name={"question_63"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>64. Tem uma coordenação pobre</p>
        <SPMRadioAnswer name={"question_64"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">
        
        <p>65. Tem dificuldade em acompanhar ritmos (ex: bater palmas ou pés
                                                        segundo o ritmo)</p>
        <SPMRadioAnswer name={"question_65"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
       
        </div>



        <div id="PLANEAMENTO_MOTOR_E_IDEACAO" className="question_grpup" >


        <h1>PLANEAMENTO MOTOR E IDEAÇÃO Este aluno ...</h1>
       
        <div className="question">
        <p>66. Fica "preso" numa actividade à exclusão de outras</p>
        <SPMRadioAnswer name={"question_66"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            

            
            <div className="question">
        <p>67. Tem dificuldade em introduzir novas ideias durante as
                                                        actividades</p>
        <SPMRadioAnswer name={"question_67"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">

        <p>68. Brinca de forma repetida durante o jogo livre; não modifica a
                                                        actividade de forma a aumentar o desafio</p>
        <SPMRadioAnswer name={"question_68"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">

        <p>69. Necessita de adereços reais para se envolver no jogo funcional
                                                        (ex: brincar com telefone)</p>
        <SPMRadioAnswer name={"question_69"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">

        <p>70. Tem dificuldade em imitar correctamente o que foi demonstrado
                                                        previamente
                                                        (ex: jogos com movimento, canções com gestos)</p>
        <SPMRadioAnswer name={"question_70"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">

        <p>71. Brinca com os seus próprios jogos, evita imitar os outros</p>
        <SPMRadioAnswer name={"question_71"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">

        <p>72. Tem dificuldade em copiar as construções com blocos do adulto ou
                                                        de outra criança</p>
        <SPMRadioAnswer name={"question_72"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">

        <p>73. Tem dificuldade em usar coordenadamente as duas mãos para
                                                        cortar, desenhar e pintar
                                                        (i.e., uma mão segura no papel enquanto a outra trabalha)</p>
        <SPMRadioAnswer name={"question_73"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">

        <p>74. Não consegue completar tarefas com multiplos passos</p>
        <SPMRadioAnswer name={"question_74"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            
            <div className="question">

        <p>75. Falha no desempenho sequencial das actividades da vida diária
                                                        (ex: guardar os materiais
                                                        na mochila, deitar os restos de comida no lixo, vestir o casaco
                                                        antes de se ir embora)</p>
        <SPMRadioAnswer name={"question_75"} color={"red"} callbackValueRadio={getRadioValue} /></div>
            

        </div>


         <div className="spm_calculate_button">
            <button>Calculate SPM</button>
        </div>
    </form>
  );
}







