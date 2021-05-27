import React from 'react'
import TweetHeader from './TweetHeader'
import TweetBody from './TweetBody.js'
import TweetBottom from './TweetBottom'

function NewMessage() {
    return (
        <div className="new-message">
           <TweetHeader />
           <TweetBody />
           <hr/>
            <TweetBottom /> 
        </div>
    )
}

export default NewMessage
