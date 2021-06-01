import React, { useState } from 'react';

const { Provider, Consumer } = React.createContext();

function LogInContextProvider (props) {
  const USER_INFO = {
    name: 'test',
    password: 12345
  };

  const [userName, setUserName] = useState(USER_INFO.name);
  const [isLoggedIn, setisLoggedIn] = useState(true);

  function _logIn () {
    if (isLoggedIn) {
      setUserName('Guest');
      setisLoggedIn(false);
    } else {
      setUserName(USER_INFO.name);
      setisLoggedIn(true);
    }
  }

  return (
    <Provider value={{
      userName,
      isLoggedIn,
      USER_INFO,
      logIn: _logIn
    }}>
      {props.children}
    </Provider>
  );
}

export { LogInContextProvider, Consumer as LogInContextConsumer };
