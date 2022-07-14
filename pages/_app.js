import NavBar from '../components/NavBar'
import '../styles/globals.css'
import {motion} from 'framer-motion';
import { useEffect } from 'react'

// MUI
import { ArrowDownward, Email, GitHub, Link as LinkIcon, LinkedIn, Phone } from "@material-ui/icons";

export default function MyApp({ Component, pageProps }) {

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
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div id="content" className='drawer-content scroll-smooth scroll-pt-20'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .5 }}
                >
                    <NavBar />
                    <Component {...pageProps} />
                </motion.div>
            </div>
            {/* DRAWER */}
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <div className='w-full flex flex-col justify-center items-center mb-8'>
                        <div className="avatar mb-4">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="/pics/reuban.png" />
                            </div>
                        </div>
                        <h1 className='font-title text-3xl font-bold'>Reuban Bryenton</h1>
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
