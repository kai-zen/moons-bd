import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { amber, red } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Hearts from './components/Hearts';
import KissMe from './components/Kiss';
import Bomb from './pages/bomb';
import CodeNames from './pages/codenames';
import Glasses from './pages/glasses';
import MainPage from './pages/main';
import Questions from './pages/questions';
import Win from './pages/win';

const App = () => {
  const { heartsCount } = useSelector((state) => state.hearts);
  const theme = createTheme({
    palette: {
      primary: {
        main: amber[400],
      },
      secondary: {
        main: red[800],
      },
    },
    typography: {
      allVariants: {
        fontFamily: 'Lalezar',
      },
    },
  });
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Hearts />
        {heartsCount.length === 0 && <KissMe />}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/glasses" element={<Glasses />} />
          <Route path="/codenames" element={<CodeNames />} />
          <Route path="/bomb" element={<Bomb />} />
          <Route path="/win" element={<Win />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
