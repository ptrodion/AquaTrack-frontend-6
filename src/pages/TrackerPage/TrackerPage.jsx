import UserBar from "../../components/UserBar/UserBar.jsx"
import UserPanel from "../../components/UserPanel/UserPanel.jsx"

function TrackerPage() {
  return (
    <div>
    <UserPanel />
    <UserBar
    name="Nadia"
    avatarUrl="https://example.com/avatar.jpg"/>
      <h1>TrackerPage</h1>
    </div>
  
  );
}

export default TrackerPage;
