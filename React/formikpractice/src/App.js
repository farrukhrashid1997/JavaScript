import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ModuleAccessPractice from "./ModuleAccessPractice";
import AccountAccessPractice from "./AccountAccessPractice";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import UserSummary from "./UserSummary";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <UserSummary />
        {/* <AccountAccessPractice /> */}
        {/* <ModuleAccessPractice /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
