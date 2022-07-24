import React from 'react';
import PropTypes from 'prop-types';

import {
  Section,
  ContainerCard,
  Image,
  TextName,
  TextTag,
  TextLocation,
  List,
  Label,
  Value,
} from 'components/Profile/Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats,
  // followers,
  // views,
  // likes,
}) {
  return (
    <Section>
      <div className="profile">
        <ContainerCard>
          <Image src={avatar} alt={username}></Image>
          <TextName>{username}</TextName>
          <TextTag>@{tag}</TextTag>
          <TextLocation>{location}</TextLocation>
        </ContainerCard>

        <List>
          <li>
            <Label>Followers</Label>
            <Value>{stats.followers}</Value>
          </li>
          <li>
            <Label>Views</Label>
            <Value>{stats.views}</Value>
          </li>
          <li>
            <Label>Likes</Label>
            <Value>{stats.likes}</Value>
          </li>
        </List>
      </div>
    </Section>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
