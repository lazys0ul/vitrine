import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutPranav extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about ronak" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ronak' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ronak' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ronak' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ronak's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
                <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex' >
                    <a href="https://github.com/lazys0ul" target="_blank" rel="noreferrer noopener" className="w-full h-full flex items-center justify-center bg-gray-800 rounded hover:bg-gray-700 transition-colors">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" className="w-5 h-5 mr-2" />
                        <span className="text-white font-semibold">My GitHub</span>
                    </a>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutPranav;

export const displayAboutPranav = () => {
    return <AboutPranav />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Ronak Meena Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Ronak Meena</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Full Stack Developer & AI Enthusiast!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">IMSc Mathematics and Computing student</span> at BIT Mesra. I love building AI-powered tools and using technology to boost productivity and creativity.</li>
                <li className=" mt-3 list-building"> I enjoy exploring new technologies, building apps, and automating workflows.</li>
                <li className=" mt-3 list-time"> When not coding, I travel, learn new things, and experiment with productivity hacks.</li>
                <li className=" mt-3 list-star"> My passion is in AI, machine learning, and making life easier with code!</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        BIT Mesra
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2024 - Present</div>
                    <div className=" text-sm md:text-base">IMSc Maths and Computing</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Self-Learning & Online Courses
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">Ongoing</div>
                    <div className=" text-sm md:text-base">Skills: TypeScript, C++, C, React Native, TensorFlow, Discord.js, Chrome Extensions, AI Productivity, and more.</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I love learning and working with a wide variety of programming languages, frameworks, and AI/ML tools.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>My main focus: <strong className="text-ubt-gedit-orange">Full Stack Development, AI/ML, and Productivity Automation</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used:</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=ffffff" alt="ronak typescript" />
                        <img className="m-1" src="https://img.shields.io/badge/-C++-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="ronak c++" />
                        <img className="m-1" src="https://img.shields.io/badge/-C-00599C?style=flat&logo=c&logoColor=white" alt="ronak c" />
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-F7DF1C?style=flat&logo=javascript&logoColor=000000" alt="ronak javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="ronak python" />
                        <img className="m-1" src="https://img.shields.io/badge/-Git-F05032?style=flat&logo=git&logoColor=ffffff" alt="ronak git" />
                        <img className="m-1" src="https://img.shields.io/badge/-Rust-000000?style=flat&logo=rust&logoColor=white" alt="ronak rust" />
                        <img className="m-1" src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=000000" alt="ronak firebase" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="ronak react" />
                        <img className="m-1" src="https://img.shields.io/badge/-React_Native-20232A?style=flat&logo=react&logoColor=61DAFB" alt="ronak react native" />
                        <img className="m-1" src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=ffffff" alt="ronak node.js" />
                        <img className="m-1" src="https://img.shields.io/badge/-TensorFlow-FF6F00?style=flat&logo=tensorflow&logoColor=ffffff" alt="ronak tensorflow" />
                        <img className="m-1" src="https://img.shields.io/badge/-Discord.js-7289DA?style=flat&logo=discord&logoColor=ffffff" alt="ronak discord.js" />
                        <img className="m-1" src="https://img.shields.io/badge/-Chrome_Extensions-4285F4?style=flat&logo=google-chrome&logoColor=ffffff" alt="ronak chrome extensions" />
                        <img className="m-1" src="https://img.shields.io/badge/-Next.js-000000?style=flat&logo=next.js&logoColor=ffffff" alt="ronak next.js" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span>AI Productivity, Automation, Polymath, Tech Explorer, Lifelong Learner, Traveler</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
       
    ];

    const tag_colors = {
        "discord.js": "indigo-500",
        "node.js": "green-600",
        "react-native": "purple-500",
        "typescript": "blue-500",
        "c++": "blue-700",
        "ai": "yellow-600",
        "chrome-extension": "yellow-400",
        "javascript": "yellow-300",
        "next.js": "purple-600",
        "tailwindcss": "blue-300"
    };

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <div className="flex justify-center my-4">
                <img src="./images/ichigo.png" alt="Ichigo Kurosaki" className="max-w-full md:max-w-lg rounded shadow-lg" />
            </div>
            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=SpideyHere01&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                return <span key={index} className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain] || 'gray-400'} text-${tag_colors[domain] || 'gray-400'} m-1 rounded-full`}>{domain}</span>
                                            })
                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="text-xl font-bold mb-4">Resume</div>
            <div className="text-gray-300 mb-4">Coming Soon!</div>
            <div className="flex space-x-4">
                <a href="https://github.com/lazys0ul" target="_blank" rel="noreferrer" className="underline text-blue-400">GitHub</a>
                <a href="https://linkedin.com/in/pranav0997" target="_blank" rel="noreferrer" className="underline text-blue-400">LinkedIn</a>
            </div>
        </div>
    )
}