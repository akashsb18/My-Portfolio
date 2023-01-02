import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white dark:bg-stone-300 dark:bg-gradient-to-b dark:from-stone-300 dark:to-stone-300"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 dark:text-black">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20 dark:text-black ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
                    deserunt illum mollitia officiis qui exercitationem perferendis neque
                    quasi a recusandae necessitatibus tempora iusto! Blanditiis error
                    iste, totam fugiat recusandae rerum laborum perferendis molestiae
                    aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
                    ab mollitia voluptatibus, a nostrum eveniet laborum!
                </p>

                <br />

                <p className="text-xl dark:text-black">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
                    pariatur, vel similique sint, nobis aspernatur ut praesentium
                    explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
                    quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
                    Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
                    magni quo! Eum cupiditate debitis labore.
                </p>
            </div>
        </div>
    );
};

export default About;