import { BrowserRouter, Route, Routes } from "react-router-dom";
import Direct from "./Routes/Direct";
import Home from "./Routes/Home";
import Profile from "./Routes/Profile";
import ProfileChange from "./Routes/ProfileChange";
import PasswordChange from "./Routes/PasswordChange"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/direct" element={<Direct />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/profileChange" element={<ProfileChange />}></Route>
        <Route path="PasswordChange" element={<PasswordChange />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
