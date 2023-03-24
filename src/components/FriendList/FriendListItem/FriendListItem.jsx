import PropTypes from 'prop-types';
import s from './Friendlistitem.module.css';
import  {FcApproval, FcCancel}  from "react-icons/fc";

const FriendListItem = ({avatar,name,isOnline}) =>{
    return(
        <li className={s.item}>
  <span className={s.status}>{isOnline?(<FcApproval size="2rem"/>):(<FcCancel size="2rem"/>)}</span>
  <img className={s.avatar} src={avatar} alt={name} width="48" />
  <p className={s.name}>{name}</p>
</li>
    )
}

FriendListItem.propTypes = {
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired
}

export default FriendListItem;
