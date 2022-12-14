import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Header from './components/header';
import Layout from './components/layout';
import data from "./data";
import Table from './pages/table'
import Form from './pages/form'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="table" element={<Table />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </div>
  )
}