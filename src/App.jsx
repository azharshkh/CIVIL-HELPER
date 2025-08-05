import { useState } from "react";
import './App.css';


import ConverterSelector from './components/ConverterSelector';
import InputFields from './components/InputFields';
import AnswerBox from './components/AnswerBox';
import CalculateButton from './components/CalculateButton';

function App() {
  const [selectedConverter, setSelectedConverter] = useState(null);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [answer, setAnswer] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  return (
    <> <div className="container">
      <h1>Civil Helper</h1>

      <ConverterSelector
        selectedConverter={selectedConverter}
        setSelectedConverter={setSelectedConverter}
        setAnswer={setAnswer}
        setInputs={{ setInput1, setInput2, setInput3 }}
        setButtonDisabled={setButtonDisabled}
      />

      <InputFields
        selectedConverter={selectedConverter}
        setInputs={{ setInput1, setInput2, setInput3 }}
        inputs={{ input1, input2, input3 }}

      />

      <CalculateButton
        buttonDisabled={buttonDisabled}
        selectedConverter={selectedConverter}
        inputs={{ input1, input2, input3 }}
        setAnswer={setAnswer}
        setInputs={{ setInput1, setInput2, setInput3 }}
      />
      <AnswerBox answer={answer} />


    </div>
    </>
  );
}

export default App;

