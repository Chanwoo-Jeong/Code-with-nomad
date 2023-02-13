import { useState } from "react";
const useInput = (initatlValue, validator) => {
  const [value, setValue] = useState(initatlValue);
  const onChange = (e) => {
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(e.target.value);
    }
    if (willUpdate) setValue(e.target.value);
  };

  return { value, onChange };
};

export default useInput;
