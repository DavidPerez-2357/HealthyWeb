import React from "react";

const CaloriesMeter = ({ calories }) => {
    const levels = {
        low: 400,
        medium: 700,
        high: 1000
    };

    let percentage = (calories / levels.high) * 100;
    const caloriesRounded = Math.round(calories);

    if (calories > levels.high) {
        percentage = 100;
    }

    return (
        <div className={'w-full max-w-[700px] h-5 pt-0 grid relative grid-cols-3 gap-2 '}>
            <div className='bg-green-500 rounded-l h-5'></div>
            <div className='bg-orange-500 orange h-5'></div>
            <div className='bg-red-500 rounded-r h-5'></div>

            <div className='absolute w-1 h-7 translate -translate-y-1/2 top-1/2 bg-gray-700'
                 style={{left: `${percentage}%`}}></div>

            <div
                className='absolute p-1 rounded text-white translate -translate-x-1/2 -translate-y-1/2 -top-5 bg-gray-700'
                style={{left: `${percentage}%`}}>
                {caloriesRounded}
            </div>

            <div className='text-gray-700 sm:flex hidden w-full justify-center'>Low</div>
            <div className='text-gray-700 sm:flex hidden w-full justify-center'>Recommended</div>
            <div className='text-gray-700 sm:flex hidden w-full justify-center'>High</div>
        </div>

    );
}

export default CaloriesMeter;