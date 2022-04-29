import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeHeart } from '../features/heartsSlice';
import { goToNextLevel } from '../features/levelsSlice';

const Glasses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentLevel } = useSelector((state) => state.levels);
  const trueChoices = [1, 1, 2, 1, 1, 2, 2, 1];
  const [countTrue, setCountTrue] = useState(0);

  useEffect(() => {
    if (currentLevel !== 2) {
      navigate('/');
    }
  });
  return (
    <Box
      sx={{
        pt: '7vh',
        pb: '15vh',
        px: '10%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" sx={{ mb: 4 }}>
        !به مرحله شیشه ها خوش اومدی
      </Typography>
      {trueChoices.map((trueChoice) => {
        return (
          <ButtonGroup disableElevation variant="contained" sx={{ pt: '2px' }}>
            <Button
              sx={{
                width: 90,
                height: 90,
                backgroundColor: blue[300],
                opacity: '.5',
                '&:hover': {
                  opacity: '.7',
                  backgroundColor: blue[300],
                },
              }}
              onClick={(e) => {
                if (trueChoice === 1) {
                  e.target.style.opacity = 1;
                  e.target.disabled = true;
                  setCountTrue(countTrue + 1);
                } else {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.disabled = true;
                  dispatch(removeHeart());
                }
              }}
            ></Button>
            <Button
              sx={{
                width: 90,
                height: 90,
                backgroundColor: blue[300],
                opacity: '.5',
                '&:hover': {
                  opacity: '.7',
                  backgroundColor: blue[300],
                },
              }}
              onClick={(e) => {
                if (trueChoice === 2) {
                  e.target.style.opacity = 1;
                  e.target.disabled = true;
                  setCountTrue(countTrue + 1);
                } else {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.disabled = true;
                  dispatch(removeHeart());
                }
              }}
            ></Button>
          </ButtonGroup>
        );
      })}
      <Button
        variant="contained"
        color="success"
        size="large"
        onClick={() => {
          dispatch(goToNextLevel());
          navigate('/');
        }}
        disabled={countTrue !== 8}
        sx={{ mt: 6 }}
      >
        این مرحلم بردی هورااا
        <br />! بزن بریم خونه
      </Button>
    </Box>
  );
};

export default Glasses;
