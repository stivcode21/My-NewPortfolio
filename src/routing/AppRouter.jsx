import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "../home/HomeView";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/education/:id" element={<q />} />
        <Route path="/project/:url" element={<q />} />
      </Routes>
    </BrowserRouter>
  );
}
