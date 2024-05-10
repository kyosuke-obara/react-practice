import { Button, Checkbox, HStack, List, ListItem } from "@chakra-ui/react";
import { Todo } from "../Todo.type";
import { ChangeEvent, Fragment } from "react";
import { UseTodoListReturn } from "./useTodoList";
import { TodoCreationForm } from "../TodoCreationForm/TodoCreationForm";

type TodoListProps = {
  todoListControl: UseTodoListReturn;
  todoListFilter: {
    query: string;
    status: string;
    handleFilterStatusChange: (status: string) => void;
    handleQueryChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
};

export function TodoList({ todoListControl, todoListFilter }: TodoListProps) {
  const filteredTodoList = todoListControl.todoList.filter((todo: Todo) => {
    switch (todoListFilter.status) {
      case "all":
        return (
          todo &&
          todo.title
            .toLocaleLowerCase()
            .includes(todoListFilter.query.toLocaleLowerCase())
        );
      case "active":
        return (
          !todo.completed &&
          todo.title
            .toLocaleLowerCase()
            .includes(todoListFilter.query.toLocaleLowerCase())
        );
      case "complete":
        return (
          todo.completed &&
          todo.title
            .toLocaleLowerCase()
            .includes(todoListFilter.query.toLocaleLowerCase())
        );
    }
  });

  if (filteredTodoList.length === 0) {
    return <p>タスクがありません。</p>;
  }

  return (
    <Fragment>
      <TodoCreationForm onCreateTodo={todoListControl.createTodo} />
      <List spacing={2} w="100%">
        {filteredTodoList.map((todo) => {
          return (
            <ListItem key={todo.id}>
              <HStack justify="space-between">
                <Checkbox
                  isChecked={todo.completed}
                  onChange={() => {
                    todoListControl.toggleTodo({ id: todo.id });
                  }}
                >
                  {todo.title}
                </Checkbox>
                <Button
                  size="xs"
                  onClick={() => {
                    todoListControl.deleteTodo({ id: todo.id });
                  }}
                >
                  削除
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </Fragment>
  );
}
