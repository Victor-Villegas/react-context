import appLogo from '../images/logo.png';
import { ThemeContextConsumer } from '../context/ThemeContext';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogInContextConsumer } from '../context/LogInContext';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

function Header () {
  return (
    <ThemeContextConsumer>
      {({ theme, toggleTheme }) => (
        <header>
          <div className={`${theme}-header header-wrapper`}>
            <Logo src={appLogo} alt={'Logo'} text={'Contactia'}/>
            <LogInBtn theme={theme}/>
            <ThemeButton theme={theme} function={toggleTheme}/>
          </div>
        </header>
      )}
    </ThemeContextConsumer>
  );
}

function Logo (props) {
  return (
    <div className={'logo-wrapper'}>
      <img src={props.src} alt={props.alt} id={'logo'}/>
      <h3 id={'title'}>{props.text}</h3>
    </div>
  );
}

function ThemeButton (props) {
  return (
    <div className={'theme-wrapper'}>
      <Button theme={props.theme} onClick={props.function} className={'themeBtn'}>
        <FontAwesomeIcon icon={faAdjust} className={`${props.theme}-themeIcon themeIcon`}/>
      </Button>
    </div>
  );
}

function LogInBtn (props) {
  return (
    <LogInContextConsumer>
      {({ isLoggedIn, logIn }) => (
        <Button theme={props.theme} onClick={logIn} className={'logInBtn'}>
          <FontAwesomeIcon icon={faSignInAlt} className={`${props.theme}-themeIcon themeIcon`}/>
          <p>{isLoggedIn ? 'Log out' : 'Log in'}</p>
        </Button>
      )}
    </LogInContextConsumer>
  );
}

export default Header;
