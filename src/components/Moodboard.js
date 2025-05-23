import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Button, Accordion, AccordionSummary, AccordionDetails, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useNavigate } from 'react-router-dom';

// AI Restyle icon SVG
const AiRestyleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M3.33334 2.66634C3.15653 2.66634 2.98696 2.73658 2.86194 2.8616C2.73691 2.98663 2.66668 3.1562 2.66668 3.33301V12.6663C2.66668 12.8432 2.73691 13.0127 2.86194 13.1377C2.98696 13.2628 3.15653 13.333 3.33334 13.333H12.6667C12.8435 13.333 13.0131 13.2628 13.1381 13.1377C13.2631 13.0127 13.3333 12.8432 13.3333 12.6663V7.99967C13.3333 7.63148 13.6318 7.33301 14 7.33301C14.3682 7.33301 14.6667 7.63148 14.6667 7.99967V12.6663C14.6667 13.1968 14.456 13.7055 14.0809 14.0806C13.7058 14.4556 13.1971 14.6663 12.6667 14.6663H3.33334C2.80291 14.6663 2.2942 14.4556 1.91913 14.0806C1.54406 13.7055 1.33334 13.1968 1.33334 12.6663V3.33301C1.33334 2.80257 1.54406 2.29387 1.91913 1.91879C2.2942 1.54372 2.80291 1.33301 3.33334 1.33301H8.00001C8.3682 1.33301 8.66668 1.63148 8.66668 1.99967C8.66668 2.36786 8.3682 2.66634 8.00001 2.66634H3.33334Z" fill="#18181B"/>
    <path d="M16 3C16 2.74302 15.8657 2.51955 15.6474 2.40782C15.4571 2.30726 15.1829 2.25698 14.9198 2.21229C14.7407 2.17877 14.556 2.14525 14.4329 2.10614C14.209 2.02235 13.9963 1.82682 13.9124 1.61453C13.8564 1.47486 13.8228 1.27374 13.7892 1.0838C13.7445 0.826816 13.6941 0.564246 13.5934 0.368715C13.4758 0.139665 13.2463 0 12.9945 0C12.7258 0 12.4964 0.150838 12.39 0.391061C12.2837 0.625698 12.2445 0.865922 12.2053 1.09497C12.127 1.54749 12.0598 1.8324 11.7184 2.03352C11.5505 2.12849 11.3042 2.17318 11.0636 2.21229C10.8173 2.25698 10.5655 2.29609 10.3584 2.40223C10.1457 2.51397 10.0058 2.73743 10.0002 2.98324C9.99458 3.22905 10.1233 3.45251 10.3304 3.57542C10.5151 3.68156 10.7949 3.73184 11.086 3.78771C11.2763 3.82123 11.4666 3.85475 11.5841 3.89944C12.0262 4.06145 12.1046 4.36871 12.1997 4.89944C12.2445 5.1229 12.2893 5.35754 12.3788 5.58101C12.4572 5.78212 12.5915 5.86033 12.6979 5.92737L12.7426 5.95531C12.7874 5.98324 12.8378 6 12.8937 6H13.0896C13.1456 6 13.2072 5.97765 13.2575 5.94413C13.2967 5.92179 13.3471 5.90503 13.3919 5.86592C13.6325 5.67598 13.7165 5.26816 13.8004 4.83799C13.834 4.6648 13.8732 4.49162 13.9068 4.39665C13.9963 4.17318 14.2034 3.97207 14.4329 3.89385C14.556 3.84916 14.7407 3.81564 14.9198 3.78212C15.1829 3.73743 15.4571 3.68715 15.6474 3.59218C15.8657 3.47486 16 3.2514 16 3ZM13.8172 2.98883C13.8172 3.03352 13.599 3.14525 13.5542 3.18436C13.3191 3.35754 13.1512 3.57542 13.0001 3.82123C12.7874 3.50838 12.53 3.1676 12.1606 3.02235C12.1438 2.95531 12.2389 2.95531 12.2893 2.92179C12.5915 2.72067 12.8098 2.47486 13.0001 2.17318C13.1512 2.41899 13.3247 2.63687 13.5542 2.81564C13.5934 2.84358 13.8172 2.97207 13.8172 2.98324V2.98883Z" fill="#18181B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M6 5.33333C5.63181 5.33333 5.33333 5.63181 5.33333 6C5.33333 6.36819 5.63181 6.66667 6 6.66667C6.36819 6.66667 6.66667 6.36819 6.66667 6C6.66667 5.63181 6.36819 5.33333 6 5.33333ZM4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6Z" fill="#18181B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M9.58601 7.47131C9.96107 7.09637 10.4697 6.88574 11 6.88574C11.5303 6.88574 12.039 7.09637 12.414 7.47131L14.4714 9.52872C14.7318 9.78907 14.7318 10.2112 14.4714 10.4715C14.2111 10.7319 13.789 10.7319 13.5286 10.4715L11.4713 8.41427C11.4713 8.41424 11.4714 8.41429 11.4713 8.41427C11.3463 8.28933 11.1768 8.21908 11 8.21908C10.8233 8.21908 10.6538 8.28926 10.5287 8.41419C10.5287 8.41422 10.5288 8.41417 10.5287 8.41419L4.47141 14.4715C4.21107 14.7319 3.78896 14.7319 3.52861 14.4715C3.26826 14.2112 3.26826 13.7891 3.52861 13.5287L9.58601 7.47131Z" fill="#18181B"/>
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
  const [isStyleExpanded, setIsStyleExpanded] = useState(true);
  const [isPaletteExpanded, setIsPaletteExpanded] = useState(true);

  // Style name mapping
  const styleNames = {
    style: 'Minimalist',
    industrial: 'Industrial',
    midcentury: 'Mid-Century Modern',
  };

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

  const toggleStyleSection = () => {
    setIsStyleExpanded(!isStyleExpanded);
  };

  const togglePaletteSection = () => {
    setIsPaletteExpanded(!isPaletteExpanded);
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
        padding: '0px 12px 0px 16px',
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 48,
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#fff',
        borderBottom: '1px solid #F4F4F5',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flex: 1,
          position: 'relative',
        }}>
          <IconButton 
            size="small" 
            sx={{ 
              flexShrink: 0,
              width: 20,
              height: 20,
              position: 'relative',
              overflow: 'visible',
              p: 0,
              minWidth: 0,
            }} 
            onClick={handleBack}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="#18181B" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </IconButton>
          <Typography sx={{ 
            color: '#18181B',
            textAlign: 'left',
            fontFamily: 'Inter-SemiBold, sans-serif',
            fontSize: 20,
            lineHeight: '28px',
            letterSpacing: '-0.005em',
            fontWeight: 600,
            position: 'relative',
            flex: 1,
          }}>
            Moodboard
          </Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '4px 8px',
            gap: '8px',
            width: 'auto',
            height: '32px',
            background: '#FFFFFF',
            border: '1px solid #E4E4E7',
            borderRadius: '8px',
            flex: 'none',
            order: 4,
            flexGrow: 0,
            zIndex: 4,
            minWidth: 0,
            textTransform: 'none',
            '&:hover': {
              border: '1px solid #E4E4E7',
              background: '#FFFFFF',
            },
            '& .MuiButton-endIcon': {
              margin: 0,
              marginLeft: 0,
              marginRight: 0
            }
          }}
          endIcon={
            <Box sx={{
              width: '16px',
              height: '16px',
              flex: 'none',
              order: 1,
              flexGrow: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <AiRestyleIcon />
            </Box>
          }
        >
          <Typography sx={{ 
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '24px',
            color: '#18181B',
            flex: 'none',
            order: 0,
            flexGrow: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            AI Restyle
          </Typography>
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

      {/* BottomSheet */}
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: isExpanded ? 60 : 325,
          bottom: 0,
          bgcolor: '#fff',
          borderRadius: '16px 16px 0 0',
          boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          minHeight: 200,
          maxHeight: 'calc(100vh - 60px)',
          transform: `translateY(${isExpanded ? '0' : '0'})`,
          opacity: 1,
          '&:hover': {
            boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
          }
        }}
      >
        {/* Drag bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px 0',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}
          onClick={toggleBottomSheet}
        >
          <Box sx={{ 
            width: 32, 
            height: 4, 
            bgcolor: '#D3D3D3', 
            borderRadius: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: '#A1A1AA',
              width: 40,
            }
          }} />
        </Box>

        {/* Content */}
        <Box sx={{
          flex: 1,
          overflowY: 'auto',
          minHeight: 0,
        }}>
          {/* Style Header */}
          <Box sx={{ 
            padding: '4px 16px 12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
          }}
          onClick={toggleStyleSection}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 4H2" stroke="#0F172A" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 8H2" stroke="#0F172A" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.3333 12H2" stroke="#0F172A" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <Typography sx={{ 
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: 18,
                lineHeight: '28px',
                color: '#18181B',
              }}>
                Style: {styleNames[expanded]}
              </Typography>
            </Box>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: isStyleExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            >
              <path d="M4 6L8 10L12 6" stroke="#18181B" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Box>

          {/* Style Content */}
          <Box sx={{ 
            padding: '0 16px 12px 16px',
            maxHeight: isStyleExpanded ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-in-out'
          }}>
            {/* Style Items */}
            {['style', 'industrial', 'midcentury'].map((style) => (
              <Box key={style} sx={{
                bgcolor: '#fff',
                borderRadius: '8px',
                border: '1px solid #E4E4E7',
                padding: expanded === style ? '8px 12px 16px 12px' : '8px 12px',
                mb: 1.5,
                display: 'flex',
                flexDirection: 'column',
                gap: 0.5,
              }}>
                {/* Style Header */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  onClick={() => setExpanded(expanded === style ? false : style)}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ 
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: '24px',
                      color: '#18181B',
                    }}>
                      {styleNames[style]}
                    </Typography>
                    {expanded === style && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_9042_2876)">
                          <path d="M7.99998 14.6663C11.682 14.6663 14.6666 11.6817 14.6666 7.99967C14.6666 4.31767 11.682 1.33301 7.99998 1.33301C4.31798 1.33301 1.33331 4.31767 1.33331 7.99967C1.33331 11.6817 4.31798 14.6663 7.99998 14.6663Z" stroke="#10B981" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 8.00033L7.33333 9.33366L10 6.66699" stroke="#10B981" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_9042_2876">
                            <rect width="16" height="16" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </Box>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: expanded === style ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
                    <path d="M4 6L8 10L12 6" stroke="#18181B" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Box>

                {/* Expanded Content */}
                {expanded === style && (
                  <>
                    <Typography sx={{ 
                      fontFamily: 'Inter',
                      fontSize: 16,
                      lineHeight: '24px',
                      color: '#18181B',
                      fontWeight: 400,
                    }}>
                      {style === 'style' ? 
                        'The Japandi moodboard is presented, featuring a serene blend of Japanese minimalism with Scandinavian functionality. The color palette includes Oyster White, Warm Grey, Cool Grey, and Taupe.' :
                        style === 'industrial' ?
                        'The Industrial style moodboard showcases raw materials and exposed elements, featuring a bold combination of metal, wood, and concrete. The color palette emphasizes deep grays, warm browns, and metallic accents.' :
                        'The Mid-Century Modern moodboard presents a perfect balance of organic and geometric forms, featuring clean lines and natural materials. The color palette includes warm neutrals, bold accent colors, and natural wood tones.'
                      }
                    </Typography>

                    {/* Color Palette */}
                    <Box sx={{ mt: 2 }}>
                      <Typography sx={{ 
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: 16,
                        lineHeight: '24px',
                        color: '#18181B',
                        mb: 1.5,
                      }}>
                        Color palatte:
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {stylePalettes.map(p => (
                          <Box key={p.key} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Radio
                              checked={selectedPalette === p.key}
                              onChange={() => setSelectedPalette(p.key)}
                              value={p.key}
                              sx={{ 
                                p: 0,
                                color: '#E4E4E7',
                                '&.Mui-checked': { color: '#18181B' },
                                '& .MuiSvgIcon-root': { fontSize: 16 }
                              }}
                            />
                            <Typography sx={{ 
                              fontFamily: 'Inter',
                              fontSize: 16,
                              lineHeight: '24px',
                              color: '#18181B',
                              fontWeight: 400,
                            }}>
                              {p.label}
                            </Typography>
                            <Box sx={{ display: 'flex', ml: 'auto' }}>
                              {p.colors.map((c, i) => (
                                <Box key={i} sx={{ 
                                  width: 24,
                                  height: 24,
                                  borderRadius: '50%',
                                  bgcolor: c,
                                  border: '1px solid #E4E4E7',
                                  ml: i > 0 ? -0.5 : 0,
                                }} />
                              ))}
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            ))}
          </Box>

          {/* Palette & Materials Section */}
          <Box sx={{ 
            borderTop: '1px solid #F4F4F5',
            padding: '12px 16px',
          }}>
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 1.5,
              cursor: 'pointer',
            }}
            onClick={togglePaletteSection}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 4H2" stroke="#0F172A" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 8H2" stroke="#0F172A" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.3333 12H2" stroke="#0F172A" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Typography sx={{ 
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: '28px',
                  color: '#18181B',
                }}>
                  Palette & Materials
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: isPaletteExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <path d="M4 6L8 10L12 6" stroke="#18181B" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Box>
            </Box>

            {/* Color Gallery */}
            <Box sx={{ 
              maxHeight: isPaletteExpanded ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out',
              opacity: isPaletteExpanded ? 1 : 0,
            }}>
              <Box sx={{ display: 'flex', gap: 1, mb: 1.5 }}>
                {paletteColors.map((p, i) => (
                  <Box key={i} sx={{ 
                    width: 83,
                    height: 83,
                    bgcolor: p.color,
                    borderRadius: 2,
                    border: '1px solid #E4E4E7',
                    boxShadow: '0px 6px 16px rgba(0,0,0,0.12)',
                    position: 'relative',
                  }}>
                    <Typography sx={{ 
                      position: 'absolute',
                      bottom: 8,
                      left: 0,
                      right: 0,
                      textAlign: 'center',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: 12,
                      lineHeight: '16px',
                      color: p.color === '#000000' ? '#fff' : '#18181B',
                    }}>
                      {p.code}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Materials Section */}
              <Typography sx={{ 
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '24px',
                color: '#18181B',
                mb: 1,
              }}>
                Materials
              </Typography>

              {/* Materials Gallery */}
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {materialList.map((m, i) => (
                  <Box key={i} sx={{ 
                    width: 83,
                    height: 103,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                  }}>
                    <Box sx={{ 
                      width: 83,
                      height: 83,
                      borderRadius: 2,
                      overflow: 'hidden',
                      border: '1px solid #E4E4E7',
                      boxShadow: '0px 6px 16px rgba(0,0,0,0.12)',
                    }}>
                      <img 
                        src={m.img} 
                        alt={m.label} 
                        style={{ 
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }} 
                      />
                    </Box>
                    <Typography sx={{ 
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: 12,
                      lineHeight: '16px',
                      color: '#18181B',
                      mt: 0.5,
                    }}>
                      {m.code}
                    </Typography>
                    <Box sx={{ 
                      position: 'absolute',
                      left: 4,
                      top: 4,
                      bgcolor: 'rgba(255,255,255,0.55)',
                      borderRadius: '100px',
                      px: 1,
                      py: 0,
                      backdropFilter: 'blur(20px)',
                    }}>
                      <Typography sx={{ 
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: 12,
                        lineHeight: '16px',
                        color: '#71717A',
                      }}>
                        {m.label}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Moodboard; 