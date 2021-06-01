import Sidebar from './sidebar/Sidebar'
import Main from './main/Main'
import News from './news/News'
import Message from './message/MessageBox'
import './twitter.css'

import TweetButton from '../components/sidebar/TweetButton'

function Twitter() {
    return(
        <div className="container">
            <Sidebar />
            <Main />
            <News />
            <Message />
            <div className="tweetButton">
             <TweetButton/>
            </div>
        </div>
    )
}

export default Twitter