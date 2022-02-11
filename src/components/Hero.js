import React from "react";
import PhotoGrid from "../images/photo-grid.png";


export default function Hero(){
    return (
        <section className="hero">
            <img src={ PhotoGrid } alt="grid" className="hero--photo"/>

            <h3 className="hero--title">
                Online Experiences
            </h3>
            <p className="hero--description">
                In life there will be road blocks but we will over come it.
            </p>
        </section>
    )
}
