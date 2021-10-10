import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';

import Home from './pages/Home/Home';
import UserList from './pages/UserList/UserList';
import User from './pages/User/User';
import NewUser from './pages/NewUser/NewUser';
import ProductLists from './pages/ProductLists/ProductLists';
import Product from './pages/Product/Product';
import NewProduct from './pages/NewProduct/NewProduct';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      
      <Switch>
        <Route exact path="/">
          < Home/>
        </Route>
        <Route path="/users">
        <UserList/>
        </Route>
        <Route path="/user/:userId">
        <User/>
        </Route>
        <Route path="/newuser">
        <NewUser/>
        </Route>
        <Route path="/products">
          <ProductLists/>
        </Route>
        <Route path="/product/:productId">
          <Product/>
        </Route>
        <Route path="/newproduct">
          <NewProduct/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
