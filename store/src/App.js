import Login from './components/login/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './components/Page';
import Register from './components/register/register';
import Admin from './components/admin/admin';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={ <Admin/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/" element={ <Page/> }/>
        <Route path="/register" element={ <Register/> }/>
      </Routes>
    </BrowserRouter>
  );

}
export default App;