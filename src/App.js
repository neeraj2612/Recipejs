import './App.css';
import Pages from './pages/Pages';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Pages/>
      </BrowserRouter>
      </div>
   
  );
}

export default App;
