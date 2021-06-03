import { useLocation} from 'react-router-dom'

function Link(props) {

  return(
        <div className={'nav-link ' + (props.name === null ? '' : 'hover-effect')+" "+(props.name==="Search" ? "Searchbtn" : "") }>
          {/* <a href="#"> */}
          <a href={"/" + props.name} className={"logo " + 
          ( (((window.location.pathname === '/Home' ||window.location.pathname === '/') && props.name ==="Home" ) || (window.location.pathname === '/Search' && props.name ==="Search"))  ? 'active' : '')}>
            {props.logo} 
          </a>
          <div className={'link ' + (props.name != 'Home' ? '' : 'active')}>{props.name}</div>
          {/* </a> */}
        </div>
    )
}

export default Link;

