import Sidebar from './sidebar/Sidebar'
import Main from './main/Main'
import News from './news/News'
import Message from './message/MessageBox'

import './twitter.css'

function Twiiter() {
    let test = true
    return(
        <div className="container">
            <Sidebar />
            <Main />
            <News />
            <Message />
        </div>
    )
}

export default Twiiter