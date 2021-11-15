
import './App.scss';

// ---------------//
// Importing Components//
  // Importing Header Component
import Header from './features/Header/Header.js';
  // Imporitng Content Componet
import Content from './features/Content/Content.js';
//---------------//


function App() {
  return (
    <div className="App"style={{backgroundColor:"black"}}>
      <Header/>
      
        <Content />
    </div>
  );
}

export default App;
