import './News.css'

import searchIcon from "./search-icon.jpg"

function SearchBox(){
    return (
        <div className="searchBox">
            <div>
             <img src={searchIcon} className="search-icon"/>
            </div>
            <div>
                <input type="text" className="txtBox" placeholder="Search Twitter"/>
            </div>
       </div>
    )
}

export default SearchBox