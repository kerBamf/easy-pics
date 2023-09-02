import logo from './logo.svg';
import './App.css';
import MainPage from './pages/mainPage';
import ShowPerson from './pages/showPerson'
import Header from './components/header';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/users/:id' element={<ShowPerson />} />
      </Routes>
    </div>
  );
}

export default App;
