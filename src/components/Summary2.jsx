// i want this component to have a div that will have my professional summary

import React from 'react';
import './styles.css'; // Make sure to import your CSS file

const Summary = () => {
    return (
        <div className="relative py-10 fixed-container " >
            <div className=" justify-center items-center mt-10 ">
                <div className="flex-col md:flex-row items-center md:items-start">
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                      
                    </div>
                    <div className=" flex flex-col items-center md:items-start mt-8 md:mt-0 md:ml-12 ">
                        <h1 className="text-4xl font-bold">Chris Fernando</h1>
                        <p className="text-xl">Web Developer</p>
                        <p className="text-xl mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quisquam, quod.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Summary
 };