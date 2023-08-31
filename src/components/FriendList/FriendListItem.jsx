import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export const FriendListItem = ({id, avatar, name, isOnline}) => {
  return(
    <li className={css.listItem}>
      <span className={css.isOnline} status={isOnline}></span>
      <img src={avatar} alt="User Avatar" className={css.avatar} />
      <span className={css.name}>{name}</span>
    </li>
  )
}