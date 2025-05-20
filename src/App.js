import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import ImageGrid from './components/ImageGrid';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Moodboard from './components/Moodboard';

const theme = createTheme({
  palette: {
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    primary: {
      main: '#000000',
    },
    text: {
      primary: '#18181B',
      secondary: '#71717A',
    },
    zinc: {
      50: '#FAFAFA',
      500: '#71717A',
      900: '#18181B',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
        },
      },
    },
  },
});

function AppContent({ theme, handleCategoryChange, handleSearch, currentCategory, searchQuery }) {
  const location = useLocation();
  const isMoodboard = location.pathname === '/moodboard';

  // Wrapper để dùng navigate trong ImageGrid
  const ImageGridWithNav = (props) => {
    const navigate = useNavigate();
    const handleCardClick = (item) => {
      if (item.category === 'Material') {
        navigate('/moodboard');
      }
    };
    return <ImageGrid {...props} onCardClick={handleCardClick} />;
  };

  return (
    <Box sx={{ 
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#FAFAFA',
    }}>
      {/* Chỉ render Navbar nếu không phải trang moodboard */}
      {!isMoodboard && (
        <Navbar 
          onCategoryChange={handleCategoryChange} 
          onSearch={handleSearch}
        />
      )}
      <Box sx={{
        flex: 1,
        overflowY: 'auto',
      }}>
        <Routes>
          <Route path="/" element={
            <ImageGridWithNav 
              category={currentCategory} 
              searchQuery={searchQuery}
            />
          } />
          <Route path="/moodboard" element={<Moodboard />} />
        </Routes>
      </Box>
    </Box>
  );
}

function App() {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent
          theme={theme}
          handleCategoryChange={handleCategoryChange}
          handleSearch={handleSearch}
          currentCategory={currentCategory}
          searchQuery={searchQuery}
        />
      </Router>
    </ThemeProvider>
  );
}

export default App; 