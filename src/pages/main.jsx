import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { MyAlert } from '../components/MyAlert';
import PathGrid from '../components/PathGrid';

const MainPage = () => {
  const { currentLevel } = useSelector((state) => state.levels);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <MyAlert>
        <Typography variant="h6">
          سلام!
          <br />
          به جزیره ی سلنوفیلا خوش اومدی.
          <br />
          تو این جزیره گنجی قایم شده که اگه از همه مرحله ها رد بشی میتونی بهش
          برسی. نقشه گنج همین پایین به تو نشون داده شده و با کلیک روی هر مرحله
          میتونی وارد اون مرحله بشی
          <br />
          موفق باشی کچل.
        </Typography>
      </MyAlert>
      <PathGrid currentLevel={currentLevel} />
    </Box>
  );
};

export default MainPage;
