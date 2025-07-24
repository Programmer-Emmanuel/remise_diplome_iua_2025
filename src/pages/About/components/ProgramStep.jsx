// components/ui/ProgramStep.jsx
const ProgramStep = ({ number, title, description }) => {
    return (
        <div className="flex items-start space-x-4">
            <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                {number}
            </div>
            <div>
                <h4 className="font-semibold text-gray-800">{title}</h4>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default ProgramStep;
