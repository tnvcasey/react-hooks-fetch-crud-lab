import React, { useState, useEffect} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, handleDelete, handleUpdateEvent}) {
 


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
        <QuestionItem key={question.id} question={question} handleDelete={handleDelete} handleUpdateEvent={handleUpdateEvent} />
      ))}
      </ul>
    </section>
  );
}

export default QuestionList;
