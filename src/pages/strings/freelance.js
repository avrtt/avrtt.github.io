import { projectsCount } from '../../data/freelance/arrays'
import { currentZoneUTC } from '../../data/freelance/variables';
import { freelanceExperienceString, strUTCOffset, startHoursUTC, endHoursUTC } from "../main/freelance"

export const textMain = {
	general: {
        intro: {
            en: "I'm a full-time freelancer primarily focused on Data Science, offering both regular and one-off services, including project-based work, system maintenance, consulting and teaching. Being in the field since 2020, I have more than <strong>" + freelanceExperienceString + " of freelancing</strong> experience in total, with more than <strong>" + projectsCount + " completed projects</strong> (listed below), as well as other various successful deals. My main areas of expertise are machine learning, data analysis, data collection, statistics, visualization and Python programming, but I'm also competent in web development, video/music post-production and prompt engineering.",
	  	    ru: "",
        },
        spoiler: {
            title: {
                en: "Compact list: Services I offer",
                ru: "",
            },
            extraDesc: {
                en: "This list includes services that I *prefer* to do right now. It's not exhaustive, and we may have a deal on things that goes beyond it.",
                ru: ""
            },
        },
        servicesRedirect: {
            en: "If you need examples and more details, you can go straight to the [page of services](/freelance/services), which describes each type of job in the list above, step-by-step."
        },
        contactMe: {
            en: "Found a related problem? Feel free to contact me, I'll answer any questions you may have. You can reach out directly or choose one of the freelance platforms to make an offer:"
        },
        schedule: {
            en: "Working hours: <b>" + startHoursUTC + "–" + endHoursUTC + "</b> (" + strUTCOffset + "), Mon – Fri"
        },
        tooltip: {
            sameZone: {
                en: "The hours are shown for your local time in the 24-hour notation, based on your browser data. My current time zone is the same as yours."
            },
            diffZone: {
                en: "The hours are shown for your local time in the 24-hour notation, based on your browser data. My current time zone is UTC" + currentZoneUTC + "."
            },
        },
        outro: {
            en: "This page is designed for freelance clients and provides information regarding my freelance work. Please consider exploring it before contacting me for the first time. If you're HR, see the [CV](/cv) page instead."
        },
	},
    projects: {
        heading: {
            en: "# 📌 PROJECTS"
        },
        intro: {
            en: "My projects are organized into category pages. Please click on the category you're interested in to explore a particular list:"
        },
    },
}

export const textServices = {

}