import { useState, useRef } from "react";

//Skapa en ny komponent ToDo som har en textruta,
//en knapp och en ul-lista. När man klickar på knappen så läggs texten i
//textrutan till som en punkt i ul-listan. Ifall textrutan är tom så läggs inget till.

const ToDo = () => {
  const [text, setText] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClickAdd = () => {
    if (input !== "") {
      setText([...text, input]);
    } else {
      return;
    }
    inputRef.current.focus();
  };

  const handleClickRemove = () => {
    setText([]);
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} ref={inputRef} />
      <button onClick={handleClickAdd}>Lägg till</button>
      <button onClick={handleClickRemove}>Ta bort allt</button>
      <ul>
        {text.map((text, index) => {
          return <li key={index}>{text}</li>;
        })}
      </ul>
    </>
  );
};

export default ToDo;
