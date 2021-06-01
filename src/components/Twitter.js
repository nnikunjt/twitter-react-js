import Sidebar from './sidebar/Sidebar'
import Main from './main/Main'
import News from './news/News'
import Message from './message/MessageBox'
import './twitter.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import TweetButton from '../components/sidebar/TweetButton'

function Twitter() {
    return(
        <div className="container">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Sidebar />
                        <Main />
                        <News  />
                        <Message />
                    </Route>
                    <Route path="/Search">
                        <News disable={true} />
                    </Route>
                </Switch>
            </Router>          
            <div className="tweetButton">
             <TweetButton disable={true}/>
            </div>
        </div>
    )
}

export default Twitter