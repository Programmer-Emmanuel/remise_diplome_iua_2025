import { GraduationCap, Award, Users, Calendar, MapPin, Clock } from 'lucide-react';
import SectionHeader from "../../components/SectionHeader";
import ProgramStep from './components/ProgramStep';

const About = () => {
    return(
        <div className="py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    icon={GraduationCap}
                    title="À Propos de l'Événement"
                    description="Découvrez tous les détails de cette journée exceptionnelle"
                />

                {/* Contenu principal */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                    <div className="p-8">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                <Award className="w-10 h-10 text-amber-500 mr-2" />
                                Cérémonie de Remise des Diplômes IUA 2025
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                L'Institut Universitaire d'Abidjan a l'honneur de célébrer l'excellence académique 
                                de ses étudiants lors de cette cérémonie solennelle de remise des diplômes. 
                                Cet événement marque l'aboutissement de plusieurs années d'études et d'efforts 
                                pour nos nouveaux diplômés.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Cette journée exceptionnelle rassemble les diplômés, leurs familles, le corps 
                                enseignant et l'administration pour célébrer ensemble les réussites académiques 
                                et l'entrée de nos étudiants dans la vie professionnelle.
                            </p>
                        </div>

                        {/* Détails de l'événement */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-blue-50 rounded-lg p-6">
                                <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Informations Pratiques
                                </h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-center">
                                        <Clock className="w-4 h-4 mr-2 text-blue-600" />
                                        <span><strong>Date:</strong> 26 Juillet 2025</span>
                                    </li>
                                    <li className="flex items-center">
                                        <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                                        <span><strong>Lieu:</strong> Parc des Expositions d'Abidjan</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Users className="w-4 h-4 mr-2 text-blue-600" />
                                        <span><strong>Participants:</strong> Plus de 1500 diplômés</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-amber-50 rounded-lg p-6">
                                <h3 className="font-semibold text-amber-800 mb-4 flex items-center">
                                    <Award className="w-5 h-5 mr-2" />
                                    Facultés
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• FACULTÉ DES SCIENCES ET TECHNOLOGIES</li>
                                    <li>• FACULTÉ DES DROIT ET SCIENCE POLITIQUE</li>
                                    <li>• FACULTÉ DES ARTS ET DES LETTRES</li>
                                    <li>• FACULTÉ DES SCIENCES HUMAINES ET SOCIALES</li>
                                    <li>• FACULTÉ DES SCIENCES ECONOMIQUES ET DE GESTION</li>
                                </ul>
                            </div>
                        </div>

                        {/* Programme de la journée */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Programme de la Journée</h3>
                            <div className="bg-gray-50 rounded-lg p-6">
                                <div className="space-y-4">
                                    <ProgramStep
                                        number={1}
                                        title="Accueil et Installation"
                                        description="Arrivée des invités et placement en salle"
                                    />
                                    <ProgramStep
                                        number={2}
                                        title="Cérémonie d'Ouverture"
                                        description="Discours d'ouverture du Recteur et des autorités"
                                    />
                                    <ProgramStep
                                        number={3}
                                        title="Remise des Diplômes"
                                        description="Appel nominatif et remise individuelle des diplômes"
                                    />
                                    <ProgramStep
                                        number={4}
                                        title="Photos Officielles"
                                        description="Séances photos par filière et photo générale"
                                    />
                                    <ProgramStep
                                        number={5}
                                        title="Réception"
                                        description="Cocktail de célébration avec les diplômés et leurs familles"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Énoncé de Mission */}
                        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-3">Notre Mission</h3>
                            <p className="leading-relaxed">
                                L'Institut Universitaire d'Abidjan s'engage à former les leaders de demain en 
                                offrant une éducation de qualité supérieure. Cette cérémonie symbolise 
                                l'aboutissement de notre mission éducative et marque le début d'une nouvelle 
                                étape pour nos diplômés dans leur parcours professionnel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;