import Login from './components/login/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './components/Page';
import Register from './components/register/register';
import Admin from './components/admin/admin';
import AdminChange from './components/admin/adminChange';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={ <Admin/> }/>
        <Route path="/admin-change" element={ <AdminChange/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/" element={ <Page/> }/>
        <Route path="/register" element={ <Register/> }/>
      </Routes>
    </BrowserRouter>
  );

}
export default App;