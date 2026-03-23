import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StatusDot = styled('span')(({ color }) => ({
  height: '10px',
  width: '10px',
  backgroundColor: color,
  borderRadius: '50%',
  display: 'inline-block',
  marginRight: '8px',
}));

const ArrowBox = styled(Box)({
  position: 'absolute',
  top: 0,
  right: 0,
  gap: 4,
  width: '32px',
  height: '32px',
  backgroundColor: '#E0F2FF', // light background or match design
  borderBottomLeftRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
});

const ApplicationCard = () => {
  const stats = [
    { label: 'In Progress', value: '08', color: '#FF8C38' },
    { label: 'Completed', value: '02', color: '#4CAF50' },
    { label: 'Rejected', value: '00', color: '#F44336' },
  ];

  return (
    <Box position="relative" display="inline-block">
      {/* Arrow icon inside small square box */}
      <ArrowBox>
        <ArrowForwardIcon fontSize="small" color="primary" />
      </ArrowBox>

      {/* Card with L-cut style */}
      <Card
        sx={{
          maxWidth: 500,
          borderRadius: '16px',
          boxShadow: 3,
          pt: 2,
          pr: 2,
          backgroundColor: "red"
        }}
      >
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" color="textSecondary">
              Applications
            </Typography>
            <Box width="32px" /> {/* placeholder for alignment */}
          </Box>

          <Typography variant="h3" fontWeight="bold" my={2}>
            10
          </Typography>

          {stats.map((stat, index) => (
            <Box key={index} display="flex" alignItems="center" mb={1}>
              <StatusDot color={stat.color} />
              <Typography variant="body2" color="textSecondary">
                {stat.label} - {stat.value}
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ApplicationCard;
