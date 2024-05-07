import { VStack, Input, RadioGroup, Radio } from "@chakra-ui/react";
import type { UseTodoListFilterReturn } from "./useTodoListFilter";

export type TodoListFilterProps = UseTodoListFilterReturn;

export function TodoListFilter({
  query,
  status,
  handleFilterStatusChange,
  handleQueryChange,
}: TodoListFilterProps) {
  return (
    <VStack>
      <Input placeholder="検索" value={query} onChange={handleQueryChange} />
      <RadioGroup value={status} onChange={handleFilterStatusChange}>
        <Radio value="all">全て</Radio>
        <Radio value="active">未完了</Radio>
        <Radio value="complete">完了</Radio>
      </RadioGroup>
    </VStack>
  );
}
