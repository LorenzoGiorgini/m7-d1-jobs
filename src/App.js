import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter , Route, Routes } from "react-router-dom";


import NavBar from "./components/NavBar";
import Home from "./views/Home"
import Company from "./views/Company";
import Favourites from "./views/Favourites";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/company/:companyId"  element={<Company />} />
        <Route path="/favourites"  element={<Favourites />} />
        <Route path="*" element={<div>404 Error</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;