import React from "react";



function Repo(props) {
    return (

        <>
            <div className="rounded-2xl bg-primary flex-column text-center justify-center px-6 mx-4 w-2/4" target='_blank' rel='nonreferrer' href={props.shit}>
                <div className="container rounded-2xl">
                    <div className="mt-1 py-1">
                        <a target='_blank' rel='nonreferrer' href={props.shit}><h2 className="text-5xl font-semibold text-tertiary md:text-xl" >{props.title}</h2></a>
                    </div>
                    <div>
                        <div className="w-full pb-1">
                            <p className="text-secondary text-sm">{props.description}</p>
                            <p className="text-light text-sm">{props.tech}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Repo;