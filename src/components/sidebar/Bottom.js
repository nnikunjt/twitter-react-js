import Link from './Link'

import {ReactComponent as Home} from "../../assets/Home.svg";
import {ReactComponent as Notification} from "../../assets/Notification.svg";
import {ReactComponent as Search} from "../../assets/search.svg";
import {ReactComponent as Message} from "../../assets/Message.svg";

const mobileLink = [
    {
      name:"Home",
      logo:<Home/>
    },
    {
      name:"Search",
      logo:<Search />
    },
    {
      name:"Notification",
      logo:<Notification/>
    },
    {
      name:"Message",
      logo:<Message/>
    },
  ]
function Bottom() {
    return (
        <div className="mobile-tabs">
            
        {
          mobileLink.map((d)=> (
            <Link  name={d.name} logo={d.logo} />
          ))
        }
       </div>  
    )
}

export default Bottom

