import './App.css';
import { Route,Switch} from "react-router-dom";
import Login from './components/Login';
import UserDetails from './components/UserDetails';
import LoginUsers from './components/LoginUsers';

function App() {
  return (
   <div>
     <Switch>
        <Route path= '/login' exact component= {Login}/>
        <Route path= '/loginsucess' exact component={LoginUsers}/>  
        <Route path='/loginsucess/:id' exact component={UserDetails}/>
     </Switch>
   </div>
  );
}

export default App;
