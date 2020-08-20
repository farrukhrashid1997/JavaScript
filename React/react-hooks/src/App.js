import React, { useReducer } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentD from "./components/ComponentD";
import DataFetchingTwo from "./components/DataFetchingTwo";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingThree from "./components/DataFetchingThree";
import ParentComponent from "./components/ParentComponent"
import Counter from "./components/Counter"
import FocusInput from "./components/FocusInput"
import HookTimer from "./components/HookTimer"
import DocTitleOne from "./components/DocTitleOne"
import DocTitleTwo from "./components/DocTitleTwo"
import UserForm from "./components/UserForm"

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CountContext = React.createContext();
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
      <div className="App">
        {/* Count - {count} */}
        {/* <ClassCounter/> */}
        {/* <HookCounter/> */}
        {/* <HookCounterTwo/> */}
        {/* <HookCounterThree/> */}
        {/* <HookCounterFour/> */}
        {/* <HookCounterOne/> */}
        {/* <HookMouse/> */}
        {/* <IntervalHookCounter/> */}
        {/* <DataFetching/> */}
        {/* <UserContext.Provider value = {'Farrukh'}>
        <ChannelContext.Provider value = {'Nagarro'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
        {/* <CounterOne/> */}
        {/* <CounterTwo/> */}
        {/* <CounterThree/> */}
        {/* <ComponentA />
        <ComponentB />
        <ComponentC /> */}
        {/* <DataFetchingTwo/> */}
        {/* <DataFetchingThree/> */}
        {/* <ParentComponent/> */}
        {/* <Counter/> */}
        {/* <FocusInput/> */}
        {/* <HookTimer/> */}
        {/* <DocTitleOne/> */}
        {/* <DocTitleTwo/> */}
        <UserForm/>
      </div>
    
  );
}

export default App;
