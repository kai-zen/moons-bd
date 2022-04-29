import { Box, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeHeart } from '../features/heartsSlice';

const SingleQuestion = ({ question, setCountTrue, countTrue }) => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(256,256,256,.54)',
        borderRadius: '30px',
        m: 3,
        p: '10px 10%',
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" sx={{ m: 2 }}>
        {question.question}
      </Typography>
      <Box>
        {question.options.map((option, i) => {
          return (
            <Button
              variant="contained"
              sx={{ m: 1 }}
              onClick={(e) => {
                if (question.trueOption === i) {
                  e.target.style.backgroundColor = 'green';
                  setCountTrue(countTrue + 1);
                } else {
                  e.target.style.backgroundColor = 'red';
                  e.target.disabled = true;
                  dispatch(removeHeart());
                }
              }}
            >
              {option}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default SingleQuestion;
