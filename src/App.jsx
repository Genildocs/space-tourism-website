import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Destination from "./pages/destination/destination";
import Error from "./pages/error/error";

function App() {  

  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />   
         <Route path="/destination" element={<Destination />} />   
         <Route path="*" element={<Error />} />    
      </Routes>
    </BrowserRouter>
  )
}

export default App

