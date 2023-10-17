// MUI
import { ArrowDownward, Email, GitHub, Link as LinkIcon, LinkedIn, Phone } from "@material-ui/icons";

//ANIMATION FRAMER MOTION
import {motion} from 'framer-motion';

//API/PROJECTS
import data from './api/projects/data.json';

//NEXTJS
import Head from 'next/head';

//REACT
import React from "react";

//TRANSLATIONS
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import ProjectCard from "../components/ProjectCard";

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['index', 'common'])),
        }
    }
}

export default function Home(props) {

    const { t } = useTranslation();

    const projects = data;

    return (
        <>
            <Head>
                <title>Harmonie Durrant | Développeuse</title>
                <meta name="description" content="Harmonie Durrant is a full-stack software engineer who specializes in building web applications. She is currently studying at 42." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="from-primary to-secondary text-primary-content -mt-[4rem] grid place-items-center items-center bg-gradient-to-br pt-20 h-screen overflow-y-hidden">
                <div className="hero-content w-full mobile:max-w-7xl flex-col justify-between gap-y-10 tablet:gap-20">
                    <div className="pl-0 mobile:pl-5 tablet:pl-10 pb-32">
                        <div className="mb-2 py-4 text-center mobile:py-10 tablet:text-left">
                            <motion.div
                                initial={{ x: "-100vw" }}
                                animate={{ x: 0 }}
                                transition={{ duration: 1.5 }}
                            >
                                <h1 className="font-title mb-2 text-4xl font-extrabold mobile:text-5xl tablet:text-7xl">
                                    Harmonie Durrant {props.locale}
                                </h1>
                                <h2 className="font-title text-lg font-extrabold mobile:text-xl tablet:text-2xl">
                                    {t("index:about_short_1")}
                                    <br />
                                    {t("index:about_short_2")}
                                </h2>
                                <div className="mt-8 flex-row mobile:block">
                                    <a href='#about'><button className="btn btn-secondary mr-4 mb-2">
                                        {t("common:about_me")}
                                    </button></a>
                                    <a href='#projects'><button className="btn btn-secondary mr-4 mb-2">
                                        {t("common:see_projects")}
                                    </button></a>
                                    <label htmlFor="contact-modal" className="btn btn-secondary mr-4 mb-2 modal-button">
                                        {t("common:contact_me")}
                                    </label>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ y: "50vh" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <a href='#about' className="text-primary-content text-4xl tablet:text-8xl font-extrabold mb-8">
                            <ArrowDownward className="text-primary-content text-4xl tablet:text-8xl font-extrabold mb-8" />
                        </a>
                    </motion.div>
                </div>
            </div>
            <div className="hero bg-base-100 text-base-content">
                <div className="hero-content flex-col py-16  my-10 text-center h-full">
                    <div id='about' className="w-full maw-w-[1000px] flex flex-col text-left">
                        <h2 className="mb-5 text-4xl tablet:text-5xl font-extrabold capitalize">
                            {t("common:about_me")}
                        </h2>
                        <p className="mb-5 text-2xl tablet:text-3xl font-semibold">
                            {t("common:about_1")}
                        </p>
                        {/* <p className="mb-5 text-2xl tablet:text-3xl font-semibold">
                            {t("common:about_2")}
                        </p> */}
                        <p className="mb-5 text-2xl tablet:text-3xl font-semibold">
                            {t("common:about_3")}
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-base-200 text-base-content py-16 flex flex-col justify-center items-center">
                <h3 className="text-6xl font-bold mb-14">My Projects</h3>
                <div id='projects' className="max-w-[90%] tablet:max-w-[1440px] mx-0 tablet:mx8 grid gap-4 tablet:gap-10 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
                    {
                        projects.map((project, index) => {
                            return(
                                <ProjectCard key={index} project={project} />
                            )
                        })
                    }
                </div>
            </div>

            {/* Modal(s) */}
            <input type="checkbox" id="contact-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box text-center w-full">
                    <h3 className="font-bold text-2xl mb-6">Contact me</h3>
                    <a className="pb-2" href="mailto:h.bryenton2003@gmail.com"><Email /> h.bryenton2003@gmail.com</a>
                    <p className="pb-4"><Phone /> +33 (0) 6 15 07 78 59</p>
                    <div className="flex justify-center items-center">
                        <a target="_blank" href="https://github.com/harmonie-durrant" rel="noopener noreferrer">
                            <GitHub className="h-8 w-auto mx-4" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/harmonie-durrant" rel="noopener noreferrer">
                            <LinkedIn className="h-8 w-auto mx-4" />
                        </a>
                        <a target="_blank" href="https://links.harmoniedurrant.com" rel="noopener noreferrer">
                            <LinkIcon className="h-8 w-auto mx-4" />
                        </a>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="contact-modal" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </>
    )
}