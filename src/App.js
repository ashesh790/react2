import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HtmlForm from './components/HtmlForm';

function App() {
  return (
    <>
      <Navbar title="Tool Box" />
      <div className='container'>
        <HtmlForm heading="Enter Text " />
      </div>
    </>
  );
}

export default App;
