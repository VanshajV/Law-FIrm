import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Second from './components/Second';
import Features from './components/Features';
function App() {
  return (
    <div className=''>
      <div className=''>
      <Navbar></Navbar>
      <Home></Home>
      <Second></Second>
      <Features></Features>
      </div>
      <div>

        
      </div>
    </div>
  );
}

export default App;
