import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoList from "./components/TodoList.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <TodoList />
    </Provider>
  </StrictMode>
);
