import './styles/app.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';


function App() {
  return (
    <div className="app">
      <div className="container">
        <Navbar/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
