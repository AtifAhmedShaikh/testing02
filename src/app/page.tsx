import { getAllTodos } from "../services/TodoService";
import AddTask from "../components/AddTask";
import TodoList from "../components/TodoList";

//const dataFilePath = path.join(process.cwd(), 'json/userData.json');

export default async function Home() {
  const tasks = await getAllTodos();

  // console.log(tasks);

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="flex flex-col gap-4 my-5 text-center">
        <h1 className="text-2xl font-bold">Tasks List</h1>
        <AddTask />
      </div>
      <div className="text-center">
        {tasks?.length && <TodoList tasks={tasks} />}
      </div>
    </main>
  );
}
