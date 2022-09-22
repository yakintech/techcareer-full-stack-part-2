import CategoryPage from "./propSample/CategoryPage";
import ChildComp from "./propSample/ChildComp";
import CityList from "./propSample/CityList";
import ProductDetail from "./propSample/ProductDetail";
import UserDetail from "./propSample/UserDetail";
import ArraySample from "./state/ArraySample";
import CategoryTable from "./state/CategoryTable";
import CounterSample from "./state/CounterSample";
import InputChangeSample from "./state/InputChangeSample";
import ParentCounter from "./state/ParentCounter";
import ToDoListSample from "./state/ToDoListSample";
import ToggleStateSample from "./state/ToggleStateSample";

function App() {

  let citiesSource = ['İzmir', 'İstanbul', 'Bakü', 'Paris'];


  const hello = () => {
    alert('Hello React Props!!');
  }

  return (
    <>
      <InputChangeSample />
    </>
  );
}

export default App;

