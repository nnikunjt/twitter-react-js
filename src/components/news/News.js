import './News.css'
import SearchBox from "./SearchBox"
import moreIcon from "./more.svg"


function Cards(){
    const details =[
        {
            title:"Television",
            desc:"Friends: The Reunion Premiere",
            hastag:"#FriendsReunion",
            img:require("./television.jpg")
        },
        {
            title:"Sport",
            desc:"",
            hastag:"#khansirpatna",
            img:""
        },
        {
            title:"Covid-19",
            desc:"COVID-19 vaccination for 18-45 age group is now open",
            hastag:"#Covid19",
            img:""
        },
        {
            title:"Weather",
            desc:"Cyclone Yaas downgraded to a deep depression after damaging thousands of homes",
            hastag:"#CycloneYass",
            img:require("./cyclone.jpg")

        },
        {
            title:"Degital",
            desc:"Private Policy regarding....",
            hastag:"#Facebook#Twitter#IndianGoverment",
            img:""

        },
    ]
    return(
        <div className="news">
            <h2>What's happening </h2>

            {
                details.map((e, i)=>(
                    <Card
                        key={i}
                        title={e.title}
                        desc={e.desc}
                        hastag={e.hastag}
                        img={e.img.default}
                    />
                ))
            }
            <span className="show-more">Show more</span>
        </div>
    )
}


function Card(props){
    
    return(
        <div className="card">
           <div className="img-desc">
                <div>
                    <div>
                        <span className="title">{props.title}</span>
                    </div>
                    <div>
                        <span className="desc">{props.desc}</span>
                    </div>
                </div>
                <div>
                   {(props.img)?<img src={props.img} className="news-img"/>:<img src={moreIcon} className="more-icon"/>}
                </div>
           </div>
            <div>
             <a className="trending">Trending with <span>{props.hastag}</span></a>
            </div>
        </div>
    )
}

function News(props) {
    return(
        <div >
            <div className={ props.disable ? " news-part-2" : "news-part"}>
                <SearchBox/>
                <Cards/>    
            </div>
        </div>
    )
}

export default News