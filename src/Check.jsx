import { useState } from "react";

const Check = () => {
  const [cat, setCat] = useState(false);
  const [dog, setDog] = useState(false);

  const handleChangeCat = () => {
    setCat(!cat);
  };

  const handleChangeDog = () => {
    setDog(!dog);
  };

  return (
    <fieldset>
      <legend>Choose your pet:</legend>

      <div>
        <input type="checkbox" onChange={handleChangeCat} />
        <label htmlFor="cat">Cat</label>
      </div>

      <div>
        <input type="checkbox" onChange={handleChangeDog} />
        <label htmlFor="dog">Dog</label>
      </div>
      <p>
        {cat && "Cat"}
        {cat && dog && " and "}
        {dog && "Dog"}
      </p>
    </fieldset>
  );
};

export default Check;
