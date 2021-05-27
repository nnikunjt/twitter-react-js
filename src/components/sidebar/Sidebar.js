import "./Sidebar.css";
import {ReactComponent as TwitterLogo} from "../../assets/twitter.svg";
import {ReactComponent as Home} from "../../assets/Home.svg";
import {ReactComponent as Notification} from "../../assets/Notification.svg";
import {ReactComponent as Bookmark} from "../../assets/Bookmark.svg";
import {ReactComponent as Lists} from "../../assets/Lists.svg";
import {ReactComponent as Profile} from "../../assets/Profile.svg";
import {ReactComponent as More} from "../../assets/More.svg";
import {ReactComponent as Explore} from "../../assets/Explore.svg";
import {ReactComponent as Message} from "../../assets/Message.svg";


// import user from "../Assets/user.png";
// import message from "../Assets/message.png";
// import profile from "../Assets/yashSir.jpg";

function Link(props) {
    return(
        <div className="nav-link">
          <div className="logo">
            {props.logo}
          </div>
          <div className="link">{props.name}</div>
        </div>
    )
}

function TweetButton() {
    return(
        <div className="">
            <button className="tweetBtn">Tweet</button>
        </div>
    )
}

function Sidebar() {
  return (
    <div className="test">
      <div className="sidebar">
        <Link logo={<TwitterLogo />} />
        <Link name="Home" logo={<Home />} />
        <Link name="Explore" logo={<Explore />} />
        <Link name="Notification" logo={<Notification />} />
        <Link name="Message" logo={<Message />} />
        <Link name="Bookmarks" logo={<Bookmark />} />
        <Link name="List" logo={<Lists />} />
        <Link name="Profile" logo={<Profile />} />
        <Link name="More" logo={<More />} />


      </div>
    </div>
  );
}

export default Sidebar;
