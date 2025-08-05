import React from 'react';

function AnswerBox({ answer }) {
  return (
    <div id="display">
      <label id="answer">{answer || "Please Select"}</label>
    </div>
  );
}

export default AnswerBox;
