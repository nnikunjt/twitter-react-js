import "./message.css";
import {ReactComponent as SendMeassage} from '../../assets/SendMessage.svg'
import {ReactComponent as Expand} from '../../assets/Expand.svg'


function MessageBox() {
  return (
    <div className="messageBox">
      <div className="message">Message</div>
      <div className="icons">
        <div>
          <SendMeassage />
        </div>
        <div>
          <Expand />
        </div>
      </div>
    </div>
  );
}

export default MessageBox;
