import logo from "./logo.svg";
import "./App.css";
import useInput from "./Hooks/useInput";
import useTabs from "./Hooks/useTabs";
import useTitle from "./Hooks/useTitle";
import useClick from "./Hooks/useClick";
import useConfirm from "./Hooks/useConfirm";
import {  useEffect, useRef, useState } from "react";

const content = [
  {
    tab: "section1",
    content: "Im the content of the section1",
  },
  {
    tab: "section2",
    content: "Im the content of the section2",
  },
];



function App() {


  //useInput.js
  const [count, setCount] = useState(0);
  const maxLen = (value) => value.length <= 10;
  const includeGol = (value) => !value.includes("@");
  const name = useInput("Mr.", includeGol);

  //useTabs.js
  const { currentItem, changeItem } = useTabs(0, content);
  const [number, setNumber] = useState(0);
  const [anumber, setANumber] = useState(0);

  //useTitle.js
  const titleUpdater = useTitle("Loading....");
  setTimeout(() => titleUpdater("Home"), 3000);

  const sayhello = () => console.log("Hello!");
  useEffect(() => {
    sayhello();
  }, [number]);

  //useClick.js
  const potato = useRef();
  setTimeout(() => {
    if (potato.current) {
      potato.current.focus();
    }
  }, 3000);
  const sayBye = () => console.log("Bye");
  const title = useClick(sayBye);

  //useConfirm.js
  const deleteWorld = () => console.log("Deleting the world...")
  const abort = () => console.log("rejection")
  const confirmDelete = useConfirm("Are you sure?" , deleteWorld , abort)

  return (
    <div className="App">
      
      <h1>useInput</h1>
      <h3>Hello {count}</h3>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>

      <div>
        <input placeholder="Name" {...name} />
      </div>

      <div>
        <h1>UseTabs</h1>
        {content.map((section, i) => {
          return (
            <button key={i} onClick={() => changeItem(i)}>
              {section.tab}
            </button>
          );
        })}
        <div>{currentItem.content}</div>
      </div>
      <div>
        <h1>UseEffect</h1>

        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setANumber(anumber + 1)}>{anumber}</button>
      </div>
      <div>
        <h1>UseClick</h1>
        <input ref={potato} placeholder="useClick"></input>
        <h3 ref={title}>Bye</h3>
      </div>
      <div>
        <h1>UseConfirm</h1>
        <button onClick={confirmDelete}>Delete the world</button>
      </div>
    </div>
  );
}

export default App;
