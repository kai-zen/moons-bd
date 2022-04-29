import { Box, Button, Collapse, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeHeart } from '../features/heartsSlice';
import { goToNextLevel } from '../features/levelsSlice';

const CodeNames = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentLevel } = useSelector((state) => state.levels);
  const [countTrue, setCountTrue] = useState(0);

  const words = [
    'دوست',
    'سلام',
    'دارایی',
    'سیاست',
    'خورشید',
    'دوا',
    'جان',
    'جانور',
    'جعبه',
    'اسب',
    'دین',
    'کچل',
    'دندان',
    'ماه',
    'دعا',
    'جعبه',
    'جامدادی',
    'دارم',
    'جوراب',
    'دماغ',
  ];

  useEffect(() => {
    if (currentLevel !== 3) {
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
        !به مرحله کد نیمز خوش اومدی
      </Typography>
      <Box>
        <Typography variant="h5" sx={{ mt: 3 }}>
          واژه ی کد:&nbsp;&nbsp;مجدد
        </Typography>
      </Box>
      <Box>
        <Grid
          container
          spacing={4}
          sx={{
            width: '80%',
            mx: 'auto',
            pt: 5,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {words.map((w, i) => {
            return (
              <Grid item xs={4} sm={3} md={2}>
                <Button
                  onClick={(e) => {
                    if (i === 0 || i === 6 || i === 13 || i === 17) {
                      e.target.style.backgroundColor = 'green';
                      e.target.disabled = true;
                      setCountTrue(countTrue + 1);
                    } else {
                      e.target.style.backgroundColor = 'red';
                      e.target.disabled = true;
                      dispatch(removeHeart());
                    }
                  }}
                  variant="contained"
                  sx={{ backgroundColor: 'white', width: 60, height: 40 }}
                >
                  {w}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Collapse in={countTrue === 4}>
        <Typography
          variant="h4"
          color="error"
          sx={{ pt: 5, borderBottom: '3px solid' }}
        >
          دوست دارم ماه جان
        </Typography>
      </Collapse>
      <Button
        variant="contained"
        color="success"
        size="large"
        onClick={() => {
          dispatch(goToNextLevel());
          navigate('/');
        }}
        disabled={countTrue !== 4}
        sx={{ mt: 6 }}
      >
        فقط یه مرحله دیگه موندهههه
      </Button>
    </Box>
  );
};

export default CodeNames;
