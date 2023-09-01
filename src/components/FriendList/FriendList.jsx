import PropTypes from 'prop-types';
import {List} from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({avatar, name, isOnline, id}) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        ></FriendListItem>
      ))}
    </List>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      name: PropTypes.string,
    })
  ),
};