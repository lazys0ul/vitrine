import React, { Component } from 'react';
import $ from 'jquery';
import ReactGA from 'react-ga4';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaInstagram, FaDiscord, FaRegCopy, FaGithub } from 'react-icons/fa';

export class Gedit extends Component {

    constructor() {
        super();
        this.state = {
            sending: false,
        }
    }

    componentDidMount() {
        emailjs.init(process.env.NEXT_PUBLIC_USER_ID);
    }

    sendMessage = async () => {
        let name = $("#sender-name").val();
        let subject = $("#sender-subject").val();
        let message = $("#sender-message").val();

        name = name.trim();
        subject = subject.trim();
        message = message.trim();

        let error = false;

        if (name.length === 0) {
            $("#sender-name").val('');
            $("#sender-name").attr("placeholder", "Name must not be Empty!");
            error = true;
        }

        if (message.length === 0) {
            $("#sender-message").val('');
            $("#sender-message").attr("placeholder", "Message must not be Empty!");
            error = true;
        }
        if (error) return;

        this.setState({ sending: true });

        const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const templateParams = {
            'name': name,
            'subject': subject,
            'message': message,
        }

        emailjs.send(serviceID, templateID, templateParams).then(() => {
            this.setState({ sending: false });
            $("#close-gedit").trigger("click");
        }).catch((err) => {
            this.setState({ sending: false });
            alert("Failed to send message: " + (err && err.text ? err.text : "Unknown error"));
            console.error("EmailJS send error:", err);
        })

        ReactGA.event({
            category: "Send Message",
            action: `${name}, ${subject}, ${message}`
        });

    }

    render() {
        const contactInfo = [
            {
                label: 'Email',
                value: 'ronakmeena9999@gmail.com',
                icon: <FaEnvelope className="text-blue-500 mr-3 text-2xl" />,
                link: 'mailto:ronakmeena9999@gmail.com',
                color: 'text-blue-400',
            },
            {
                label: 'Instagram',
                value: 'ronakslore',
                icon: <FaInstagram className="text-pink-500 mr-3 text-2xl" />,
                link: 'https://instagram.com/ronakslore',
                color: 'text-pink-400',
            },
            {
                label: 'Discord',
                value: 'aka.ronak',
                icon: <FaDiscord className="text-indigo-400 mr-3 text-2xl" />,
                link: 'https://discord.com/users/aka.ronak',
                color: 'text-indigo-300',
            },
            {
                label: 'GitHub',
                value: 'SpideyHere01',
                icon: <FaGithub className="text-gray-300 mr-3 text-2xl" />,
                link: 'https://github.com/SpideyHere01',
                color: 'text-gray-300',
                isGithub: true,
            },
        ];

        const handleCopy = (text) => {
            navigator.clipboard.writeText(text);
            alert('Copied: ' + text);
        };

        return (
            <div className="w-full h-full flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white select-none">
                <div className="flex items-center justify-between w-full bg-ub-gedit-light bg-opacity-60 border-b border-t border-blue-400 text-lg shadow-sm">
                    <span className="font-bold ml-2 tracking-wide">Contact Me</span>
                </div>
                <div className="flex-grow flex flex-col justify-center items-center bg-transparent">
                    <div className="w-full max-w-md p-8 rounded-2xl bg-gray-800 bg-opacity-90 border border-blue-500 shadow-xl mt-8">
                        <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-300 tracking-wide drop-shadow">Let's Connect!</h2>
                        <div className="space-y-5">
                            {contactInfo.map((info, idx) => (
                                <div
                                    key={info.label}
                                    className="flex items-center justify-between bg-gray-900 bg-opacity-80 rounded-xl px-5 py-4 transition-all duration-200 group border border-gray-700 hover:border-blue-400 shadow-sm"
                                >
                                    <div className="flex items-center">
                                        {info.icon}
                                        <a
                                            href={info.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`ml-1 font-semibold ${info.color} hover:underline text-lg transition-all duration-150 group-hover:scale-105`}
                                        >
                                            {info.isGithub ? `@${info.value}` : info.value}
                                        </a>
                                    </div>
                                    <button
                                        onClick={() => handleCopy(info.value)}
                                        className="ml-3 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                        title="Copy"
                                    >
                                        <FaRegCopy />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gedit;

export const displayGedit = () => {
    return <Gedit> </Gedit>;
}
