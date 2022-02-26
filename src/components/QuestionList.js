import React, { useState, useEffect} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, handleDelete}) {
 


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
        <QuestionItem key={question.id} question={question} handleDelete={handleDelete} />
      ))}
      </ul>
    </section>
  );
}

export default QuestionList;
