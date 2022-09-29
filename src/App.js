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
import Products from "./contextSample/Products";
import { useContext } from "react";
import { CartContext } from "./contextSample/CartContext";
import Cart from "./contextSample/Cart";
import 'antd/dist/antd.css';
import {  Layout, Menu } from 'antd';
import Customers from "./components/Customers";
import AddCustomer from "./components/AddCustomer";
import AddProduct from "./components/AddProduct";
import AddSupplierWithFormik from "./components/AddSupplierWithFormik";


const { Header, Content, Footer } = Layout;


function App() {

  const { cart } = useContext(CartContext)

  const items = [
    { label:<Link to='/'>Home</Link> , key: '1' }, 
    { label:<Link to='/customers'>Customers</Link> , key: '2' }, 
    { label:<Link to='/customers'>Products</Link> , key: '3' }, 
    { label:<Link to='/addcustomer'>Add Customer</Link> , key: '4' }, 
    { label:<Link to='/addproduct'>Add Product</Link> , key: '5' }, 
    { label:<Link to='/addsupplierwithformik'>Add Supplier With Formik</Link> , key: '6' }, 

  ];

  return (
    <>

      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={items}
          />
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/addcustomer" element={<AddCustomer/>}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/contact" element={<ContactPage />}></Route>
              <Route path="/categories" element={<CategoryPage />}></Route>
              <Route path="/categories/:id" element={<CategoryDetail />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/customers" element={<Customers />}></Route>
              <Route path="/addproduct" element={<AddProduct />}></Route>
              <Route path="/addsupplierwithformik" element={<AddSupplierWithFormik />}></Route>


              <Route path="/guardsample" element={
                <GuardSample>
                  <ChildSample />
                </GuardSample>
              }>
              </Route>
              <Route path="/location" element={<LocationSample />}></Route>


            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}> </Footer>



      </Layout>

        {/* <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/categories'>Category List</Link></li>
        <li><Link to='/guardsample'>Guard Sample</Link></li>
        <li><Link to='/location'>Location Sample</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/cart'>Cart</Link></li> */}



    </>
  );
}

export default App;

