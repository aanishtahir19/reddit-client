
import './App.scss';

// ---------------//
// Importing Components//
  // Importing Header Component
import Header from './features/Header/Header.js';
  // Imporitng Content Componet
import Content from './features/Content/Content.js';
//---------------//
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
