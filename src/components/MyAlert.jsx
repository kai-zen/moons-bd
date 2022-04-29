import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from '../features/alertSlice';

export function MyAlert({ children }) {
  const { openAlert: open } = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: '70%', mx: '15%', mt: 5 }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="large"
              onClick={() => {
                dispatch(closeAlert());
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{
            mb: 2,
            direction: 'rtl',
            px: 3,
            backgroundColor: '#6e43a3',
          }}
          variant="filled"
          icon={false}
        >
          {children}
        </Alert>
      </Collapse>
    </Box>
  );
}
