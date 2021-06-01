import React, { useState } from 'react';
import { USERS } from './Users';

const UsersContext = React.createContext();
const { Provider, Consumer } = UsersContext;

function UsersContextProvider (props) {
  const [users, setUsers] = useState(USERS);

  function _deleteUser (userID) {
    setUsers(users.filter(user => user.id !== userID));
    console.log(users);
  }

  return (
    <Provider value={{
      users,
      deleteUser: _deleteUser
    }}>
      {props.children}
    </Provider>
  );
}

export { UsersContextProvider, Consumer as UsersContextConsumer };
