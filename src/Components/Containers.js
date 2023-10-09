import React from 'react'
import titleImg from "../Images/titleimg.webp"
import '../App.css'

export default function Containers(props) {
    return (
        <div class=" container container-sm my-2 d-inline-block flex-wrap justify-content-evenly gap-4 mw-100">
            <div class="card">
                <img src={titleImg} class="img-thumbnail" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <a href={props.link} class="btn btn-primary">{props.linkText}</a>
                </div>
            </div>
        </div>
    )
}
