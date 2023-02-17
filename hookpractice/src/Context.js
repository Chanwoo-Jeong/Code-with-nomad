import React , {createContext , useContext} from "react";
const themeDefault = {border : '10px solid red'}
const themeContext = createContext(themeDefault)

const Context = () => {
    const theme = useContext(themeContext)
  return (
    <>
    <themeContext.Provider value={{border:'10px solid blue'}}>
      <div className="Context" style={theme}>
        <h1>Hello World</h1>
        <Sub1 />
      </div>
      </themeContext.Provider>
    </>
  );
};

const Sub1 = () => {
    const theme = useContext(themeContext)
  return (
    <themeContext.Provider value={{border:'10px solid green'}}>
    <div style={theme}>
      <h1>sub1</h1>
      <Sub2 />
    </div>
    </themeContext.Provider>
  );
};

const Sub2 = () => {
    const theme = useContext(themeContext)
  return (
    <div style={theme}>
      <h1>sub2</h1>
      <Sub3 />
    </div>
  );
};

const Sub3 = () => {
    const theme = useContext(themeContext)
  return (
    <div style={theme}>
      <h1>sub3</h1>
    </div>
  );
};

export default Context;
