import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/home/home";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home />
                    }
                />
                <Route
                    path="/education/:id"
                    element={<q />}
                />
                <Route
                    path="/project/:url"
                    element={< q />}
                />
            </Routes>
        </BrowserRouter>
    );
}
