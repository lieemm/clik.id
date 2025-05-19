import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import ImageGrid from './components/ImageGrid';

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
      <Box sx={{ 
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FAFAFA',
      }}>
        <Navbar 
          onCategoryChange={handleCategoryChange} 
          onSearch={handleSearch}
        />
        <Box sx={{
          flex: 1,
          overflowY: 'auto',
          padding: '12px 16px 0',
        }}>
          <ImageGrid 
            category={currentCategory} 
            searchQuery={searchQuery}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App; 