import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Navigate, Routes,Route } from 'react-router-dom';
import FetchUsers from './components/question2/FetchUsers';
import ToDos from './components/question1/ToDos';
import Home from './components/Home';
function App() {
  return (
    <Container>
        <Header />
        <main className='my-3'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/question1/todo' element={<ToDos/>} />
            <Route path='/question2/users' element={<FetchUsers/>} />
            <Route path='*' element={<Navigate replace to='/' />} />
          </Routes>
        </main>
    </Container>
  );
}

export default App;
