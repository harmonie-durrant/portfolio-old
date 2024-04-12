// MUI
import { ArrowDownward, Email, GitHub, Link as LinkIcon, LinkedIn, Phone } from "@material-ui/icons";

//ANIMATION FRAMER MOTION
import {motion} from 'framer-motion';

//TRANSLATIONS
import { useTranslation } from "next-i18next";

export default function HeroSection({title, about_1, about_2, next_id}) {
    
    const { t } = useTranslation();

    return (
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
                                {title}
                            </h1>
                            <h2 className="font-title text-lg font-extrabold mobile:text-xl tablet:text-2xl">
                                {about_1}
                                <br />
                                {about_2}
                            </h2>
                            <div className="mt-8 flex-row mobile:block">
                                <a href='/#about'><button className="btn btn-secondary mr-4 mb-2">
                                    {t("common:about_me")}
                                </button></a>
                                <a href='/#projects'><button className="btn btn-secondary mr-4 mb-2">
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
                    <a href={next_id} className="text-primary-content text-4xl tablet:text-8xl font-extrabold mb-8">
                        <ArrowDownward className="text-primary-content text-4xl tablet:text-8xl font-extrabold mb-8" />
                    </a>
                </motion.div>
            </div>
        </div>
    )
}