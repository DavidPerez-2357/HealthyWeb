
const Header = ({ children, image, bg_color }) => {
    const gradientFromColor = {
        orange: 'from-orange-500',
        green: 'from-primary-500',
    };

    return (
        <header
            className={`h-[200px] flex justify-center items-center relative w-100 overflow-hidden bg-gradient-to-t rounded-b-xl shadow-gray-400 shadow-md ${
                gradientFromColor[bg_color] || 'from-primary-500'
            } to-transparent`}
        >
            <img src={image} alt={'Vegetables'} className='absolute -z-10 w-full'/>
            <h1 className='main_title text-white'>{children}</h1>
        </header>
    )
};

export default Header;