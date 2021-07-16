import './App.css';
import About from './component/About';
import Shop from './component/Shop';
import Home from './component/Home';
import Nav from './component/Nav';
import Item from './component/Item';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about"  component={About}/>
      <Route path="/shop" exact component={Shop}/>
      <Route path="/shop/:any" component={Item}/>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
