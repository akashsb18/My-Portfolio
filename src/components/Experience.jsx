import React from 'react'
import Html from "../assests/html.png"
import Css from "../assests/css.png"
import Pandas from "../assests/Pandas.png"
import Javascript from "../assests/javascript.png"
import react from "../assests/react.png"
import Tailwind from "../assests/tailwind.png"

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: Html,
            title: 'HTML',
            style: "shadow-orange-600",
        },
        {
            id: 2,
            src: Css,
            title: 'CSS',
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: Pandas,
            title: 'PANDAS',
            style: "shadow-gray-200",
        },
        {
            id: 4,
            src: Javascript,
            title: 'JAVASCRIPT',
            style: "shadow-yellow-400",
        },
        {
            id: 5,
            src: react,
            title: 'REACT',
            style: "shadow-blue-700",
        },
        {
            id: 6,
            src: Tailwind,
            title: 'TAILWIND',
            style: "shadow-sky-400",
        },

    ]

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen pb-20 ">

            <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

                <div >

                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Experience</p>

                    <p className="py-6">These are the technologies I've worked with</p>

                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                    {
                        techs.map(({ id, src, title, style }) => (

                            <div key={id} className={`shadow - md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="html" className="w-20 mx-auto"></img>
                                <p className="mt-4">{title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div >
    )
}

export default Experience