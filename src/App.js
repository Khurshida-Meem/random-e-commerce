import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
// import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
<Home />
          </Route>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;

// Tech Team Daily Standup
// Daily Team Power Meeting
