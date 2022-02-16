import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NewRegion from './regions/new/NewRegion'
import Regions from './regions/Regions'
import Region from './regions/Region'
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="*"
          element={<Navigate to="/regions" />}
        />
        <Route path="/regions/" element={<Regions />} />
        <Route path="/regions/:id" element={<Region />} />
        <Route path="/regions/new" element={<NewRegion />} />
      </Routes>
    </div>
  );
}

export default App;