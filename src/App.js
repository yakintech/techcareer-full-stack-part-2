import { Link, Route, Routes } from "react-router-dom";
import HomePage from './routerSample/HomePage'
import AboutPage from './routerSample/AboutPage'
import ContactPage from './routerSample/ContactPage'
import CategoryPage from "./routerSample/CategoryPage";
import CategoryDetail from "./routerSample/CategoryDetail";
import ChildSample from "./routerSample/ChildSample";
import GuardSample from "./routerSample/GuardSample";
import LoginPage from "./routerSample/LoginPage";
import LocationSample from "./routerSample/LocationSample";



function App() {


  return (
    <>
      <h1>Site Header</h1>
      <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/categories'>Category List</Link></li>
        <li><Link to='/guardsample'>Guard Sample</Link></li>
        <li><Link to='/location'>Location Sample</Link></li>
      </ul>


      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/categories" element={<CategoryPage />}></Route>
        <Route path="/categories/:id" element={<CategoryDetail />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/guardsample" element={
          <GuardSample>
            <ChildSample />
          </GuardSample>
        }>
        </Route>
        <Route path="/location" element={<LocationSample />}></Route>


      </Routes>
      <h1>Site Footer</h1>
    </>
  );
}

export default App;

