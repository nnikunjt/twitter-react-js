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
import {ReactComponent as Search} from "../../assets/search.svg";

import Link from './Link'
import TweetButton from './TweetButton'
import UserInfo from './UserInfo' 
import Bottom from "./Bottom";
const data = [
  {
    name:"Home",
    logo:<Home/>
  },
  {
    name:"Search",
    logo:<Search />
  },
  {
    name:"Explore",
    logo:<Explore/>
  },
  {
    name:"Notification",
    logo:<Notification/>
  },
  {
    name:"Message",
    logo:<Message/>
  },
  {
    name:"Bookmarks",
    logo:<Bookmark/>
  },
  {
    name:"Lists",
    logo:<Lists/>
  },
  {
    name:"Profile",
    logo:<Profile/>
  },
  {
    name:"More",
    logo:<More/>
  },
]



function Sidebar() {
  return (
    <>
      <div className="main-block">  
        <div className="sidebar">
        
        <Link logo={<TwitterLogo />} />
        {
          data.map((d)=> (
            <Link  name={d.name} logo={d.logo} />
          ))
        }
        {/* Mobile Tab  */}
        
        <TweetButton />
        
       </div>
        
        <div>
          <UserInfo name="Yash Desai" userid="@yashd902" logo={<Profile />} />
        </div>

      </div>
      <Bottom />     
       
    </>
      
  );
}

export default Sidebar;
