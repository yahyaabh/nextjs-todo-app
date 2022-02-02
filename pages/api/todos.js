const todos = [];

export default function hadnler(req, res) {
  //simple get req and we send res with the todos
  if (req.method === "GET") {
    res.status(200).json(todos);
  }
  //if req is post we get the todo and we create a newTodo object and we push this object into our
  //todos array
  else if (req.method === "POST") {
    const todo = req.body.todo;
    const finished = req.body.finished;
    const newTodo = {
      id: Date.now(),
      text: todo,
      finished: finished,
    };

    todos.push(newTodo);

    res.status(201).json(newTodo);
  }

  //handling delete method
  //if method is delete we get the todoId from the req
  //we get deletedTodo from find method
  //find method returns the todo that matches our todoId from the req
  //we send deleted todo as res from ere
  //we get index of todo that we wanna delete
  //findIndex method returns the index of the todo that passes the test
  //test is basically if todo.id is = to todoId
  //todos.splice
  //first parameter is for index that we wanna start cutting from
  //and sec one is how many element we wanna remove
  //in our case we start from our index and we remove one item and that is the current todo
  else if (req.method === "DELETE") {
    const todoId = req.body.todoId;

    const deletedTodo = todos.find((todo) => todo.id === parseInt(todoId));

    const index = todos.findIndex((todo) => todo.id === parseInt(todoId));

    todos.splice(index, 1);

    res.status(200).json(deletedTodo);
  } else if (req.method === "PUT") {
    const todoId = req.body.todoId;

    const modTodo = todos.find((todo) => todo.id === parseInt(todoId));

    modTodo.finished = !modTodo.finished;

    res.status(201).json(modTodo);
  }
}
