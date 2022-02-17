import Swimmer from "../images/katie-zaferes.png";
import Star from "../images/star.png";

export default function Card({key, title, description, price, coverImg, rating, reviewCount, location, openSpots}) {
    return (
        <section className="card">
            <img src={`/images/${coverImg}`} alt="Swimmer" className="card--image"/>

            <div className="card--stats">
                <img src={Star} alt="Star" className="stats--image"/>
                <span>{rating}</span>
                <span className="gray">({reviewCount})</span>
                <span className="gray">{location}</span>
            </div>
            <p className="card--description"> {title}</p>
            <p className="card--description"><strong>From ${price}</strong>/ person</p>

        </section>
    )
}