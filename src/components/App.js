import React, { useState, useEffect} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(questions=> setQuestions(questions))
  }, [])

  function handleAddQuestion(newQuestion) {
    setQuestions([newQuestion,...questions])
  }

  function handleDelete(id){
    fetch('http://localhost:4000/questions/${id}', {
      method: 'DELETE'
    })
    const updatedQuestions = questions.filter(question => question.id !== id)
    setQuestions(updatedQuestions)
  }
  

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleAddQuestion={handleAddQuestion}/> : <QuestionList setQuestions={setQuestions} questions={questions} handleDelete={handleDelete}/>}
    </main>
  );
}

export default App;
