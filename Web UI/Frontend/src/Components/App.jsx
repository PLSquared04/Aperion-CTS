import React from "react";
import { AuthProvider } from "../Contexts/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
function App() {
  return (
    <div>
      <Router basename="/">
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
              <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
      <footer />
    </div>
  );
}

export default App;
