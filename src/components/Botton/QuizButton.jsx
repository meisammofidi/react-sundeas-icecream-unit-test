import React, { useState } from "react";

export function replaceCamelcaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

const QuizButton = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        style={disabled ? { backgroundColor: "grey", color:'white' } : null}
        disabled={disabled}
      >
        Send Email
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-checkbox"
        name="quizButton"
        onChange={(e) => {
          setDisabled(e.target.checked);
        }}
      />
      <label htmlFor="disable-checkbox">Disable</label>
    </div>
  );
};

export default QuizButton;
