import React from 'react';
import { UsersContextConsumer } from '../context/UsersContext';
import { ThemeContextConsumer } from '../context/ThemeContext';
import UserCard from './UserCard';
import { LogInContextConsumer } from '../context/LogInContext';

function UserList () {
  return (
    <div>
      <ThemeContextConsumer>
        {({ theme }) => (
          <UsersContextConsumer>
            {({ users, deleteUser }) => (
              <LogInContextConsumer>
                {({ isLoggedIn }) => (
                  <div className={'userList'}>
                    {users.map(user => (
                      <UserCard user={user} theme={theme} isLoggedIn={isLoggedIn} btnFunction={deleteUser}/>
                    ))}
                  </div>
                )}
              </LogInContextConsumer>
            )}
          </UsersContextConsumer>
        )}
      </ThemeContextConsumer>
    </div>
  );
}

export default UserList;
