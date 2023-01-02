import React from 'react';
import { AiFillInstagram } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

const Footer = () => {

    const socialMedia = [
        {
            id: 1,
            child: (
                <>
                    <AiFillInstagram size={40} />
                </>
            ),
            href: "https://www.instagram.com/akash_sb__/?next=%2F"
        },
        {
            id: 2,
            child: (
                <>
                    <BsTwitter size={30} />
                </>
            ),
            href: "https://twitter.com/AkashSb_18"
        },
        {
            id: 3,
            child: (
                <>
                    <BsFacebook size={30} />
                </>
            ),
            href: "https://www.facebook.com/akash.suklabaidya.31"
        },
    ]

    return (
        <div className="bg-gradient-to-b from-gray-800 to-black w-full h-screen text-white dark:bg-gradient-to-b dark:from-stone-300 dark:to-stone-300">
            <div className="flex items-center justify-center m-auto ">
                <p className="pt-40 text-xl dark:text-black">Thank you for your visit ! </p>
            </div>
            <div className="flex items-center justify-center m-auto pt-4 ">

                {
                    socialMedia.map(({ id, child, href }) => (
                        <a key={id} href={href} className="px-4 hover:scale-110 duration-200 dark:text-gray-700">
                            {child}
                        </a>
                    ))
                }


            </div>



        </div>
    )
}

export default Footer