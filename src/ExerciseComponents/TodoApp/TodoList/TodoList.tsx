import { Button, Checkbox, HStack, List, ListItem } from "@chakra-ui/react";
import { Todo } from "../Todo.type";
import { todo } from "node:test";

type TodoListProps = {
  todoList: Todo[];
};

export function TodoList({ todoList }: TodoListProps) {
  // TODO: フィルタリングロジックを実装してください https://github.com/Ryochike/react-practice/issues/7
  const filteredTodoList = todoList;

  return (
    <>
    {todoList.length === 0 ? (<p>タスクがありません。</p>) :(
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
    </List>)}</>
  );
}
