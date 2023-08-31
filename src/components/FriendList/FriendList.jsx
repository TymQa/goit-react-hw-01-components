import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import {FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({avatar, name, isOnline, id}) => (
        <li
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        ></li>
      ))}
    </ul>
  );
};