const SectionTitle = ({ children, size = 30, className='mb-5'}) => {

    return (
        <h2 className={`font-bold text-gray-700 ${className}`} style={{fontSize: `${size}px`}}>{children}</h2>
    );
}

export default SectionTitle;