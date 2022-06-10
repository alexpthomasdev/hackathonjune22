import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import Header from './components/Header';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
