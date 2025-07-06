import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import  Home from './routes/Home';
import  NotFound  from './routes/NotFound';
import About from './routes/About';
import { Greeting } from './components/Greeting';
import { Counter } from './components/Counter';
import './App.css'

function App() {
  const Home = React.lazy(() => import('./routes/Home'));
  return (
  <BrowserRouter>
    <nav className="p-4 bg-gray-800 text-white">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/about" className="mr-4">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={
  <React.Suspense fallback={<div>Loading...</div>}>
    <Home />
  </React.Suspense>
} />
      <Route path="/about" element={<About />} />
       <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/not-found" element={<NotFound />} />
      
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
