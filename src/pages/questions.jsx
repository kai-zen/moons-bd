import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SingleQuestion from '../components/SingleQuestions';
import { goToNextLevel } from '../features/levelsSlice';

const Questions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [countTrue, setCountTrue] = useState(0);
  const { currentLevel } = useSelector((state) => state.levels);

  const questions = [
    {
      question: 'رنگ ماشینمون؟',
      options: ['سبز', 'سفید', 'نارنجی', 'زرشکی'],
      trueOption: 2,
    },
    {
      question: 'اولین فیلمی که دیدیم؟',
      options: ['hangover', 'tenet', 'love & other drugs', 'holidate'],
      trueOption: 2,
    },
    {
      question: 'کدوم جز اعضای بوس های هفت گانه نیست؟',
      options: ['پیشونی', 'چشما', 'جای انگشت خدا', 'مماخ'],
      trueOption: 1,
    },
    {
      question: 'من چه چیز پریماهو بیشتر از همه دوس دارم؟',
      options: ['شخصیتشو', 'صداشو', 'طرز فکرشو', 'صورت ماهشو'],
      trueOption: 0,
    },
    {
      question: 'اولین کادویی که دلم میخواست برات بخرم چی بود؟',
      options: ['ماگ', 'کلاه', 'کتاب', 'پاوربانک'],
      trueOption: 3,
    },
  ];

  useEffect(() => {
    if (currentLevel !== 1) {
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
        !به مرحله سوالات خوش اومدی
      </Typography>
      {questions.map((q) => (
        <SingleQuestion
          question={q}
          countTrue={countTrue}
          setCountTrue={setCountTrue}
        />
      ))}
      <Button
        variant="contained"
        color="success"
        size="large"
        onClick={() => {
          dispatch(goToNextLevel());
          navigate('/');
        }}
        disabled={countTrue !== 5}
      >
        اولین مرحلرو بردییی
        <br />! بزن بریم خونه
      </Button>
    </Box>
  );
};

export default Questions;
