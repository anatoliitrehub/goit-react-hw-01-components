import PropTypes from 'prop-types';
import s from './Friendlist.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({friends}) =>{
return(
    <>
    <ul className={s.friendList}>
        {friends.map(el=>{
         const {avatar,name,isOnline,id} = el;
        return(
        
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id}/>
        
        )
        })}
    </ul>
    </>
)
}

FriendList.propTypes = {
    friends:PropTypes.array.isRequired,
}

export default FriendList;