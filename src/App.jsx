import './App.css'
import Header from './Header';
import RepeatText from './RepeatText';
import List from './List';
import Counter from './Counter';
import Check from './Check';

function App() {


  return (
    <>
  <h1>HEJHEJ</h1>
  <Header headerText="Steg 4 klart"/>
  <RepeatText count={7} text="En liten båt blir ofta våt om magen"/>
    <List animalArray={["ko", "häst", "hund", "giraff"]}/>
    <Counter/>
    <Check/>
    </>
  )
}

export default App
