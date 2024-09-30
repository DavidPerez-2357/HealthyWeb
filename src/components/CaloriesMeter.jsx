import React from "react";

const CaloriesMeter = ({ calories }) => {
    const levels = {
        low: 300,
        medium: 600,
        high: 900,
        very_high: 1200,
    };

    let percentage = (calories / levels.very_high) * 100;

    if (calories > levels.very_high) {
        percentage = 100;
    }

    return (
        <div className={'w-full max-w-[800px] h-5 pt-0 grid relative grid-cols-4 gap-2 '}>
            <div className='bg-green-500 rounded-l h-5'></div>
            <div className='bg-orange-500 orange h-5'></div>
            <div className='bg-red-500 h-5'></div>
            <div className='bg-gray-800 rounded-r h-5'></div>

            <div className='absolute w-1 h-7 translate -translate-y-1/2 top-1/2 bg-gray-700'
                 style={{left: `${percentage}%`}}></div>

            <div
                className='absolute p-1 rounded text-white translate -translate-x-1/2 -translate-y-1/2 -top-5 bg-gray-700'
                style={{left: `${percentage}%`}}>
                {calories}
            </div>

            <div className='text-gray-700 sm:flex hidden w-full justify-center'>Low</div>
            <div className='text-gray-700 sm:flex hidden w-full justify-center'>Medium</div>
            <div className='text-gray-700 sm:flex hidden w-full justify-center'>High</div>
            <div className='text-gray-700 sm:flex hidden w-full justify-center'>Very high</div>
        </div>

    );
}

export default CaloriesMeter;