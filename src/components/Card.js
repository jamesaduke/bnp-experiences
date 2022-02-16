import Swimmer from "../images/katie-zaferes.png";
import Star from "../images/star.png";

export default function Card({rating, reviewCount, country, title, price, img}) {
    return (
        <section className="card">
            <img src={img} alt="Swimmer" className="card--image"/>

            <div className="card--stats">
                <img src={Star} alt="Star" className="stats--image"/>
                <span>{rating}</span>
                <span className="gray">{reviewCount}</span>
                <span className="gray">{country}</span>
            </div>
            <p className="card--description"> {title}</p>
            <p className="card--description"><strong>From ${price}</strong>/ person</p>

        </section>
    )
}