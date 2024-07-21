import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';


const App =  () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        {/*<Route path='/' element={<Contacts/>} />*/}
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
