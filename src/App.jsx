import "./App.css";
import Header from "./Header";
import RepeatText from "./RepeatText";
import List from "./List";
import Counter from "./Counter";
import Check from "./Check";
import Radio from "./Radio";
import DropDown from "./DropDown";
import ToDo from "./ToDo";
import ColorBox from "./ColorBox";
import Name from "./Name";

function App() {
  return (
    <>
      <h1>HEJHEJ</h1>
      <Header headerText="Steg 4 klart" />
      <RepeatText count={7} text="En liten båt blir ofta våt om magen" />
      <List animalArray={["ko", "häst", "hund", "giraff"]} />
      <Counter />
      <Check />
      <Radio />
      <DropDown
        carArray={["Ford", "Volvo", "Porsche", "Kia", "BMW", "Volkswagen"]}
      />
      <ToDo />
      <ColorBox colorArray={["hotpink", "green", "orange", "yellow"]} />
      <Name />
    </>
  );
}

export default App;
