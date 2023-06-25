import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import Editor from "./components/Editor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Welcome from "./components/welcome";

function App() {
  

  return (
    <>
      <Router>
      
        <Routes>
          <Route
            path="/"
            exact
            element={<Welcome></Welcome>}
          />

          <Route path="/documents/:id" element={<Editor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
