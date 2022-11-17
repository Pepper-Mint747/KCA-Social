import "./Messenger.css";
import Header from "../../components/header";

export default function Messenger() {
  return (
    <div>
      <>
        <div className="header">
          <Header />
        </div>
        <div className="messenger">
          <div className="chatMenu">
            <div className="chatMenuWrapper">Menu</div>
          </div>
          <div className="chatBox">
            <div className="chatBoxWrapper">Box</div>
          </div>
          <div className="chatOnline">
            <div className="chatOnlineWrapper">online</div>
          </div>
        </div>
      </>
    </div>
  );
}
