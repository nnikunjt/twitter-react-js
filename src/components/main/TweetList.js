import React from 'react'
import './tweetlist.css'
import Data from '../../data'
import Tweet from './Tweet'

function TweetList() {
    return (
        <div className="tweet-list">
            { 
                Data.map( (tweet,i) => (
                    <Tweet  data={tweet} key={i}/>
                ))
            }
        </div>
    )
}

export default TweetList
