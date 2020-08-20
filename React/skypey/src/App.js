import React from "react";
import "./App.css";
import Main from "./components/Main";
import SidebarContainer from "./containers/SidebarContainer";
import MainContainer from "./containers/MainContainer";
import MessageContainer from "./containers/MessageContainer";
import store from "./store";
import _ from "lodash";
import { Provider } from "react-redux";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SidebarContainer/>
        <MainContainer/>
      </Provider>
    </div>
  );
}

export default App;


// ={_.values(contacts.contacts)} 
//  user={user} activeUserId={activeUserId}