import React from 'react';
import '../App.css'; // import your CSS file

function InputFields({ selectedConverter, inputs, setInputs }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs[`set${name}`](value);
  };

  const placeholderMap = {
    tempbtn: ["Celsius", "Fahrenheit"],
    sftsmbtn: ["Square Feet", "Square Meters"],
    asfbtn: ["Acres", "Square Feet"],
    ftmbtn: ["Feet", "Meters"],
    cmibtn: ["Centimeters", "Inches"],
    lcfbtn: ["Liters", "Cubic Feet"],
    diagbtn: ["Side A", "Side B", "Diagonal"],
    altbarbtn: ["Old bar count", "Old bar size", "New bar size"]
  };

  const isTripleInput = selectedConverter === 'diagbtn' || selectedConverter === 'altbarbtn';
  const placeholders = placeholderMap[selectedConverter] || [];

  return (
    <div id="input">
      <input
        type="number"
        name="Input1"
        value={inputs.input1}
        onChange={handleChange}
        placeholder={placeholders[0] || "Input One"}
        disabled={!selectedConverter}
      />
      <input
        type="number"
        name="Input2"
        value={inputs.input2}
        onChange={handleChange}
        placeholder={placeholders[1] || "Input Two"}
        disabled={!selectedConverter}
      />
      {isTripleInput && (
        <input
          type="number"
          name="Input3"
          value={inputs.input3}
          onChange={handleChange}
          placeholder={placeholders[2] || "Input Three"}
        />
      )}
    </div>
  );
}

export default InputFields;
