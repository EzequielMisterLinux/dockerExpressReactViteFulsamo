import React from "react";
import App from "./App";
import AppClient from "./AppClient";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

const Applications = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/AppClient" />} 
                />
                <Route
                    path="/App"
                    element={<App />}
                />
                <Route
                    path="/AppClient"
                    element={<AppClient />}
                />
            </Routes>
        </Router>
    );
}

export default Applications;
