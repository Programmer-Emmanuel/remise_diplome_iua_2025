// components/ui/ContactInfoItem.jsx
const ContactInfoItem = ({ Icon, title, lines = [], iconColor = "text-blue-800", iconBg = "bg-blue-100" }) => {
    return (
        <div className="flex items-start space-x-4">
            <div className={`rounded-full p-3 ${iconBg}`}>
                {Icon &&<Icon className={`w-6 h-6 ${iconColor}`} />}
            </div>
            <div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600">
                    {lines.map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default ContactInfoItem;