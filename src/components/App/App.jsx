import "../App/App.css";

import friends from "../../friends.json";
import transactions from "../../transactions.json";
import userData from "../../userData.json";

import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import Profile from "../Profile/Profile";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;