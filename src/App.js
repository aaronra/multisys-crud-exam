import React from "react";
import { AddUser } from "./components/AddUser";
import { UserList } from "./components/UserList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App container">
      <GlobalProvider>
        <AddUser />
        <UserList />
      </GlobalProvider>
    </div>
  );
}

export default App;
