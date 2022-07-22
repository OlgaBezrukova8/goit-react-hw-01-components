import React from 'react';
import Profile from './Profile/Profile';
import user from 'components/Profile/user.json';
import FriendList from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';

export const App = () => {
  return (
    (
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    ),
    (<FriendList friends={friends} />)
  );
};
