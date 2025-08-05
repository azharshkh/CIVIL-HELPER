import React from 'react';

const converterMap = {
    tempbtn: "Temperature",
    sftsmbtn: "Sqft - Sqm",
    asfbtn: "Acres - Sqft",
    ftmbtn: "Feet - Meter",
    cmibtn: "CM - Inch",
    lcfbtn: "Liter - Cubic Feet",
    diagbtn: "Right Triangle / Diagonal",
    altbarbtn: "Alternate Bar Finder"
};

function ConverterSelector({
    selectedConverter,
    setSelectedConverter,
    setAnswer,
    setInputs,
    setButtonDisabled
}) {

    const handleChange = (id) => {
        setSelectedConverter(id);
        setAnswer(converterMap[id]);
        setInputs.setInput1('');
        setInputs.setInput2('');
        setInputs.setInput3('');
        setButtonDisabled(false);
    };

    return (
        <div className="converter-selector">
            {Object.entries(converterMap).map(([id, label]) => (
                <label key={id} style={{ marginRight: '1rem' }}>
                    <input
                        type="radio"
                        name="converter"
                        value={id}
                        checked={selectedConverter === id}
                        onChange={() => handleChange(id)}
                    />
                    {label}
                </label>
            ))}
        </div>
    );
}

export default ConverterSelector;