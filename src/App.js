import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
<Navbar logo="Codelearn"/>
<div className="container">
      <TextForm Headers="write a content"/>
     <br />
     <About/>
</div>
    </>
  );
}
export default App;