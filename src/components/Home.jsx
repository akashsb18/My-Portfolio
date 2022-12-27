import React from 'react';
import HeroImage from "../assests/heroImage.png"
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-5xl text-white font-bold">I'm a Full Stack Developer</h2>
                    <p className="text-gray-400 py-4 ">
                        A paragraph (from Ancient Greek παράγραφος (parágraphos) 'to write beside') is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.
                    </p>
                    <div>
                        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <AiOutlineArrowRight size={15} className="ml-1" />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-50"></img>
                </div>
            </div>
        </div>
    )
}

export default Home