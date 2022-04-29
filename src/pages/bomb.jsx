import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeHeart } from '../features/heartsSlice';
import { goToNextLevel } from '../features/levelsSlice';

const Bomb = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [countTrue, setCountTrue] = useState(0);
  const answer = [8, 7, 6, 0, 4];
  const [inputs, setInputs] = useState([]);
  const { currentLevel } = useSelector((state) => state.levels);

  useEffect(() => {
    if (currentLevel !== 4) {
      navigate('/');
    }
  });

  const n1 = useRef();
  const n2 = useRef();
  const n3 = useRef();
  const n4 = useRef();
  const n5 = useRef();

  let checkColors = () => {
    let trueChoices = 0;
    for (let i = 0; i < 5; i++) {
      if (answer[i] === +inputs[i].current.value) {
        ++trueChoices;
        inputs[i].current.style.backgroundColor = 'green';
      } else if (answer[i] > inputs[i].current.value) {
        inputs[i].current.style.backgroundColor = 'red';
      } else {
        inputs[i].current.style.backgroundColor = 'blue';
      }
    }
    dispatch(removeHeart());
    setCountTrue(trueChoices);
  };

  useEffect(() => {
    let grabInputs = [];
    grabInputs.push(n1);
    grabInputs.push(n2);
    grabInputs.push(n3);
    grabInputs.push(n4);
    grabInputs.push(n5);
    setInputs(grabInputs);
  }, [inputs]);

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
        !وقت خنثی کردن بمبههه
      </Typography>
      <Box>
        <input
          type="number"
          variant="filled"
          style={{
            width: '60px',
            paddingLeft: '10px',
            height: 40,
            backgroundColor: 'white',
            borderRadius: 15,
            fontSize: '2rem',
            border: 0,
            margin: '5px',
          }}
          min={0}
          max={9}
          defaultValue={1}
          ref={n1}
        />
        <input
          type="number"
          variant="filled"
          style={{
            width: '60px',
            paddingLeft: '10px',
            height: 40,
            backgroundColor: 'white',
            borderRadius: 15,
            fontSize: '2rem',
            border: 0,
            margin: '5px',
          }}
          ref={n2}
          min={0}
          max={9}
          defaultValue={1}
        />
        <input
          type="number"
          variant="filled"
          style={{
            width: '60px',
            paddingLeft: '10px',
            height: 40,
            backgroundColor: 'white',
            borderRadius: 15,
            fontSize: '2rem',
            border: 0,
            margin: '5px',
          }}
          ref={n3}
          min={0}
          max={9}
          defaultValue={1}
        />
        <input
          type="number"
          variant="filled"
          style={{
            width: '60px',
            paddingLeft: '10px',
            height: 40,
            backgroundColor: 'white',
            borderRadius: 15,
            fontSize: '2rem',
            border: 0,
            margin: '5px',
          }}
          ref={n4}
          min={0}
          max={9}
          defaultValue={1}
        />
        <input
          type="number"
          variant="filled"
          style={{
            width: '60px',
            paddingLeft: '10px',
            height: 40,
            backgroundColor: 'white',
            borderRadius: 15,
            fontSize: '2rem',
            border: 0,
            margin: '5px',
          }}
          ref={n5}
          min={0}
          max={9}
          defaultValue={1}
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="error"
        sx={{ mt: 5 }}
        onClick={() => {
          checkColors();
        }}
      >
        یا شانس و یا اقبال. این عددو امتحان کنننن
      </Button>
      <Button
        variant="contained"
        color="success"
        size="large"
        onClick={() => {
          dispatch(goToNextLevel());
          navigate('/');
        }}
        disabled={countTrue !== 5}
        sx={{ mt: 6 }}
      >
        وقت جایزستتتتت
      </Button>
    </Box>
  );
};

export default Bomb;
