import "./Header.css"
import TwitterLogo from "../Assets/twitter.png"
import HomeLogo from "../Assets/home.png"
import bell from "../Assets/bell.png"
import bookmark from "../Assets/bookmark.png"
import list from "../Assets/list.png"
import more from "../Assets/more.png"
import hastag from "../Assets/hastag.png"
import user from "../Assets/user.png"
import message from "../Assets/message.png"
import profile from "../Assets/yashSir.jpg"

function Logo() {
  return (
    <>
      <img src={TwitterLogo} className="TwitterLogo" />
    </>
  )
}
function Home() {
  return (
    <>
      <img src={HomeLogo} className="Logo" />
      <a href="#" className="Text">
        Home
      </a>
    </>
  )
}
function Explore() {
  return (
    <>
      <img src={hastag} className="Logo" />
      <a href="#" className="Text">
        Explore
      </a>
    </>
  )
}
function Notification() {
  return (
    <>
      <img src={bell} className="Logo" />
      <a href="#" className="Text">
        Notification
      </a>
    </>
  )
}
function Messages() {
  return (
    <>
      <img src={message} className="Logo" />
      <a href="#" className="Text">
        Messages
      </a>
    </>
  )
}
function Bookmarks() {
  return (
    <>
      <img src={bookmark} className="Logo" />
      <a href="#" className="Text">
        Bookmarks
      </a>
    </>
  )
}
function Lists() {
  return (
    <>
      <img src={list} className="Logo" />
      <a href="#" className="Text">
        Lists
      </a>
    </>
  )
}
function Profile() {
  return (
    <>
      <img src={user} className="Logo" />
      <a href="#" className="Text">
        Profile
      </a>
    </>
  )
}
function More() {
  return (
    <>
      <img src={more} className="Logo" />
      <a href="#" className="Text">
        More
      </a>
    </>
  )
}
function TweetButton() {
  return (
    <>
      <button className="TweetBtn">Tweet</button>
    </>
  )
}
function Header() {
  return (
    <div className="Header">
      <div>
        <div className="DivLogo">
          <div className="Div">
            <Logo />
          </div>
        </div>
        <div>
          <div className="Div">
            <div className="Home">
              <Home />
            </div>
          </div>
        </div>
        <div className="Div">
          <div className="Explore">
            <Explore />
          </div>
        </div>
        <div className="Div">
          <div className="Notification">
            <Notification />
          </div>
        </div>
        <div className="Div">
          <div className="Message">
            <Messages />
          </div>
        </div>
        <div className="Div">
          <div className="Bookmark">
            <Bookmarks />
          </div>
        </div>
        <div className="Div">
          <div className="List">
            <Lists />
          </div>
        </div>
        <div className="Div">
          <div className="Profile">
            <Profile />
          </div>
        </div>
        <div className="Div">
          <div className="More">
            <More />
          </div>
        </div>
        <div className="Div">
          <div className="DivBtn">
            <TweetButton />
          </div>
        </div>
      </div>

      <div className="Account">
        <div>
          <img src={profile} alt="Profile" className="profile" />
        </div>
        <div className="Edit">
          <div>
            <span>Kailash Patel</span>
          </div>
          <div>
            <span>@username##</span>
          </div>
        </div>
        <div>
          <img src={more} className="ProfileMore" />
        </div>
      </div>
    </div>
  )
}

export default Header
