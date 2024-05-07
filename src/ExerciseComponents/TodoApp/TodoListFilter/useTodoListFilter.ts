// ヒント：以下の import を使用すると良いでしょう
// import { useState } from "react";
// import { TodoFilterStatus, isTodoFilterStatus } from "./TodoListFilter.type";

import { ChangeEvent, useState } from "react";

export function useTodoListFilter() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleFilterStatusChange = (status: string) => {
    setStatus(status);
  };

  return {
    query,
    status,
    handleFilterStatusChange,
    handleQueryChange,
  };
}

export type UseTodoListFilterReturn = ReturnType<typeof useTodoListFilter>;
