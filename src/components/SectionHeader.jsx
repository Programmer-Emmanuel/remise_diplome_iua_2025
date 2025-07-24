const SectionHeader = ({ icon: Icon, title, description }) => {
    return (
        <div className="text-center mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center mb-4">
                {Icon && <Icon className="w-12 h-12 text-blue-800 md:mr-3 mb-2 md:mb-0" />}

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    {title}
                </h1>
            </div>
            {description && (
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;