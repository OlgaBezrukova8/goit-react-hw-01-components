import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendList/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          id={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
