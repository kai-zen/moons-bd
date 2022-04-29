import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Typography } from '@mui/material';
import {
  Celebration,
  Psychology,
  QuestionMark,
  Warning,
  Window,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function PathGrid({ currentLevel }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        mx: 'auto',
        mt: 5,
        pb: '15vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Fab
        variant="extended"
        color="info"
        sx={{ m: 2 }}
        onClick={() => {
          navigate('/questions');
        }}
        disabled={currentLevel !== 1}
      >
        <Typography variant="h5">سوال</Typography>
        <QuestionMark sx={{ ml: 1 }} />
      </Fab>
      <Fab
        variant="extended"
        color="warning"
        sx={{ m: 2 }}
        disabled={currentLevel !== 2}
        onClick={() => {
          navigate('/glasses');
        }}
      >
        <Window sx={{ mr: 1 }} />
        <Typography variant="h5">شیشه</Typography>
      </Fab>
      <Fab
        variant="extended"
        color="success"
        sx={{ p: 3, m: 2 }}
        disabled={currentLevel !== 3}
        onClick={() => {
          navigate('/codenames');
        }}
      >
        <Typography variant="h5">کدنیم</Typography>
        <Psychology sx={{ ml: 1 }} />
      </Fab>
      <Fab
        variant="extended"
        color="error"
        sx={{ p: 3, m: 2 }}
        disabled={currentLevel !== 4}
        onClick={() => {
          navigate('/bomb');
        }}
      >
        <Warning sx={{ mr: 1 }} />
        <Typography variant="h5">بمب</Typography>
      </Fab>
      <Fab
        variant="extended"
        color="primary"
        sx={{ p: 3, m: 2 }}
        disabled={currentLevel !== 5}
        onClick={() => {
          navigate('/win');
        }}
      >
        <Celebration />
      </Fab>
    </Box>
  );
}
