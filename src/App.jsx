import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Destination from "./pages/destination/destination";
import Crew from "./pages/crew/crew";
import Technology from "./pages/technology/technology";
import Error from "./pages/error/error";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />          
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

