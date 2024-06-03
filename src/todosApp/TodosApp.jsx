import { useState, useEffect } from "react";
import React from "react";
import "./TodosApp.css";
import { FaCheck, FaPlusCircle, FaTrash } from "react-icons/fa";
import AnimatedPage from "../AnimatedPage";

function TodosApp() {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      alert("Input cannot be empty or space characters");
      return;
    }
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
    };

    setTodos([todo, ...todos]);
  };

  const addToProgress = (id) => {
    const item = todos.find((x) => x.id === id);
    setInprogress([item, ...inProgress]);
    const filteredTodos = todos.filter((x) => x.id !== id);
    setTodos(filteredTodos);
  };

  const addToTrash = (id) => {
    const filteredTodos = todos.filter((x) => x.id !== id);
    setTodos(filteredTodos);
  };

  const handleProgress = (id) => {
    const completedTask = inProgress.find((x) => x.id === id);
    setCompleted([completedTask, ...completed]);
    const filteredProgresses = inProgress.filter((x) => x.id !== id);
    setInprogress(filteredProgresses);
  };

  const handleDelete = (id) => {
    const filteredCompletedTodos = completed.filter((x) => x.id !== id);
    setCompleted(filteredCompletedTodos);
  };

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setInput(e.target.value);
  // };

  useEffect(() => {}, [todos, inProgress]);

  return (
    <AnimatedPage>
      <div className="TodosApp">
        <div className="todos-container">
          <h3 className="todos-title">ToDo List App</h3>
          <form className="todos-form">
            <input
              type="text"
              className="todos-form-control"
              onChange={(e) => setInput(e.target.value)}
              name="text"
              placeholder="Enter your to-do item here . . . "
            />

            <button className="todos-btn" onClick={(e) => addTodo(e)}>
              <FaPlusCircle className="plus-icon" />
            </button>
          </form>
          <div className="todos-wrapper">
            <div className="todos-list">
              <h3 className="todo-title">Todos List</h3>
              {/* {console.log(input)} */}
              {todos.map((item, index) => (
                <div className="todo-card" key={item.id}>
                  <p className="todos-card-text">{item.text}</p>
                  <FaCheck
                    className="icon-check-todo"
                    onClick={() => addToProgress(item.id)}
                  />
                  <FaTrash
                    className="icon-trash-todo"
                    onClick={() => addToTrash(item.id)}
                  />
                </div>
              ))}
            </div>
            <div className="todos-list">
              <h3 className="todo-title">InProgress</h3>
              {inProgress.map((item, index) => (
                <div className="todos-progress-card" key={item.id}>
                  <p className="todos-card-text">{item.text}</p>
                  <FaCheck
                    className="icon-progress-todo"
                    onClick={() => handleProgress(item.id)}
                  />
                </div>
              ))}
            </div>
            <div className="todos-list">
              <h3 className="todo-title">Completed</h3>
              {completed.map((item, index) => (
                <div className="todos-completed-card" key={item.id}>
                  <p className="todos-card-text">{item.text}</p>
                  <FaTrash
                    className="icon-trash-todo"
                    onClick={() => handleDelete(item.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default TodosApp;
