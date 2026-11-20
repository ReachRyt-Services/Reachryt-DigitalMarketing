import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { ThemeProvider } from './hooks/useTheme';

export const App: React.FC = () => {
  useSmoothScroll();

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
