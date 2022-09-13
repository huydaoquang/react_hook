const Todo = (props) => {
  //properties
  //parent => child, top => bottom
  // const todo = props.todo;
  const { todos, deleteDataTodo } = props;
  const handleDelete = (id) => {
    deleteDataTodo(id);
  };
  return (
    <div className="todo-container">
      {todos.map((todos) => {
        return (
          <li className="todo-child" key={todos.id}>
            {todos.title}
            &nbsp; &nbsp;<span onClick={() => handleDelete(todos.id)}>x</span>
          </li>
        );
      })}
      <hr />
    </div>
  );
};
export default Todo;
