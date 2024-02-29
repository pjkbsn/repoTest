import { useState } from "react";

const DropDown = ({ carArray }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <label htmlFor="">Välj vad du vill: </label>
      <select name="text" id="text" onChange={handleChange}>
        {carArray.map((car) => {
          return <option key={car}>{car}</option>;
        })}
        ;
      </select>
      <p>{text}</p>
    </>
  );
};

export default DropDown;
