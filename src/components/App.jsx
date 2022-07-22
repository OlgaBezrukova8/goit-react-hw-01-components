import React from 'react';

import Profile from 'components/Profile/Profile';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import user from 'components/Profile/user.json';
import friends from 'components/FriendList/friends.json';
import transactions from 'components/TransactionHistory/transactions.json';

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
    (<FriendList friends={friends} />),
    (<TransactionHistory items={transactions} />)
  );
};
