import Login from './components/login/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './components/Page';
import { Navigate } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/home" element={ <Page/> }/>
        <Route path="/" Navigate to="/home" replace={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;