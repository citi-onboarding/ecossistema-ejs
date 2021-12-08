import React from "react";
import './SocialMediaButton.css'

const SocialMediaButton = (props) => {
    return (
        <div class="redesocial">
            <a href={props.link}>
                <img src={props.image} alt={props.imagedescription}/>
            </a>
        </div>
    )
}
export default SocialMediaButton;