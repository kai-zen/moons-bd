import { IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHeart } from '../features/heartsSlice';

const KissMe = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  return (
    <Tooltip title="یکم بوسم کن بلکه فرجی بشه :(" placement="top">
      <IconButton
        color="secondary"
        sx={{
          position: 'fixed',
          bottom: '5%',
          left: '10%',
          fontSize: '3rem',
        }}
        onClick={() => {
          if (
            count === 5 ||
            count === 10 ||
            count === 22 ||
            count === 40 ||
            count === 70
          ) {
            dispatch(addHeart());
          }
          setCount(count + 1);
        }}
      >
        💋
      </IconButton>
    </Tooltip>
  );
};

export default KissMe;
