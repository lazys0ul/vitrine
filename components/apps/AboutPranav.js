// ...rest of the code remains unchanged...

/**
 * About component displays information about Pranav Priyadarshi, including a brief introduction and interests.
 */
export function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="/images/logos/bitmoji.png" alt="Pranav Priyadarshi Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Pranav Priyadarshi</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">web Developer, AI Enthusiast and Cyber Security Enthusiast!</span></div>
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
    );
}

/**
 * Education component displays the user's educational background and relevant courses.
 */
export function Education() {
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
    );
}

/**
 * Skills component displays Pranav Priyadarshi's technical skills, including languages, tools, frameworks, and libraries.
 */
export function Skills() {
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
    );
}

/**
 * Projects component displays a placeholder message indicating that there are currently no projects to show.
 */
export function Projects() {
    return (
        <div className="text-gray-400 text-center my-8">
            No projects to display yet. Please check back soon!
        </div>
    );
}

/**
 * Resume component displays a placeholder for Pranav Priyadarshi's resume and provides links to GitHub and LinkedIn profiles.
 */
export function Resume() {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="text-xl font-bold mb-4">Resume</div>
            <div className="text-gray-300 mb-4">Coming Soon!</div>
            <div className="flex space-x-4">
                <a href="https://github.com/lazys0ul" target="_blank" rel="noreferrer" className="underline text-blue-400">GitHub</a>
                <a href="https://github.com/lazys0ul" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">GitHub</a>
                <a href="https://linkedin.com/in/pranav0997" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">LinkedIn</a>
            </div>
        </div>
    );
}