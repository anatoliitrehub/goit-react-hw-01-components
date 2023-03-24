import Profile from './Profile/Profile';
import myUser from '../data/user.json';
// import TestBlock from './TestBlock/TestBlock';

export const App = () => {
  return (
    <>
    {/* <TestBlock username={ourUser.username} /> */}
    <Profile username={myUser.username} tag={myUser.tag} location={myUser.location} avatar={myUser.avatar} stats={myUser.stats}/>
    {/* <Statistics></Statistics> */}
    {/* <FriendList></FriendList> */}
    {/* <TransactionHistory></TransactionHistory> */}

    </>   
  );
};
