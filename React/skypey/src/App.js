import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Sidebar />
        <Main />
      </Provider>

    </div>
  );
}

export default App;
