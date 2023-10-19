import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddnoteBook from './Components/Addnotebook';
import Header from './Components/Header';
import NoteBook from './Components/Notebook';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header/>
         <Routes>
          <Route  path='/' element={<AddnoteBook/>}/>
          <Route  path='/Notebook' element={<NoteBook/>}/>
         </Routes >
       </BrowserRouter>
    </div>
  );
}

export default App;
