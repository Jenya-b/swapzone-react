import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Layout } from './modules/Layout';
import { About } from './modules/pages/about/about';
import { Home } from './modules/pages/home/home';
import { NotFound } from './modules/pages/notFound/notFound';
import GlobalStyles from './styles/global';
import { baseTheme } from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
