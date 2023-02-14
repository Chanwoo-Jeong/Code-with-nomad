import logo from "./logo.svg";
import "./App.css";
import useInput from "./Hooks/useInput";
import useTabs from "./Hooks/useTabs";
import useTitle from "./Hooks/useTitle";
import useClick from "./Hooks/useClick";
import useConfirm from "./Hooks/useConfirm";
import usePreventLeave from "./Hooks/usePreventLeave";
import useBeforeLeave from "./Hooks/useBeforeLeave";
import useFadeIn from "./Hooks/useFadeIn";
import useNetwork from "./Hooks/useNetwork";
import { useEffect, useRef, useState } from "react";

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
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("rejection");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

  //usePreventLeave.js
  const { enablePrevent, disablePrevent } = usePreventLeave();

  //useBeforeLeave.js
  const begForlife = () => console.log("Plz Don't Leave");
  useBeforeLeave(begForlife);

  //useFadeIn.js
  const fadeInH1 = useFadeIn(2);
  const fadeInP = useFadeIn(5);

  //useNetwork.js
  const handleNetworkChange = (online) => {
    console.log(online ? "we are online" : "we are offline");
  };
  const onLine = useNetwork(handleNetworkChange);

  return (
    <div className="App">
      <div>
        <h1>useInput</h1>
        <h3>Hello {count}</h3>
        <button onClick={() => setCount(count + 1)}>increase</button>
        <button onClick={() => setCount(count - 1)}>decrease</button>
      </div>
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
      <div>
        <h1>usePreventLeave</h1>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>Unprotect</button>
      </div>
      <div>
        <h1 {...fadeInH1}>useFadeIn</h1>
        <p {...fadeInP}>lorem ipsum lalabula collecting....</p>
      </div>
      <div>
        <h1>{onLine ? "Online" : "Offline"}</h1>
      </div>
    </div>
  );
}

export default App;
