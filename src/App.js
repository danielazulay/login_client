import {BrowserRouter,Route} from 'react-router-dom'
import userForm from './userForm'
import Users from './Users'
import Profile from './Profile'
function App() {
  return (
    <BrowserRouter>
    <Route path="/sign" component={userForm}/>
    <Route path="/login" component={Users}/>
    <Route path="/profile" component={Profile}/>
    </BrowserRouter>
  );
}

export default App;
