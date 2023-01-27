import Login from './components/login/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './components/Page';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/home" element={ <Page/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

