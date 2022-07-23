import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendList/FriendListItem';

import { Section, Container } from 'components/FriendList/FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Section>
      <Container>
        <ul>
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
      </Container>
    </Section>
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
