import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Gallery = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  alignContent: 'flex-start',
  padding: '16px',
  gap: '12px',
  width: '100%',
  minHeight: '912px',
  justifyContent: 'flex-start',
}));

const ItemCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  gap: '12px',
  width: 'calc((100% - 12px) / 2)',
  background: '#FFFFFF',
  borderRadius: '12px',
}));

const ImageContainer = styled(Box)({
  width: '100%',
  position: 'relative',
  paddingTop: '75%', // 4:3 aspect ratio (3/4 = 0.75 = 75%)
  background: '#D9D9D9',
  flexGrow: 0,
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
  overflow: 'hidden',
  '& img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const TextContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '0px 12px 12px',
  gap: '10px',
  width: '100%',
  height: '78px',
});

const Title = styled(Typography)({
  width: '100%',
  height: '40px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  color: '#18181B',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const Subtitle = styled(Typography)({
  width: '100%',
  height: '16px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '16px',
  color: '#71717A',
});

const mockData = [
  {
    id: 1,
    title: 'Modern living room with natural light and minimal furniture',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592',
    category: 'Moodboard',
  },
  {
    id: 2,
    title: 'Premium marble texture with gold veins',
    image: 'https://images.unsplash.com/photo-1573170829349-c9d8cf289c19',
    category: 'Material',
  },
  {
    id: 3,
    title: 'Ergonomic office chair with adjustable features',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482',
    category: 'Product',
  },
  {
    id: 4,
    title: 'Contemporary workspace design concept',
    image: 'https://images.unsplash.com/photo-1558323989-c977c6b5691e',
    category: 'Design',
  },
  {
    id: 5,
    title: 'Scandinavian interior collection',
    image: 'https://images.unsplash.com/photo-1575486661242-62ce0575dc5a',
    category: 'My boards',
  },
  {
    id: 6,
    title: 'Sustainable bamboo flooring samples',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482',
    category: 'Material',
  },
  {
    id: 7,
    title: 'Minimalist kitchen design inspiration',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592',
    category: 'Moodboard',
  },
  {
    id: 8,
    title: 'Modern lighting fixtures collection',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592',
    category: 'Product',
  },
];

const ImageGrid = ({ category = 'all', searchQuery = '', onCardClick }) => {
  const [filteredData, setFilteredData] = useState(mockData);

  useEffect(() => {
    let filtered = mockData;

    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(item => item.category === category);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
      );
    }

    setFilteredData(filtered);
  }, [category, searchQuery]);

  return (
    <Gallery>
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <ItemCard key={item.id} 
            sx={{ cursor: onCardClick ? 'pointer' : 'default' }}
            onClick={onCardClick ? () => onCardClick(item) : undefined}
          >
            <ImageContainer>
              <img
                src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
                alt={item.title}
                loading="lazy"
              />
            </ImageContainer>
            <TextContainer>
              <Title>{item.title}</Title>
              <Subtitle>{item.category}</Subtitle>
            </TextContainer>
          </ItemCard>
        ))
      ) : (
        <Box sx={{ 
          width: '100%', 
          textAlign: 'center', 
          py: 4,
          color: '#71717A' 
        }}>
          <Typography variant="h6">
            No images found for your search
          </Typography>
        </Box>
      )}
    </Gallery>
  );
};

export default ImageGrid; 