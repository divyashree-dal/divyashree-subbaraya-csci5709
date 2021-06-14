import './App.css';
import { Redirect, Route,Switch} from "react-router-dom";
import Login from './components/Login';
import UserDetails from './components/UserDetails';
import LoginUsers from './components/LoginUsers';
import { useState } from 'react';

const CheckRoute = ({details,user,path}) => {
  return (<Route path={path}> 
    {
      user ? (details ? <UserDetails /> : <LoginUsers /> ) : <Redirect to="/login" />
    }
  </Route>)
}

function App() {
  const [isUserAuthenticated, setUserAuthenticated] = useState(false);
  return (
   <div>
     <Switch>
       <Route exact path="/">
         <Redirect to="/login" />
       </Route>
        <Route path= '/login' exact> 
          <Login userAuthentication={setUserAuthenticated}/>
        </Route>
        <CheckRoute path='/loginsucess' user={isUserAuthenticated} />  
        <CheckRoute path='/userDetail/:id' user={isUserAuthenticated} details={true}/>
     </Switch>
   </div>
  );
}

export default App;
