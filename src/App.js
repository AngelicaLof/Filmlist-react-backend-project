
//importing components to the page
import Navbar from './Navbar';
import List from './List';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Create from './Create';
import Filmid from './Filmid';

//the function that renders components to the page
/**
 * the main function for the React app
 * @returns returns the different routes to the available pages
 */
function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
    <div className="content">
    <Switch>
      <Route exact path="/">
        <List />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/films/:id">
        <Filmid />
      </Route>
    </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
