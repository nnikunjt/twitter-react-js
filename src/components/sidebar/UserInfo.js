import {ReactComponent as More} from '../../assets/MoreInfo.svg'
import UserLogo from '../../assets/yashSir.jpg'


function UserInfo(props) {
    return(
        <div className="nav-link userInfo hover-effect">
          <div className="user-logo">
            <img className="userlogo" src={UserLogo} alt="User Logo"></img>
          </div>
          <div className="info">
              <p>{props.name}</p>
              <p  className="user-id">{props.userid}</p>
          </div>
          <div className="logo more">
            <More /> 
          </div>
        </div>
    )
}



export default UserInfo