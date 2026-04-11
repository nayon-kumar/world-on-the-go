const TodosPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  console.log(todos);
  return (
    <div>
      <p>Todos page</p>
    </div>
  );
};

export default TodosPage;
