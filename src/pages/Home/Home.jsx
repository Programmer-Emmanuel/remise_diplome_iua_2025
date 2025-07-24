import { useState, useEffect } from 'react';
import { Calendar, MapPin, Camera } from 'lucide-react';
import StatItem from "./components/StatItem";
import SectionHeader from "../../components/SectionHeader";
import { NavLink } from 'react-router-dom';

import iua1 from '../../assets/images/iua1.jpeg';
import parc from '../../assets/images/parc.jpeg';
import iua2 from '../../assets/images/iua2.jpeg';


const heroImages = [
    iua1,
    parc, 
    iua2
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen">
            {/* Section Hero */}
            <section className="relative h-screen overflow-hidden">
                {/* Affichage slides */}
                <div className="absolute inset-0">
                    {heroImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                        <img
                            src={image}
                            alt={`Graduation ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center text-white max-w-4xl px-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Remise des Diplômes
                            <span className="block text-amber-400">IUA 2025</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                            Célébrons ensemble l'excellence académique et les nouveaux diplômés 
                            de l'Institut Universitaire d'Abidjan
                        </p>
                        
                        {/* Event Info */}
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-10">
                            <div className="flex items-center space-x-2">
                                <Calendar className="w-6 h-6 text-amber-400" />
                                <span className="text-lg font-medium">26 Juillet 2025</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-6 h-6 text-amber-400" />
                                <span className="text-lg font-medium">Parc des Expositions, Abidjan</span>
                            </div>
                        </div>

                        <NavLink
                            to="/gallery"
                            
                        >
                            <button
                                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <Camera className="w-6 h-6 inline mr-2" />
                                Découvrir la Galerie
                            </button>
                        </NavLink>
                    </div>
                </div>

                {/* Slides Indications */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentSlide ? 'bg-amber-400 w-8' : 'bg-white/50 hover:bg-white/75'
                            }`}
                        />
                    ))}
                </div>
            </section>

            {/* Section Statistique */}
            <section className="py-16 bg-gradient-to-b from-blue-800 to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <StatItem icon="users" value="1500+" label="Nouveaux Diplômés" />
                        <StatItem icon="camera" value="1000+" label="Photos Capturées" />
                        <StatItem icon="calendar" value="1" label="Journée Mémorable" />
                    </div>
                </div>
            </section>

            {/* Section Prévisualisation */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <SectionHeader

                        title="Revivez les moments forts"
                        description="Découvrez notre collection complète de photos capturant l'émotion, la fierté et la joie de cette cérémonie exceptionnelle"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="group relative overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={iua1}
                                alt="Cérémonie"
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                                <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-semibold">Cérémonie Officielle</h3>
                                <p className="text-sm opacity-75">Moments solennels</p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={parc}
                                alt="Discours"
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                                <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-semibold">Discours Inspirants</h3>
                                <p className="text-sm opacity-75">Paroles mémorables</p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={iua2}
                                alt="Diplômés"
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                                <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-semibold">Nos Diplômés</h3>
                                <p className="text-sm opacity-75">Fierté et réussite</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <NavLink
                        to="/gallery"
                        
                    >
                        <button
                            className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-medium transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Voir Toutes les Photos
                        </button>
                    </NavLink>
                </div>
            </section>
        </div>
    );
};

export default Home;