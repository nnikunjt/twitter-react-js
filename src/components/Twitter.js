import Sidebar from './sidebar/Sidebar'
import Main from './main/Main'
import News from './news/News'
import MessageBox from './message/MessageBox'
import './twitter.css'

function Twiiter() {
    return(
        <div className="container">
            <Sidebar />
            <Main />
            <News />
            <MessageBox/>
        </div>
    )
}

export default Twiiter