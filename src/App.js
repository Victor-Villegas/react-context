// Dependencies

import './App.css';
import Header from './components/Header';
import { ThemeContextConsumer } from './context/ThemeContext';
import WelcomeMsg from './components/WelcomeMsg';
import { LogInContextConsumer } from './context/LogInContext';
import UserList from './components/UserList';

// Components

function App () {
  return (
    <ThemeContextConsumer>
      {({ theme }) => (
        <LogInContextConsumer>
          {({ userName, isLoggedIn }) => (
            <div className={`${theme}-App App`}>
              <Header/>
              <WelcomeMsg text={`¡Welcome ${userName}!`} theme={theme} isLoggedIn={isLoggedIn}/>
              <UserList/>
            </div>
          )}
        </LogInContextConsumer>
      )}
    </ThemeContextConsumer>
  );
}

export default App;
