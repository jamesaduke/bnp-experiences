import Swimmer from "../images/katie-zaferes.png";
import Star from "../images/star.png";

export default function Card() {
    return (
        <section className="card">
            <img src={Swimmer} alt="Swimmer" className="card--image"/>

            <div className="card--stats">
                <img src={Star} alt="Star" className="stats--image"/>
                <span>5.0</span>
                <span>(6)</span>
                <span>USA</span>
            </div>
            <p className="card--description"> Life Lessons with Kate Zaferes</p>
            <p className="card--description"><strong>From $136</strong>/ person</p>

        </section>
    )
}