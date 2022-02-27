import React, { useState } from "react";

function QuestionItem({ question, handleDelete, handleUpdateEvent }) {
  const { id, prompt, answers, correctIndex } = question;
  const [updateIndex, setUpdateIndex] = useState(correctIndex)
  
  function deleteQuestion(){
    handleDelete(question.id)
}

  function changeDropdown(e){
    setUpdateIndex(e.target.value)
    handleUpdateEvent(question.id, e.target.value)
  }



  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={changeDropdown} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
