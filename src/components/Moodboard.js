import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Button, Accordion, AccordionSummary, AccordionDetails, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useNavigate } from 'react-router-dom';

// AI Restyle icon SVG
const AiRestyleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="12" height="12" rx="3" stroke="#18181B" strokeWidth="1.5"/>
    <path d="M5.5 8.5L7 10L10.5 6.5" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Palette mock data
const paletteColors = [
  { color: '#FFFFFF', code: '#FFFFFF' },
  { color: '#808080', code: '#808080' },
  { color: '#F5F5DC', code: '#F5F5DC' },
  { color: '#000000', code: '#000000' },
];

const materialList = [
  { label: 'Panel', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', code: '#mcode' },
  { label: 'Paint', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308', code: '#mcode' },
  { label: 'Curtain', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', code: '#mcode' },
  { label: 'Flooring', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511', code: '#mcode' },
];

const stylePalettes = [
  {
    key: 'soft',
    label: 'Soft Neutrals',
    colors: ['#5E616A', '#E8AA8C', '#E2DCD5', '#F9F3E6'],
  },
  {
    key: 'breeze',
    label: 'Scandinavian Breeze',
    colors: ['#F3F3F3', '#303841', '#3A4750', '#2185D5'],
  },
  {
    key: 'breeze2',
    label: 'Scandinavian Breeze 2',
    colors: ['#D7EAEA', '#ACDBDF', '#9692AF', '#69779B'],
  },
];

const Moodboard = () => {
  const [expanded, setExpanded] = useState('style');
  const [selectedPalette, setSelectedPalette] = useState('soft');
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Reset bottomsheet to default state when component mounts
    setIsExpanded(false);
  }, []);

  const handleBack = () => {
    navigate('/');
  };

  const toggleBottomSheet = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box sx={{
      position: 'fixed',
      width: '100%',
      height: '100vh',
      bgcolor: '#fff',
      mx: 'auto',
      fontFamily: 'Inter',
      overflow: 'hidden',
      borderRadius: 0,
      boxShadow: 'none',
      '& > *': {
        padding: 0,
        margin: 0
      }
    }}>
      {/* Header */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
        height: 48,
        position: 'sticky',
        top: 0,
        zIndex: 10,
        bgcolor: '#fff',
        borderBottom: '1px solid #F4F4F5',
      }}>
        <IconButton size="small" sx={{ mr: 1 }} onClick={handleBack}>
          <ArrowBackIosNewIcon sx={{ fontSize: 20, color: '#18181B' }} />
        </IconButton>
        <Typography sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 20, lineHeight: '28px', color: '#18181B', flex: 1, textAlign: 'left' }}>
          Moodboard
        </Typography>
        <Button
          variant="outlined"
          sx={{
            height: 32,
            minWidth: 0,
            px: 1.5,
            borderRadius: 1.5,
            borderColor: '#E4E4E7',
            bgcolor: '#fff',
            color: '#18181B',
            fontWeight: 500,
            fontSize: 14,
            lineHeight: '24px',
            textTransform: 'none',
            gap: 1,
            ml: 1,
          }}
          startIcon={<AiRestyleIcon />}
        >
          AI Restyle
        </Button>
      </Box>

      {/* Main Image */}
      <Box sx={{
        width: '100%',
        height: 293,
        background: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80') center/cover no-repeat`,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderRadius: '0 0 0 0',
      }} />

      {/* Content */}
      <Box sx={{
        position: 'fixed',
        top: 325,
        left: 0,
        right: 0,
        bgcolor: '#fff',
        borderRadius: '16px 16px 0 0',
        minHeight: 909,
        pb: 4,
        transform: isExpanded ? 'translateY(-265px)' : 'translateY(0)',
        transition: 'transform 0.3s ease-out',
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 325px)',
        '& .MuiBox-root': {
          overflow: 'visible'
        }
      }}>
        {/* Drag bar */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            pt: 1,
            cursor: 'pointer',
          }}
          onClick={toggleBottomSheet}
        >
          <Box sx={{ width: 32, height: 4, bgcolor: '#D3D3D3', borderRadius: 2 }} />
        </Box>

        {/* Accordions */}
        <Box sx={{ px: 2, pt: 2 }}>
          {/* Style Accordion */}
          <Accordion expanded={expanded === 'style'} onChange={() => setExpanded(expanded === 'style' ? false : 'style')} sx={{
            boxShadow: 'none',
            borderRadius: 2,
            mb: 2,
            border: '1px solid #E4E4E7',
            '&:before': { display: 'none' },
          }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ minHeight: 56 }}>
              <Typography sx={{ fontWeight: 600, fontSize: 18, color: '#18181B' }}>Style: Minimalist</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Typography sx={{ fontWeight: 500, fontSize: 16, color: '#18181B' }}>Minimalist</Typography>
                  <svg width="16" height="16" style={{ marginLeft: 4 }}><circle cx="8" cy="8" r="7" stroke="#10B981" strokeWidth="2" fill="none" /><circle cx="8" cy="8" r="3" fill="#10B981" /></svg>
                </Box>
                <Typography sx={{ fontSize: 16, color: '#18181B', mb: 2 }}>
                  The Japandi moodboard is presented, featuring a serene blend of Japanese minimalism with Scandinavian functionality. The color palette includes Oyster White, Warm Grey, Cool Grey, and Taupe.
                </Typography>
                <Typography sx={{ fontWeight: 500, fontSize: 16, color: '#18181B', mb: 1 }}>Color palatte:</Typography>
                <RadioGroup
                  value={selectedPalette}
                  onChange={e => setSelectedPalette(e.target.value)}
                  sx={{ gap: 1 }}
                >
                  {stylePalettes.map(p => (
                    <FormControlLabel
                      key={p.key}
                      value={p.key}
                      control={<Radio sx={{ p: 0.5, color: '#E4E4E7', '&.Mui-checked': { color: '#18181B' } }} />}
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography sx={{ fontSize: 16, color: '#18181B', minWidth: 120 }}>{p.label}</Typography>
                          <Box sx={{ display: 'flex', gap: 0.5 }}>
                            {p.colors.map((c, i) => (
                              <Box key={i} sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: c, border: '1px solid #E4E4E7', ml: i > 0 ? -0.5 : 0 }} />
                            ))}
                          </Box>
                        </Box>
                      }
                      sx={{ m: 0, width: '100%' }}
                    />
                  ))}
                </RadioGroup>
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* Industrial Accordion */}
          <Accordion expanded={expanded === 'industrial'} onChange={() => setExpanded(expanded === 'industrial' ? false : 'industrial')} sx={{
            boxShadow: 'none',
            borderRadius: 2,
            mb: 2,
            border: '1px solid #E4E4E7',
            '&:before': { display: 'none' },
          }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ minHeight: 40 }}>
              <Typography sx={{ fontWeight: 500, fontSize: 16, color: '#18181B' }}>Industrial</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: 14, color: '#71717A' }}>No details.</Typography>
            </AccordionDetails>
          </Accordion>

          {/* Mid-Century Modern Accordion */}
          <Accordion expanded={expanded === 'midcentury'} onChange={() => setExpanded(expanded === 'midcentury' ? false : 'midcentury')} sx={{
            boxShadow: 'none',
            borderRadius: 2,
            mb: 2,
            border: '1px solid #E4E4E7',
            '&:before': { display: 'none' },
          }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ minHeight: 40 }}>
              <Typography sx={{ fontWeight: 500, fontSize: 16, color: '#18181B' }}>Mid-Century Modern</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: 14, color: '#71717A' }}>No details.</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Palette & Materials */}
        <Box sx={{ px: 2, pt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 18, color: '#18181B' }}>Palette & Materials</Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#1E6EB4',
                color: '#fff',
                borderRadius: 1.5,
                px: 2,
                py: 0.5,
                minWidth: 0,
                height: 32,
                fontWeight: 500,
                fontSize: 14,
                textTransform: 'none',
                boxShadow: 'none',
                gap: 1,
              }}
              startIcon={<BookmarkBorderIcon sx={{ color: '#fff', fontSize: 18 }} />}
            >
              Save
            </Button>
          </Box>
          {/* Palette row */}
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            {paletteColors.map((p, i) => (
              <Box key={i} sx={{ width: 64, height: 64, bgcolor: p.color, borderRadius: 2, border: '1px solid #E4E4E7', boxShadow: '0px 6px 16px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative' }}>
                <Typography sx={{ position: 'absolute', bottom: 8, left: 0, right: 0, textAlign: 'center', fontWeight: 500, fontSize: 12, color: p.color === '#000000' ? '#fff' : '#18181B' }}>{p.code}</Typography>
              </Box>
            ))}
          </Box>
          {/* Materials row */}
          <Typography sx={{ fontWeight: 500, fontSize: 16, color: '#18181B', mb: 1 }}>Materials</Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {materialList.map((m, i) => (
              <Box key={i} sx={{ width: 83, height: 103, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', mr: 1 }}>
                <Box sx={{ width: 83, height: 83, borderRadius: 2, bgcolor: '#D9D9D9', overflow: 'hidden', border: '1px solid #E4E4E7', boxShadow: '0px 6px 16px rgba(0,0,0,0.12)' }}>
                  <img src={m.img} alt={m.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
                <Typography sx={{ fontWeight: 500, fontSize: 12, color: '#18181B', mt: 0.5 }}>{m.code}</Typography>
                <Box sx={{ position: 'absolute', left: 8, top: 8, bgcolor: 'rgba(255,255,255,0.55)', borderRadius: 8, px: 1, py: 0, display: 'flex', alignItems: 'center', fontSize: 12, color: '#71717A', fontWeight: 500, backdropFilter: 'blur(20px)' }}>
                  {m.label}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Moodboard; 