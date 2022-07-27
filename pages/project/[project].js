import React from 'react';
import Head from 'next/head';
import useRouter from 'next/router';
import { getProjectByName } from '../api/projects/[name]';
import Link from 'next/link';

export default function project({ name }) {
    
    const project = getProjectByName(name);

    if(!project) {
        return (<></>)
    }

    return (
        <div>
            <Head>
                <title>Reuban Bryenton | {project.title}</title>
                <meta name="description" content="Reuban Bryenton is a full-stack software engineer who specializes in building web applications. He is currently studying at Epitech." />
                <link rel="icon" href="/fav.png" />
            </Head>
            <div className="hero min-h-screen -mt-[4rem]">
                <div className="hero-overlay"><img className='object-cover opacity-25 h-full w-full' src={project.image} alt='Project Image' /></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{project.title}</h1>
                        <p className="mb-5">{project.description}</p>
                        {
                            project.links.map((link, index) => {
                                return (
                                    <Link key={index} href={link.url}>
                                        <a className="btn btn-primary mr-4">
                                            {link.name}
                                        </a>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};