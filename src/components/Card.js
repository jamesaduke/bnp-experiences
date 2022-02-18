import Star from "../images/star.png";

export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    }else if (props.location === "Online"){
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            {
                badgeText && <div className="card--badge ">{badgeText}</div>
            }
            <img src={`/images/${props.coverImg}`} alt="Swimmer" className="card--image"/>

            <div className="card--stats">
                <img src={Star} alt="Star" className="stats--image"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title"> {props.title}</p>
            <p className="card--price"><strong>From ${props.price}</strong>/ person</p>

        </div>
    )
}