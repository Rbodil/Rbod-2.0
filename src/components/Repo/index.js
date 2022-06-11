import React from "react";


function Repo(props) {


    return (
        <div className="p-10" target='_blank' rel='nonreferrer' href={props.shit}>
            <div className=" w-full lg:max-w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                </div>
                <div className="border-r border-b border-l lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <img
                            src={props.image}
                            alt={props.image}
                            className="img-thumbnail mx-1"
                            key={props.image}
                        />
                        <div className="font-bold text-xl mb-2">{props.title}</div>
                        <p>{props.description}</p>
                    </div>
                    <div className="flex items-center pb-2">
                        <div className="text-sm">
                            <p>{props.tech}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Repo;