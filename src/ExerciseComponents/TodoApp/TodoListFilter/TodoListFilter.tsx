import { VStack } from "@chakra-ui/react";
import type { UseTodoListFilterReturn } from "./useTodoListFilter";

export type TodoListFilterProps = UseTodoListFilterReturn;

/**
 * @see https://github.com/Ryochike/react-practice/issues/7
 */
export function TodoListFilter({
  query,
  status,
  handleFilterStatusChange,
  handleQueryChange,
}: TodoListFilterProps) {

  return (
    <VStack>
      <form>
        <input onChange={handleQueryChange}/>
        <div>
          <label>
            <input
              type="radio"
              value="all"
              name="status"
              onChange={handleFilterStatusChange}
            />
            全て
          </label>
          <label>
            <input
              type="radio"
              value="incomplete"
              name="status"
              onChange={handleFilterStatusChange}
            />
            未完了
          </label>
          <label>
            <input
              type="radio"
              value="complete"
              name="status"
              onChange={handleFilterStatusChange}
            />
            完了
          </label>
        </div>
      </form>
    </VStack>
  );
}
