import React from 'react'
import Html from "../assests/html.png"
import Css from "../assests/css.png"
import Pandas from "../assests/Pandas.png"
import Javascript from "../assests/javascript.png"
import react from "../assests/react.png"
import Tailwind from "../assests/tailwind.png"
import Cpp from "../assests/cpp.png"

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: Html,
            title: "HTML",
            style: "shadow-orange-500",
            href: "https://www.w3schools.com/html/"
        },
        {
            id: 2,
            src: Css,
            title: "CSS",
            style: "shadow-blue-500",
            href: "https://www.w3schools.com/css/"
        },
        {
            id: 3,
            src: Javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
            href: "https://www.w3schools.com/js/"
        },
        {
            id: 4,
            src: react,
            title: "React",
            style: "shadow-blue-500",
            href: "https://reactjs.org/"
        },
        {
            id: 5,
            src: Tailwind,
            title: "Tailwind",
            style: "shadow-cyan-400",
            href: "https://tailwindcss.com/"
        },
        {
            id: 6,
            src: Pandas,
            title: "Pandas",
            style: "shadow-gray-400",
            href: "https://www.w3schools.com/python/pandas/default.asp"
        },
        {
            id: 7,
            src: Cpp,
            title: "C++",
            style: "shadow-blue-800",
            href: "https://www.w3schools.com/cpp/cpp_intro.asp"

        },
    ];

    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full h-screen dark:bg-gradient-to-b dark:from-stone-300 dark:to-stone-300 font-semibold pt-20"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-screen text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline dark:text-black">
                        Experience
                    </p>
                    <p className="py-6 dark:text-black">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 dark:text-black">
                    {techs.map(({ id, src, title, style, href }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <a href={href}>  <img src={src} alt="" className="w-20 mx-auto" /></a>
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;


