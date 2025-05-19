import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  InputBase,
  Box,
  styled,
  IconButton,
} from '@mui/material';
import {
  MoodboardIcon,
  MaterialIcon,
  ProductIcon,
  DesignIcon,
  MyBoardsIcon,
  SearchIcon,
  FilterIcon,
} from './icons';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#FAFAFA',
  borderBottom: '1px solid #e0e0e0',
  boxShadow: 'none',
  padding: '0 16px 0',
  position: 'sticky',
  top: 0,
  zIndex: 1100,
  flex: 'none',
}));

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: 0,
  gap: '8px',
  width: '100%',
  height: '44px',
}));

const SearchField = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '8px 8px 8px 12px',
  gap: '8px',
  width: '100%',
  height: '44px',
  border: '1px solid #e4e4e7',
  borderRadius: '24px',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  width: '16px',
  height: '16px',
  flex: 'none',
  order: 0,
  flexGrow: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    color: '#0F172A',
    width: '16px',
    height: '16px',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  height: '20px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  color: '#71717A',
  flex: 1,
  '& .MuiInputBase-input': {
    padding: 0,
  },
}));

const FilterIconButton = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '8px',
  gap: '10px',
  width: '32px',
  height: '32px',
  background: '#E0E7FF',
  borderRadius: '32px',
  flex: 'none',
  flexGrow: 0,
  '& svg': {
    width: '16px',
    height: '16px',
    color: '#1E6EB4',
  },
  '&:hover': {
    background: '#E0E7FF',
  },
}));

const TopToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: '56px !important',
  padding: 0,
  backgroundColor: '#FAFAFA',
  '&.MuiToolbar-root': {
    padding: 0,
  },
}));

const BottomToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: '44px !important',
  height: '44px',
  padding: 0,
  backgroundColor: '#FAFAFA',
  '&.MuiToolbar-root': {
    padding: 0,
  },
}));

const StyledTab = styled(Tab)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4px',
  gap: '4px',
  width: 'auto',
  height: '44px',
  minHeight: '44px !important',
  borderRadius: 0,
  flex: 'none',
  flexGrow: 1,
  minWidth: 'unset',
  textTransform: 'none',
  '&.Mui-selected': {
    borderBottom: '2px solid #18181B',
    color: '#18181B',
    '& .MuiSvgIcon-root': {
      color: '#0F172A',
    },
  },
  '& .MuiSvgIcon-root': {
    width: '16px',
    height: '16px',
    margin: 0,
    flex: 'none',
    order: 0,
    flexGrow: 0,
  },
  '& .MuiTab-wrapper': {
    width: '67px',
    height: '16px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center',
    flex: 'none',
    order: 1,
    flexGrow: 0,
  },
});

const StyledTabs = styled(Tabs)({
  width: '100%',
  padding: 0,
  '& .MuiTabs-indicator': {
    display: 'none',
  },
});

const Navbar = ({ onCategoryChange, onSearch }) => {
  const [value, setValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const categories = ['Moodboard', 'Material', 'Product', 'Design', 'Myboards'];
    onCategoryChange(categories[newValue]);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchQuery);
    }
  };

  return (
    <StyledAppBar elevation={0}>
      <TopToolbar>
        <Search>
          <SearchField>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Vietnam photos"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleSearchSubmit}
            />
            <FilterIconButton>
              <FilterIcon />
            </FilterIconButton>
          </SearchField>
        </Search>
      </TopToolbar>
      <BottomToolbar>
        <StyledTabs 
          value={value} 
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <StyledTab icon={<MoodboardIcon />} label="Moodboard" />
          <StyledTab icon={<MaterialIcon />} label="Material" />
          <StyledTab icon={<ProductIcon />} label="Product" />
          <StyledTab icon={<DesignIcon />} label="Design" />
          <StyledTab icon={<MyBoardsIcon />} label="My boards" />
        </StyledTabs>
      </BottomToolbar>
    </StyledAppBar>
  );
};

export default Navbar;