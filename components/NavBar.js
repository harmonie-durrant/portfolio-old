//COMPONENTS
import ThemeSwitcher from "./ThemeSwitcher";

//NEXT JS
import Link from "next/link";

//ICONS MUI
import { GitHub } from "@material-ui/icons";

//ANIMATION FRAMER MOTION
import {motion} from 'framer-motion';

//REACT
import { useState, useEffect } from "react";

export default function NavBar() {

    /**

    TODO: add language switcher function

    */

    const [navDivClassNames, setNavDivClassNames] = useState("sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 text-primary-content");

    //every second
    useEffect(() => {
        const interval = setInterval(() => {
            
        if (document.getElementById("content").scrollTop > 0) {
            setNavDivClassNames("sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content shadow-sm");
        } else {
            setNavDivClassNames("sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 text-primary-content");
        }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ y: "-50vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 2.5 }}
            className={navDivClassNames}
        ><nav className="navbar w-full">
            <div className='flex flex-1 gap-1 tablet:gap-2'>
                <span className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="Menu">
                    <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button ">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current tablet:h-6 tablet:w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                </span>

                {/* TODO: ADD NAME (h1 or p) */}
                <Link href="/"><button className="font-title text-3xl font-bold">
                    Reuban
                </button></Link>
            </div>


            <div className='flex-0'>

                {/* THEME SWITCHER */}
                <ThemeSwitcher />

                {/* LANGUAGE SWITCHER */}
                <div class="dropdown dropdown-end">
                <div tabIndex="0" class="btn btn-ghost gap-1 normal-case">
                    <svg class="inline-block h-4 w-4 fill-current tablet:h-5 tablet:w-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                        <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z" />
                        <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z" />
                    </svg>
                    <svg width="12px" height="12px" class="ml-1 hidden h-3 w-3 fill-current opacity-60 mobile:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
                    </svg>
                </div>
                    <ul tabIndex="0" class="dropdown-content menu p-2 shadow rounded-box w-52 bg-base-200 text-base-content">
                        <li><button class="flex">
                            <img loading="lazy" width="20" height="20" alt="English" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ec-1f1e7.svg" />
                            <span class="flex flex-1 justify-between">English</span>
                        </button></li>
                        <li><button class="flex">
                            <img loading="lazy" width="20" height="20" alt="Español" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ea-1f1f8.svg" />
                            <span class="flex flex-1 justify-between">Español</span>
                        </button></li>
                        <li><button class="flex">
                            <img loading="lazy" width="20" height="20" alt="Français" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Twemoji_1f1eb-1f1f7.svg/512px-Twemoji_1f1eb-1f1f7.svg.png" />
                            <span class="flex flex-1 justify-between">Français</span>
                        </button></li>
                    </ul>
                </div>

                {/* DOWNLOAD CV */}
                <a target="_blank" href="/downloads/cv.pdf" rel="noopener noreferrer">
                    <button class="hidden tablet:inline-flex btn btn-ghost m-1">Download CV</button>
                </a>

                {/* GITHUB */}
                <a target="_blank" href="https://github.com/reuban-bryenton" class="hidden mobile:inline-flex btn btn-ghost gap-1 normal-case" rel="noopener noreferrer">
                    <GitHub />
                </a>
            </div>
        </nav></motion.div>
    )
}
