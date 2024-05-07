import { Button, Checkbox, HStack, List, ListItem } from "@chakra-ui/react";
import { Todo } from "../Todo.type";
import { ChangeEvent } from "react";

type TodoListProps = {
  todoList: Todo[];
  todoListFilter: {
    query: string;
    status: string;
    handleFilterStatusChange: (status: string) => void;
    handleQueryChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
};

export function TodoList({ todoList, todoListFilter }: TodoListProps) {
  const filteredTodoList = todoList.filter((todo: Todo) => {
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

  if (todoList.length === 0) {
    return <p>タスクがありません。</p>;
  }

  return (
    <List spacing={2} w="100%">
      {filteredTodoList.map((todo) => {
        return (
          <ListItem key={todo.id}>
            <HStack justify="space-between">
              <Checkbox
                isChecked={todo.completed}
                onChange={() => {
                  alert("実装してください");
                }}
              >
                {todo.title}
              </Checkbox>
              <Button
                size="xs"
                onClick={() => {
                  alert("実装してください");
                }}
              >
                削除
              </Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
}
