import './App.css';
import { Route, Routes  } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import SaySomeThing from './pages/SaySomeThing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<SaySomeThing />}/>
      </Routes>
    </div>
  );
}

export default App;
