import './App.css';
import SignUp from './components/SignUp/SignUp';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import User from './components/RegisterSucess/User';

function App() {
  return (

    <Router>
      <Switch>
        <Route path= '/' exact component= {SignUp}/>
        <Route path= '/register' exact component={User}/>  
      </Switch>
    </Router>
   
  );
}

export default App;

