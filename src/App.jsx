import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tugas from '../src/components/index.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Tugas />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

