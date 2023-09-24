import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Reg } from './components/registration';
import { Menu } from './components/menu';
import { Login } from './components/login';
import { Dashboard } from './components/dashboard';
import { Form } from './components/form';
import { Rental } from './components/rental';
import { Update } from './components/update';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Menu />, <Reg />]} />
          <Route path='/login' element={[<Menu />, <Login />]} />
          <Route path='/dashboard/:id' element={[<Menu />, <Dashboard />]} />
          <Route path='/form/:id' element={[<Menu />, <Form />]} />
          <Route path='/rental' element={[<Menu />, <Rental />]} />
          <Route path='/update/:id' element={[<Menu />, <Update />]} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
