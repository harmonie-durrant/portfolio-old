import React from 'react'

function ProjectCard({ project }) {
    return (
        <>
            <div className="card bg-base-100 hover:bg-base-300 shadow-xl">
                <figure><img src={project.image} alt={project.name} className="max-h-80 w-[100%]" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="card-actions justify-end">
                        {
                            project.links.map((data, id) => {
                                return (
                                    <a key={id} href={data.url}>
                                        <button className="btn btn-primary">{data.name}</button>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard