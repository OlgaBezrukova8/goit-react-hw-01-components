import React from 'react';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id} className="item">
          <span className="status">{isOnline}</span>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
