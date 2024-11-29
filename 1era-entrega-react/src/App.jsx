import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Navbar from './components/navbar/navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-content">
        <h1>Bienvenido a OversizeLook</h1>
        <p>Sitio Web inspirado a ser una marca de ropa 🚀</p>
      </div>
    </>
  );
}

export default App;
