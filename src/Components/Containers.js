import React from 'react'
import titleImg from "../Images/titleimg.webp"
import '../App.css'

export default function Containers(props) {
    return (
        <div class=" container container-sm my-2">
            <div class="card d-flex flex-row w-100">
                <img src={titleImg} class="w-50 h-auto" alt="..." style={{ width: "150px", height: "150px" }} />
                <div class="card-body w-70">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <a href={props.link} class="btn btn-primary">{props.linkText}</a>
                </div>
            </div>
        </div>
    )
}
