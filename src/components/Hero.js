import React from "react";
import PhotoGrid from "../images/photo-grid.png";


export default function Hero(){
    return (
        <section className="hero">
            <img src={ PhotoGrid } alt="grid" className="hero--photo"/>

            <div className="hero--content">
                <h3 className="hero--title">
                    Online Experiences
                </h3>
                <p className="hero--description">
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </section>
    )
}
