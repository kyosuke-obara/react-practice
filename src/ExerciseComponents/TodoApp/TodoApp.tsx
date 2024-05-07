import { Box, VStack } from "@chakra-ui/react";
import { TodoListFilter } from "./TodoListFilter/TodoListFilter";
import { useTodoListFilter } from "./TodoListFilter/useTodoListFilter";
import { TodoList } from "./TodoList/TodoList";
import { defaultTodoList } from "./Todo.fixture";
import { useState } from "react";

export function TodoApp() {
  const todoListFilter = useTodoListFilter();
  const [todoList, setTodoList] = useState(defaultTodoList);

  return (
    <Box as="main" p={4} maxWidth={300} mx="auto">
      <VStack gap={4} align="start">
        <TodoListFilter {...todoListFilter} />
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          todoListFilter={todoListFilter}
        />
      </VStack>
    </Box>
  );
}
