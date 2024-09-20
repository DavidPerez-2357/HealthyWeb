const SectionTitle = ({ children, size = 30}) => {

    return (
        <h2 className='font-bold text-gray-700 mb-5' style={{fontSize: `${size}px`}}>{children}</h2>
    );
}

export default SectionTitle;