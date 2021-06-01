function WelcomeMsg (props) {
  return (
    <div className={`${props.theme}-welcomeMsg welcomeMsg`}>
      <h3>{props.text}</h3>
      <br/>
      {props.isLoggedIn ?
        <p>This is your contact list, press the 'Erase' button to erase a contact from the list.</p>
        :
        (
          <>
            <p>This is a default contact list, to edit it please log in using this credentials:</p>
            <p>User name: 'test' - Password: '12345'</p>
          </>
        )
      }
    </div>
  );
}

export default WelcomeMsg;
