import { ReactComponent as Post } from "../../assets/PostTweet.svg";

function TweetButton(props) {
    return(
        <div className="nav-link">
            <button className={ props.disable ? "tweetBtn disable" : " tweetBtn "}>
                <div className="post-tweet logo">
                    <Post />
                </div>
                <span>Tweet</span>
            </button>
        </div>
    )
}


export default TweetButton;