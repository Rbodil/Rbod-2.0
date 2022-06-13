import React from "react";



function Repo(props) {
    /*{props.image} target='_blank' rel='nonreferrer' href={props.shit} {props.tech} {props.title} {props.description}
    

    */

    return (
        <div className="flex-row space-around w-3/5 bg-primary my-2 px-10 text-center">
            <div className="p-2">
                <img
                    className="img-thumbnail"
                    title={props.image}
                    src={props.image}
                    alt={props.image}
                    key={props.image}
                    target='_blank' rel='nonreferrer' href={props.shit}
                ></img>
            </div>
            <div className="mx-auto">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p>{props.tech}</p>
            </div>
        </div>



    )
}

export default Repo;