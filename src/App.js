import CategoryPage from "./propSample/CategoryPage";
import ChildComp from "./propSample/ChildComp";
import CityList from "./propSample/CityList";
import ProductDetail from "./propSample/ProductDetail";
import UserDetail from "./propSample/UserDetail";
import ArraySample from "./state/ArraySample";
import CounterSample from "./state/CounterSample";

function App() {

  let citiesSource = ['İzmir', 'İstanbul', 'Bakü', 'Paris'];


  const hello = () => {
      alert('Hello React Props!!');
  }

  return (
    <>
      {/* <UserDetail name='Çağatay' surname={'Yıldız'} age={18}></UserDetail>
      <CityList cities={citiesSource}/>
      <ChildComp merhaba={hello}/> */}
      {/* <CounterSample/> */}
      <ArraySample/>
    </>
  );
}

export default App;

