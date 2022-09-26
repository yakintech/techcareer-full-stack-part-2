import { Link, Route, Routes } from "react-router-dom";
import HomePage from './routerSample/HomePage'
import AboutPage from './routerSample/AboutPage'
import ContactPage from './routerSample/ContactPage'
import CategoryPage from "./routerSample/CategoryPage";
import CategoryDetail from "./routerSample/CategoryDetail";



function App() {
  

  return (
    <>
      <h1>Site Header</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact</Link></li>     
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/categories'>Category List</Link></li>

      </ul>


      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/categories" element={<CategoryPage/>}></Route>
        <Route path="/categories/:id" element={<CategoryDetail/>}></Route>

      </Routes>
      <h1>Site Footer</h1>
    </>
  );
}

export default App;

