import {UserContext} from "../UserContext";
import './style/SPMRadioAnswer.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';





export default function SPMRadioAnswer({name,color,callbackValueRadio}) {
    
  return (

    <div id="radio_checkbox">

      <RadioGroup  horizontal cssClass='radio_buttons' onChange={ (value) => callbackValueRadio(name,value) } >
        <RadioButton value="1" rootColor={'gray'} pointColor={color}>
          Nunca
        </RadioButton>
        <RadioButton value="2" rootColor={'gray'} pointColor={color}>
        Ocasionalmente
        </RadioButton>
        <RadioButton value="3" rootColor={'gray'} pointColor={color}>
        Frequentemente
        </RadioButton>
        <RadioButton value="4" rootColor={'gray'} pointColor={color}>
          Sempre
        </RadioButton>
        {/* </ReversedRadioButton> */}
      </RadioGroup>


</div>

  );
}
