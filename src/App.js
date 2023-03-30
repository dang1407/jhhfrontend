import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
// import DashBoard from "./pages/DashBoard/DashBoard";
// import AmenityForm from "./components/HomeStay/CreateHomestay/AmenityForm";
import HomePage from "./homepage/Component/HomePage";
function App() {
  return (
    <Routes>
      <Route index path="/" element={<Login />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      {/* <Route path="/dashboard" element={<DashBoard />} /> */}
      {/* <Route path="/amenity" element={<AmenityForm />} /> */}
    </Routes>
  );
}

export default App;
