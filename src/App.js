import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TodoDetails from './components/TodoDetails';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import "./App.css"

function App() {
  return (
  
      <Routes>
       <Route
        path="/"
        element={
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        }
      />
        <Route path="/todos/:id" element={<TodoDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
 
  );
}

export default App;
