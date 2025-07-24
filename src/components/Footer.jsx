import { Mail, Phone, MapPin, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import IuaLogo from '../assets/images/IuaLogo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:space-x-3 mb-6">
              <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br bg-white rounded-full flex items-center justify-center overflow-hidden self-start sm:self-auto">
                <img
                    src={IuaLogo}
                    alt="IUA"
                    className="w-16 h-16 sm:w-16 sm:h-16 object-contain"
                />
              </div>
              <div className="sm:flex-1">
                <h2 className="text-xl sm:text-2xl font-bold leading-tight">Institut Universitaire d'Abidjan</h2>
                <p className="text-blue-300 text-sm sm:text-base">Remise des Diplômes 2025</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Célébrant l'excellence académique et préparant les leaders de demain. 
              Retrouvez tous les moments forts de notre cérémonie de remise des diplômes 
              du 26 juillet 2025.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/iua.abidjan/" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@iua8147" className="bg-red-500 hover:bg-red-600 p-2 rounded-full transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://ci.linkedin.com/school/institut-universitaire-d-abidjan/" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-gray-400" />
                <span className="text-sm text-gray-300">II Plateaux, 7ème Tranche, Rue L40, Carrefour Cascades</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">+225 07 07 23 18 62 <br /> +225 27 22 42 22 65</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">info@iua.ci</span>
              </div>
            </div>
          </div>

          {/* Event Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Événement</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong>Date:</strong> 26 Juillet 2025</p>
              <p><strong>Lieu:</strong> Parc des Expositions, Abidjan</p>
              <p><strong>Diplômés:</strong> 1500+</p>
              <p><strong>Photos:</strong> 1000+</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <p className="text-sm text-gray-400">
              © 2025 Institut Universitaire d'Abidjan. Tous droits réservés.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2 md:gap-6 mt-4 md:mt-0 text-xs sm:text-sm">
                <p className="text-nowrap">Réalisé par :</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 md:gap-6">
                    <span className="text-gray-400 hover:text-white transition-colors text-nowrap">
                      Kouaho Ékissi David Emmanuel
                    </span>
                    <span className="hidden sm:inline text-nowrap">&</span>
                    <span className="text-gray-400 hover:text-white transition-colors text-nowrap">
                      Kohou Monneca Ange Éloge
                    </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;