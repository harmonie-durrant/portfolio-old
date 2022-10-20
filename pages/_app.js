import NavBar from '../components/NavBar'
import '../styles/globals.css'
import {motion} from 'framer-motion';
import { useEffect } from 'react'

// MUI
import { ArrowDownward, Email, GitHub, Link as LinkIcon, LinkedIn, Phone } from "@material-ui/icons";

// translation
import { appWithTranslation } from 'next-i18next'

//TRANSLATIONS
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import Head from 'next/head';

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['index', 'common'])),
        }
    }
}

function MyApp({ Component, pageProps }) {
    const { t } = useTranslation();
    useEffect(() => {
        const threeScript = document.createElement('script')
        threeScript.setAttribute('id', 'threeScript')
        threeScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js')
        document.getElementsByTagName("head")[0].appendChild(threeScript)
        return () => {
            if (threeScript) {
                threeScript.remove()
            }
        }
    }, [])

    return (
        <div className='bg-base-100 drawer'>
            <Head>
                {/* Manifest Link */}
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="favicon.ico" />
            </Head>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div id="content" className='drawer-content scroll-smooth scroll-pt-20'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .5 }}
                >
                    <NavBar t={t} />
                    <Component {...pageProps} t={t} />
                </motion.div>
            </div>
            {/* DRAWER */}
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <div className='w-full flex flex-col justify-center items-center mb-8'>
                        <div className="avatar mb-4">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="/pics/reuban.png" alt='Reuban Bryenton Picture' />
                            </div>
                        </div>
                        <p className='font-title text-3xl font-bold'>
                            Reuban Bryenton
                        </p>
                    </div>
                    {/*  DRAWER CONTENT */}
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>                
                    <div className="flex justify-center items-center mt-12">
                        <a target="_blank" href="https://github.com/reuban-bryenton" rel="noopener noreferrer">
                            <GitHub className="h-8 w-auto mx-2" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/reuban-bryenton-920724235" rel="noopener noreferrer">
                            <LinkedIn className="h-8 w-auto mx-2" />
                        </a>
                        <a target="_blank" href="https://links.reubanbryenton.com" rel="noopener noreferrer">
                            <LinkIcon className="h-8 w-auto mx-2" />
                        </a>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default appWithTranslation(MyApp)