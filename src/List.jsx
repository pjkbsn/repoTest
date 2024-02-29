const List = ({ animalArray }) => {
  return (
    <ul>
      {animalArray.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
};

export default List;
