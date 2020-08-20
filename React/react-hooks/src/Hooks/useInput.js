import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue(initialValue);
  };

  const bind = (event) => { 
      setValue(event.target.value);
    };

  return [value, bind, reset]
}

export default useInput;
