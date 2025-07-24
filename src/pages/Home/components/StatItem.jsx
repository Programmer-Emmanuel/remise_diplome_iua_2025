// components/StatItem.jsx
import { Users, Camera, Calendar } from "lucide-react";

const iconsMap = {
    users: Users,
    camera: Camera,
    calendar: Calendar,
};

const StatItem = ({ icon = "users", value, label }) => {
    const IconComponent = iconsMap[icon];

    return (
        <div className="group">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <IconComponent className="w-10 h-10 text-amber-400" />
            </div>
            <h3 className="text-3xl font-bold mb-2">{value}</h3>
            <p className="text-blue-100">{label}</p>
        </div>
    );
};

export default StatItem;
