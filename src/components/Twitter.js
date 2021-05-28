import Sidebar from './sidebar/Sidebar'
import Main from './main/Main'
import News from './news/News'
import './twitter.css'

function Twiiter() {
    return(
        <div className="container">
            <Sidebar />
            <Main />
            <News /> 
        </div>
    )
}

export default Twiiter