import { AppProps } from 'next/app';
import { ThemeContextProvider } from '../contexts/ThemeContext';

import '../styles/theme-toggler.scss';
import '../styles/blog.scss';
import '../styles/home.scss';
import '../styles/navbar.scss';
import '../styles/footer.scss';
import 'bootstrap/scss/bootstrap.scss';
import 'react-toggle/style.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeContextProvider>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
        integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
        crossOrigin="anonymous"
      ></script>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
};

export default App;
