import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Home from "./modules/Home";
import reportWebVitals from "./reportWebVitals";
import Feed from "./modules/Feed";
import About from "./modules/About";
import Contact from "./modules/Contact";
import Trips from "./modules/Trips";
import Register from "./modules/Register";
import Login from "./modules/Login";
import AuthenticatedRoute from "./routes/AuthenticatedRoute";
import UserProfile from "./modules/elements/UserProfile";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/trips" element={<Trips />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} /> 
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/userProfile" element={<UserProfile />} />
            </Routes>
          </Router>
    </React.StrictMode>
)

reportWebVitals();


