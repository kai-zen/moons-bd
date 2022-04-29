import { Box, Button, Typography } from '@mui/material';
import ReactAudioPlayer from 'react-audio-player';
import { useDispatch } from 'react-redux';
import { giveBigHeart } from '../features/heartsSlice';

const Win = () => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 5,
      }}
    >
      <ReactAudioPlayer src="./bd.mp3" controls autoPlay />
      <Box sx={{ m: 3 }}>
        <img
          src="./images/hug.jpeg"
          alt="hug"
          style={{ width: '320px', borderRadius: '25px' }}
        />
      </Box>
      <Button
        variant="contained"
        color="warning"
        onClick={() => {
          dispatch(giveBigHeart());
        }}
      >
        جون منم مال تو
      </Button>
      <Typography variant="h6" sx={{ textAlign: 'center', mt: 8 }}>
        امیدوارم دوسش داشته بوده باشی :)
      </Typography>
    </Box>
  );
};

export default Win;
