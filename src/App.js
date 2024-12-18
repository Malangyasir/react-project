import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
<Navbar logo="Codelearn"/>
<div className="container">
<Switch>
          <Route exect path="/About">
            <About />
          </Route>
          <Route exect path="/">
             <TextForm Headers="write a content"/>
          </Route>
</Switch>
</div>
</Router>
    </>
  );
}
export default App;