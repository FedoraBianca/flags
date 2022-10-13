import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

// Initialze the client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:countryName" element={<DetailPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
