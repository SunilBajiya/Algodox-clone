
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navabr from './components/Navbr';
import Home from './components/Home';
import Blog from './components/pages/Blog'
import AboutUs from './components/pages/AboutUs';
import Service from './components/pages/Service';
import ContactUs from './components/pages/ContactUs';
import Project from './components/pages/Project';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navabr />}>
          <Route index element={<Home />} />
         <Route path="/AboutUs" element={<AboutUs/>}/> 
           <Route path="/service" element={<Service/>}/>
          <Route path="/blog" element={<Blog/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/Project" element={<Project/>}/> 
 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
