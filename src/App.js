import ChildComp from "./propSample/ChildComp";
import CityList from "./propSample/CityList";
import ProductDetail from "./propSample/ProductDetail";
import UserDetail from "./propSample/UserDetail";

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
      <ProductDetail name='IPhone' stock={10} status={false}/>
    </>
  );
}

export default App;

