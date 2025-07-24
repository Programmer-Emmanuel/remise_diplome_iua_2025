import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import IuaLogo from '../assets/images/IuaLogo.jpg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { id: 'home', label: 'Accueil', path: '/' },
        { id: 'about', label: 'À propos', path: '/about' },
        { id: 'gallery', label: 'Galerie', path: '/gallery' },
        { id: 'contact', label: 'Contact', path: '/contact' }
    ];

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center min-h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2 md:space-x-3">
                        <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br bg-white rounded-full flex items-center justify-center overflow-hidden">
                            <img
                                src={IuaLogo}
                                alt="IUA"
                                className="w-10 h-10 md:w-16 md:h-16 object-contain"
                            />
                        </div>
                        <div>
                            <h2 className="text-sm md:text-xl font-bold text-blue-800 leading-tight">Institut Universitaire d'Abidjan</h2>
                            <p className="text-xs md:text-base text-blue-500">Remise des Diplômes 2025</p>
                        </div>
                    </div>

                    {/* Navigation Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                className={({ isActive }) =>
                                    `text-md font-medium transition-colors duration-200 ${
                                        isActive
                                        ? 'text-blue-800 border-b-2 border-amber-500 pb-1'
                                        : 'text-gray-700 hover:text-blue-800'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Menu Mobile */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                        <X className="w-6 h-6 text-gray-700" />
                        ) : (
                        <Menu className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>

                {/* Menu Mobile Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block w-full text-left px-4 py-2 text-sm font-medium ${
                                        isActive
                                        ? 'text-blue-800 bg-blue-50'
                                        : 'text-gray-700 hover:text-blue-800 hover:bg-gray-50'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;