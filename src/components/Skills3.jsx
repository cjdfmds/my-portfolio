// I want this component to have a div that will have my skills

import React from 'react';
import './styles.css'; // Make sure to import your CSS file

const Skills = () => {
    return (
        <div className="relative py-10 fixed-container">
            <div className="flex flex-col justify-center items-center mt-10 space-y-8">
                <div className="w-full max-w-4xl flex justify-center items-center">
                   
                    <div className="ml-8">
                        <h2 className="text-2xl font-bold">Skill 1</h2>
                        <p className="text-lg">Description of skill 1.</p>
                    </div>
                </div>
                <div className="w-full max-w-4xl flex justify-center items-center">
                    
                    <div className="ml-8">
                        <h2 className="text-2xl font-bold">Skill 2</h2>
                        <p className="text-lg">Description of skill 2.</p>
                    </div>
                </div>
                <div className="w-full max-w-4xl flex justify-center items-center">
                    
                    <div className="ml-8">
                        <h2 className="text-2xl font-bold">Skill 3</h2>
                        <p className="text-lg">Description of skill 3.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Skills };