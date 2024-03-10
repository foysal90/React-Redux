import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../reducks/actions/todosAction";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div>
      <h1>Todos App</h1>
      {isLoading && <h1>Please Wait...</h1>}
      {error && <h3>{error.message}</h3>}

      <section>
        {todos &&
          todos.map((todo,index) => {
            return <article key={index}>
                <h4>{todo.id}</h4>
                <h4>{todo.title}</h4>

            </article>;
          })}
      </section>
    </div>
  );
};

export default Todos;
