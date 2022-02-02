import { useEffect, useState } from "react";
import styles from "./Content.module.css";

function Content() {
  //get input value to todo
  const [todo, setTodo] = useState("");
  //set todos we get them from api
  const [todos, setTodos] = useState([]);
  //for finished btn

  //function that gets todos from api and set it to "todos"
  const getTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  //function handles the click of add btn when clicked it sends post req to api
  //and call the getTodos function so it appears on the screen

  const addHandler = async () => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ todo, finished: false }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    getTodos();
  };

  //useEFFECT
  //when the page is refreshed the req to get todos is not made so we nned to use this hook
  //so on first req to the site the getTodos funct is called and the todos are there
  useEffect(() => {
    getTodos();
  }, []);

  //delete btn handler
  //same as post but delete and we hadnle it in api
  const deleteHandler = async (todoId) => {
    const res = await fetch("/api/todos", {
      method: "DELETE",
      body: JSON.stringify({ todoId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    getTodos();
  };

  //hadnle the finished todo btn

  const finishedHandler = async (todoId) => {
    const res = await fetch("/api/todos", {
      method: "PUT",
      body: JSON.stringify({ todoId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    console.log(data);

    getTodos();
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          className={styles.input}
          placeholder="add todo here"
        />
        <button onClick={addHandler} className={styles.btn}>
          add
        </button>
      </div>

      <div className={styles.todos}>
        {todos.map((todo) => (
          <div key={todo.id} className={styles.todo}>
            <p className={todo.finished ? styles.finished : ""}>{todo.text}</p>
            <div className={styles.buttons}>
              <button
                onClick={() => deleteHandler(todo.id)}
                className={styles.btndel}
              >
                delete
              </button>
              <button
                onClick={() => finishedHandler(todo.id)}
                className={styles.btnmark}
              >
                mark as finished
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
