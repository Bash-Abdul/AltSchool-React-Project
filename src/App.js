import './App.css';
import Navbar from './Navbar';
import Counter from './Counter';
import TestErrorBoundary from './TestErrorBoundary';
import Error from './404';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import CounterPage from './CounterPage';
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/reducer" element={<CounterPage />} />
          <Route path="/custom" element={<Counter initialCount={0}/>}/>
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
