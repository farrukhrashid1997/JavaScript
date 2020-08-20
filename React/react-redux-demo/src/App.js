import React from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HoneyContainer from "./components/honeyContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer></HooksCakeContainer>
        <ItemContainer cake />
        <ItemContainer />
        <IceCreamContainer></IceCreamContainer>
        <HoneyContainer></HoneyContainer>
        <NewCakeContainer></NewCakeContainer>
        <CakeContainer /> */}
        <UserContainer/>
      </div>
    </Provider>
  );
}
export default App;
