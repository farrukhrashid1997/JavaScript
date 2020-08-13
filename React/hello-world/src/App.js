import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifeCycle from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import ComponentC from "./components/ComponentC";
import {UserProvider} from "./components/userContext";
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"

function App() {
  return (
    <div className="App">
      {/* <Greet name = "Clark" heroName="Superman">
      <p>This is the real hero.</p>
    </Greet>
    <Greet name = "Jawaher" heroName="NoobWoman">
      <button>Action</button>
    </Greet>
    <Greet name = "Mohib" heroName="Noobman"></Greet>
    <Welcome name= "Bruce"></Welcome>
    <Welcome name= "Patrick"></Welcome>
    <Welcome name= "Beatrice"></Welcome> */}
      {/* <Message></Message> */}
      {/* <Counter/> */}

      {/* <Greet name = "Clark" heroName="Superman">
      <p>This is the real hero.</p>
    </Greet> */}

      {/* <Welcome name= "Patrick"></Welcome> */}
      {/* <FunctionClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <ClassClick/> */}

      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <Stylesheet primary={false}/> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Form/> */}
      {/* <LifeCycle/> */}
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      {/* <ParentComp/> */}
      {/* <FocusInput/> */}
      {/* <FRParentInput/> */}
      {/* <PortalDemo />
      <ErrorBoundary>
        <Hero heroName = "Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName = "Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName = "Joker"></Hero>
      </ErrorBoundary> */}
      {/* <ClickCounter name = "Farrukh"/>
      <HoverCounter/> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn)=> isLoggedIn ? 'Farrukh' : 'Guest'} />
       */}

      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></ClickCounterTwo>
        )}
      ></Counter>
       <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></HoverCounterTwo>
        )}
      ></Counter> */}
      {/* <UserProvider value = "Farrukh">
        <ComponentC />
      </UserProvider> */}
      {/* <PostList/> */}
      <PostForm/>
    </div>
  );
}

export default App;
