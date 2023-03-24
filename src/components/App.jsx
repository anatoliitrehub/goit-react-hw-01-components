import myUser from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transaction/TransactionHistory'
// import TestBlock from './TestBlock/TestBlock';

export const App = () => {
  return (
    <>
    {/* <TestBlock username={ourUser.username} /> */}
    <Profile username={myUser.username} tag={myUser.tag} location={myUser.location} avatar={myUser.avatar} stats={myUser.stats}/>
    <Statistics data={data} title={"Test title"}/>
    <FriendList friends={friends}/>
    <TransactionHistory items={transactions}/>

    </>   
  );
};
