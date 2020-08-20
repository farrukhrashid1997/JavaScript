import React from "react";
import UserCard from "./components/userCard";
import store from "./redux/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserCard />
      </div>
    </Provider>
  );
}

export default App;
