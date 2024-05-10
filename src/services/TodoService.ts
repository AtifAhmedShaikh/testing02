import { ITask } from "../types/task";

const baseUrl = "/api/tasks";

export const getAllTodos = async (): Promise<ITask[]> => {
  try {
    const res = await fetch(`${baseUrl}`, { cache: "no-store" });
    const todos = await res.json();
    return todos;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addTodo = async (todo: ITask): Promise<ITask | null> => {
  try {
    const res = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const newTodo = await res.json();
    return newTodo;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// export const cloneTodo = async (todo: ITask): Promise<ITask> => {
//   const res = await fetch(`${baseUrl}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(todo),
//   });
//   const newTodo = await res.json();
//   return newTodo;
// };
export const editTodo = async (todo: ITask): Promise<ITask | null> => {
  try {
    const res = await fetch(`${baseUrl}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const updatedTodo = await res.json();
    return updatedTodo;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteTodo = async (id: string): Promise<void> => {
  try {
    await fetch(`${baseUrl}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
  } catch (error) {
    console.log(error);
  }
};

export const cloneTodo = async (todo: ITask): Promise<ITask | null> => {
  try {
    const res = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const newcloneTodo = await res.json();
    return newcloneTodo;
  } catch (error) {
    return null;
  }
};
