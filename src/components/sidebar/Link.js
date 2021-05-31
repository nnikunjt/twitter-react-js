function Link(props) {
    return(
        <div className={'nav-link ' + (props.name == null ? '' : 'hover-effect')+" "+(props.name=="Search" ? "Searchbtn" : "") }>
          <div className="logo">
            {props.logo}
          </div>
          <div className={'link ' + (props.name != 'Home' ? '' : 'active')}>{props.name}</div>
        </div>
    )
}

export default Link;