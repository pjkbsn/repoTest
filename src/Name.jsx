import { useState } from "react";

const Name = () => {
  const [name, setName] = useState("Filip");

  const handleClick = () => {
    setName("Anders");
  };

  return (
    <>
      <p>{name}</p>
      <button onClick={handleClick}>Byt namn</button>
    </>
  );
};

export default Name;
