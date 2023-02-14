const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
    console.log("protect");
    // window.getEventListeners(window)
  }
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
    console.log("unprotect");
    // window.getEventListeners(window)
  };
  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
