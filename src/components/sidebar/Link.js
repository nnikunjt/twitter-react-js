function Link(props) {
    return(
        <div className={'nav-link ' + (props.name === null ? '' : 'hover-effect')+" "+(props.name==="Search" ? "Searchbtn" : "") }>
          {/* <a href="#"> */}
          <div className={"logo " + (props.name !== 'Home' ? '' : 'active')}>
            {props.logo}
          </div>
          <div className={'link ' + (props.name !== 'Home' ? '' : 'active')}>{props.name}</div>
          {/* </a> */}
        </div>
    )
}

export default Link;