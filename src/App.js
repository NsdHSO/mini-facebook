import './App.css';
import ModuleUser from './module/user/moduleUser'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ModuleUser />
      </div>
    </BrowserRouter>

  );
}

export default App;
