import React from 'react';

function CalculateButton({
  buttonDisabled,
  selectedConverter,
  inputs,
  setAnswer,
  setInputs
}) {
  const countNonEmpty = (...values) => values.filter(v => v.trim() !== "").length;

  const calculate = () => {
    const { input1, input2, input3 } = inputs;
    let result;

    const show = (msg) => setAnswer(msg);

    const oneFilled = countNonEmpty(input1, input2) === 1;

    switch (selectedConverter) {
      case "tempbtn":
        if (!oneFilled) return show("Enter value in only one field");
        if (input1) result = (parseFloat(input1) * 9) / 5 + 32;
        else result = (parseFloat(input2) - 32) * 5 / 9;
        show(input1
          ? `${input1} °C = ${parseFloat(result.toFixed(10))} °F`
          : `${input2} °F = ${parseFloat(result.toFixed(10))} °C`);
        break;

      case "sftsmbtn":
        if (!oneFilled) return show("Enter value in only one field");
        if (input1) result = parseFloat(input1) * 0.092903;
        else result = parseFloat(input2) / 0.092903;
        show(input1
          ? `${input1} ft² = ${parseFloat(result.toFixed(10))} m²`
          : `${input2} m² = ${parseFloat(result.toFixed(10))} ft²`);
        break;

      case "asfbtn":
        if (!oneFilled) return show("Enter value in only one field");
        if (input1) result = parseFloat(input1) * 43560;
        else result = parseFloat(input2) / 43560;
        show(input1
          ? `${input1} acres = ${parseFloat(result.toFixed(10))} ft²`
          : `${input2} ft² = ${parseFloat(result.toFixed(10))} acres`);
        break;

      case "ftmbtn":
        if (!oneFilled) return show("Enter value in only one field");
        if (input1) result = parseFloat(input1) * 0.3048;
        else result = parseFloat(input2) / 0.3048;
        show(input1
          ? `${input1} ft = ${parseFloat(result.toFixed(10))} m`
          : `${input2} m = ${parseFloat(result.toFixed(10))} ft`);
        break;

      case "cmibtn":
        if (!oneFilled) return show("Enter value in only one field");
        if (input1) result = parseFloat(input1) / 2.54;
        else result = parseFloat(input2) * 2.54;
        show(input1
          ? `${input1} cm = ${parseFloat(result.toFixed(10))} in`
          : `${input2} in = ${parseFloat(result.toFixed(10))} cm`);
        break;

      case "lcfbtn":
        if (!oneFilled) return show("Enter value in only one field");
        if (input1) result = parseFloat(input1) / 28.3168;
        else result = parseFloat(input2) * 28.3168;
        show(input1
          ? `${input1} liters = ${parseFloat(result.toFixed(10))} ft³`
          : `${input2} ft³ = ${parseFloat(result.toFixed(10))} liters`);
        break;

      case "diagbtn": {
        const a = parseFloat(input1);
        const b = parseFloat(input2);
        const h = parseFloat(input3);
        const count = countNonEmpty(input1, input2, input3);
        if (count !== 2) return show("Enter exactly 2 values");
        if (a && b) result = Math.sqrt(a ** 2 + b ** 2);
        else if (a && h) {
          if (h <= a) return show("Diagonal must be larger than side A");
          result = Math.sqrt(h ** 2 - a ** 2);
        } else if (b && h) {
          if (h <= b) return show("Diagonal must be larger than side B");
          result = Math.sqrt(h ** 2 - b ** 2);
        }
        show(`Result = ${parseFloat(result.toFixed(10))}`);
        break;
      }

      case "altbarbtn": {
        if (countNonEmpty(input1, input2, input3) !== 3)
          return show("Enter all 3 values");
        const oldCount = parseFloat(input1);
        const oldDia = parseFloat(input2);
        const newDia = parseFloat(input3);
        result = (oldCount * oldDia ** 2) / (newDia ** 2);
        show(`New bars: ${Math.ceil(result)}`);
        break;
      }

      default:
        show("Select a converter");
    }

    // Reset fields after calculation
    setInputs.setInput1('');
    setInputs.setInput2('');
    setInputs.setInput3('');
  };

  return (
    <div id="cbutton-container">
      <button
        className="cbutton"
        id="calcbtn"
        disabled={buttonDisabled}
        onClick={calculate}
      >
        CALCULATE
      </button>
    </div>
  );
}

export default CalculateButton;
