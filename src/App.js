import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Navigate, Routes,Route } from 'react-router-dom';
import ToDos from './components/todo/ToDos';
import TablePage from './pages/datatableExample/Table';
import Upload from './pages/upload/Upload';
function App() {
  return (
    <Container>
        <Header />
          <Routes>
            <Route path='/' element={<ToDos/>} />    
            <Route path='/upload' element={<Upload/>} />    
            <Route path='/datatable' element={<TablePage/>} />    
            <Route path='*' element={<Navigate replace to='/' />} />
          </Routes>
        
    </Container>
  );
}

export default App;
