import './News.css'
import SearchBox from "./SearchBox"


function Cards(){
    const details =[
        {
            title:"Television",
            desc:"Friends: The Reunion Premiere",
            hastag:"#FriendsReunion"
        },
        {
            title:"Sport",
            desc:"",
            hastag:"#khansirpatna"
        },
        {
            title:"Covid-19",
            desc:"COVID-19 vaccination for 18-45 age group is now open",
            hastag:"#Covid19"
        },
        {
            title:"Weather",
            desc:"Cyclone Yaas downgraded to a deep depression after damaging thousands of homes",
            hastag:"#CycloneYass"
        },
        {
            title:"Degital",
            desc:"Private Policy regarding....",
            hastag:"#Facebook#Instagram#Twitter#IndianGoverment#India"
        },
    ]
    return(
        <div>
            <h2>What's happing</h2>

            {
                details.map((e, i)=>(
                    <Card
                        key={i}
                        title={e.title}
                        desc={e.desc}
                        hastag={e.hastag}
                    />
                ))
            }
        </div>
    )
}
function Card(props){
    return(
        <div className="card">
            <span>{props.title}</span>
            <p>{props.desc}</p>
            <a>Treding with <span>{props.hastag}</span></a>
        </div>
    )
}

function News() {
    return(
        <div className="news-part">
            <SearchBox/>
            {/* <Card/> */}
            <Cards/>
               
       </div>
    )
}

export default News