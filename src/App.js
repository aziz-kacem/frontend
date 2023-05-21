import Navbar from './Navbar';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Register from './Register';
import NotFound from './NotFound';
import AddProperty from './AddProperty';
import UserList from './UserList';
import Login from './Login';
import Contact from './Contact';
import Annonces from './Annonces';
import Profile from './Profile';
import ContractList from './lists/ContractList';
import PropertyList from './lists/PropertyList';




function App() {
  
  return (
    <Router>

    
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
       
          <Route exact path="/listc"> 
            <ContractList/>

          </Route> 
          <Route exact path="/property-list"> 
            <PropertyList/>

          </Route> 
          
          <Route exact path="/login"> 
            <Login/>

          </Route> 
          <Route exact path="/annonces"> 
            <Annonces/>

          </Route> 
          <Route exact path="/contact"> 
            <Contact/>

          </Route> 
          <Route  path="/register"> 
            <Register/>
            </Route> 
           
            <Route  path="/add-prop"> 
            <AddProperty/>
            </Route>
            

            <Route  path="/users"> 
            <UserList/>
            </Route>
            <Route  path="/profile"> 
            <Profile/>
            </Route>
          



          <Route path="#">
            <NotFound/>
          </Route>
          

        </Switch>
       
      </div>
    </div>
    </Router>
  );
}

export default App;
