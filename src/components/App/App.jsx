// Congigs
import user from '../configs/user.json';
import data from '../configs/data.json';
import friends from '../configs/friends.json';
import transactions from '../configs/transactions.json';

// Components
import { Profile } from '../profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../Transactions/TransactionHistory';

// Style


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
