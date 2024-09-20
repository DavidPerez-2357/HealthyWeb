const InfoCard = ({ title, children, className = '' }) => {
    return (
        <fieldset className={`bg-white border-2 shadow-gray-300 border-primary-500 p-5 rounded-lg shadow-md ${className}`}>
            <legend className="text-primary-700 text-xl font-bold text-left px-2 mb-0">{title}</legend>
            <p className="text-gray-600 leading-relaxed text-justify">
                {children}
            </p>
        </fieldset>
    );
};

export default InfoCard;