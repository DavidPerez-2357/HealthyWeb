import React from "react";

const CaloriesMeter = ({ calories, type }) => {
    let levels = {
        low: 0,
        medium: 0,
        high: 0,
        very_high: 0,
    };

    const levelsPerPortion = levels;
    levelsPerPortion.low = 300;
    levelsPerPortion.medium = 600;
    levelsPerPortion.high = 900;
    levelsPerPortion.very_high = 1200;

    const levelsPerTotal = levels;
    levelsPerTotal.low = 1000;
    levelsPerTotal.medium = 2000;
    levelsPerTotal.high = 3000;
    levelsPerTotal.very_high = 4000;

    if (type === 'portion') {
        levels = levelsPerPortion;
    }else {
        levels = levelsPerTotal;
    }

    let percentage = (calories / levels.very_high) * 100;

    if (calories > levels.very_high) {
        percentage = 100;
    }

    return (
        <div className={'w-full max-w-[800px] h-5 pt-0 grid relative grid-cols-4 gap-2'}>
            <div className='relative group bg-green-500 rounded-l h-5 hover:scale-105 transition'
                 title={`0kcal - ${levels.low}kcal`}>
                {/* Texto Low */}
                <div
                    className='absolute top-full mt-2 text-gray-700 sm:flex hidden w-full justify-center group-hover:font-bold'>
                    Low
                </div>
            </div>

            <div className='relative group bg-orange-500 h-5 hover:scale-105 transition'
                 title={`${levels.low}kcal - ${levels.medium}kcal`}>
                {/* Texto Medium */}
                <div
                    className='absolute top-full mt-2 text-gray-700 sm:flex hidden w-full justify-center group-hover:font-bold'>
                    Medium
                </div>
            </div>

            <div className='relative group bg-red-500 h-5 hover:scale-105 transition'
                 title={`${levels.medium}kcal - ${levels.high}kcal`}>
                {/* Texto High */}
                <div
                    className='absolute top-full mt-2 text-gray-700 sm:flex hidden w-full justify-center group-hover:font-bold'>
                    High
                </div>
            </div>

            <div className='relative group bg-gray-800 rounded-r h-5 hover:scale-105 transition'
                 title={`+ ${levels.high}kcal`}>
                {/* Texto Very High */}
                <div
                    className='absolute top-full mt-2 text-gray-700 sm:flex hidden w-full justify-center group-hover:font-bold'>
                    Very High
                </div>
            </div>

            <div className='absolute w-1 h-7 translate -translate-y-1/2 top-1/2 bg-gray-700'
                 style={{left: `${percentage}%`}}></div>

            <div
                className='absolute p-1 rounded text-white translate -translate-x-1/2 -translate-y-1/2 -top-5 bg-gray-700'
                style={{left: `${percentage}%`}}>
                {calories}
            </div>
        </div>


    );
}

export default CaloriesMeter;