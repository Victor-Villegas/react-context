import Button from './Button';

function UserCard (props) {
  const { id, name, avatar, biography } = props.user;

  return (
    <div className={`${props.theme}-userCard userCard`}>
      <img src={avatar} alt="avatar" className={'userCardImg'}/>
      <div className={`${props.theme}-userCardContent userCardContent`}>
        <h5>{name}</h5>
        <p>{biography}</p>
        {props.isLoggedIn ? <Button theme={props.theme} className={`${props.theme}-userBtn`}
                                    onClick={() => props.btnFunction(id)}>Erase</Button> : null}
      </div>
    </div>
  );
}

export default UserCard;
