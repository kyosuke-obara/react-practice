import { Button, Checkbox, HStack, List, ListItem, filter } from "@chakra-ui/react";
import { Todo } from "../Todo.type";
import { ChangeEvent, useEffect } from "react";

type TodoListProps = {
  todoList: Todo[];
  todoListFilter:{
    query: string;
    status: string;
    handleFilterStatusChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleQueryChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }
};

export function TodoList({ todoList ,todoListFilter}: TodoListProps) {
  const filteredTodoList = todoList.filter((todo:Todo)=>{
    switch (todoListFilter.status) {
      case "all":
        return todo && todo.title.toLowerCase().includes(todoListFilter.query.toLowerCase())
      case "incomplete":
        return !todo.completed && todo.title.toLowerCase().includes(todoListFilter.query.toLowerCase())
      case "complete":
        return todo.completed && todo.title.toLowerCase().includes(todoListFilter.query.toLowerCase())
    }
  })

  if(todoList.length === 0) {return <p>タスクがありません。</p>}

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
