import { Link, useLocation } from 'react-router-dom';
import './styles.scss';


const Header = () => {
  const location = useLocation();

  return <header className='header'>
    <img src='https://www.thomas.co/themes/custom/thomas_global/logo.svg' alt='logo' />

    <ul>
      <li className={`${location.pathname === '/' ? 'active' : ''}`}>
        <Link className={`${location.pathname === '/' ? 'active' : ''}`} to='/'>Home</Link>
      </li>
      <li className={`${location.pathname === '/questionnaire' ? 'active' : ''}`}>
        <Link className={`${location.pathname === '/questionnaire' ? 'active' : ''}`} to='/questionnaire'>Questionnaire</Link>
      </li>
      <li className={`${location.pathname === '/kudos' ? 'active' : ''}`}>
        <Link className={`${location.pathname === '/kudos' ? 'active' : ''}`} to='/kudos'>Kudos</Link>
      </li>
      <li className={`${location.pathname === '/manager' ? 'active' : ''}`}>
        <Link className={`${location.pathname === '/manager' ? 'active' : ''}`} to='/manager'>Manage</Link>
      </li>
    </ul>
  </header>;

}


export default Header;