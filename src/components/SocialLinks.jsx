import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from "react-icons/gr";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn<FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/akash-suklabaidya-435aa5227/",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                    GitHub<FaGithub size={30} />
                </>
            ),
            href: "https://github.com/akashsb18",
        },
        {
            id: 3,
            child: (
                <>
                    Mail<GrMail size={30} />
                </>
            ),
            href: "mailto:akashsuklabaidya593@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume<BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/Resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ]

    return (

        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>

                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={`bg-gray-600 flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md ${style}`} >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <>
                                {child}
                            </>
                        </a>
                    </li>
                ))}



            </ul>
        </div >
    )
}

export default SocialLinks