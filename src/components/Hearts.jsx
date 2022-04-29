import { Favorite } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';

const Hearts = () => {
  const { heartsCount, bigHeart } = useSelector((state) => state.hearts);
  return (
    <div
      style={{ position: 'fixed', right: '5%', bottom: '5%', zIndex: '100' }}
    >
      {heartsCount.map((h, i) => {
        return (
          <IconButton
            key={i}
            size="small"
            sx={{
              boxShadow: 10,
              backgroundColor: 'rgba(256,256,256,.54)',
              ml: 1,
            }}
          >
            <Favorite fontSize="inherit" color="error" />
          </IconButton>
        );
      })}
      {bigHeart && (
        <IconButton
          size="large"
          sx={{
            boxShadow: 10,
            backgroundColor: 'rgba(256,256,256,.54)',
            ml: 1,
          }}
        >
          <Favorite sx={{ fontSize: '4rem' }} color="error" />
        </IconButton>
      )}
    </div>
  );
};

export default Hearts;
