import SectionHeader from "../../components/SectionHeader";
import { Mail, MapPin, Phone, Globe, Clock } from "lucide-react";
import ContactInfoItem from "./components/ContactInfoItem";
import ContactForm from "./components/ContactForm";
import ParticlesBackground from "../../components/ParticlesBackground";

const Contact = () => {
    return(
        <div className="py-8">
            <ParticlesBackground />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <SectionHeader
                    icon={Mail}
                    title="Contactez-Nous"
                    description="Une question sur l'événement ou besoin d'aide ? N'hésitez pas à nous contacter"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Informations de Contact
                            </h2>

                            <div className="space-y-6">
                                <ContactInfoItem 
                                    Icon={MapPin}
                                    title="Adresse"
                                    lines={[
                                        "Institut Universitaire d'Abidjan",
                                        "II Plateaux, 7ème Tranche, Rue L40,",
                                        "Carrefour Cascades",
                                    ]}
                                    iconColor="text-blue-800"
                                    iconBg="bg-blue-100"
                                />

                                <ContactInfoItem
                                    Icon={Phone}
                                    title="Téléphone"
                                    lines={["+225 07 07 23 18 62", "+225 27 22 42 22 65"]}
                                    iconColor="text-green-800"
                                    iconBg="bg-green-100"
                                />

                                <ContactInfoItem
                                    Icon={Mail}
                                    title="Email"
                                    lines={["info@iua.ci"]}
                                    iconColor="text-purple-800"
                                    iconBg="bg-purple-100"
                                />

                                    <ContactInfoItem
                                    Icon={Globe}
                                    title="Site Web"
                                    lines={["www.iuaci.org"]}
                                    iconColor="text-amber-800"
                                    iconBg="bg-amber-100"
                                />

                                <ContactInfoItem
                                    Icon={Clock}
                                    title="Horaires"
                                    lines={["Lundi - Vendredi: 8h00 - 17h00", "Samedi: 8h00 - 12h00"]}
                                />
                            </div>
                        </div>

                        {/* Infos spécifiques à l'événement */}
                        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-4">Information Événement</h2>
                            <div className="space-y-3">
                                <div>
                                    <h3 className="font-semibold">Lieu de la Cérémonie</h3>
                                    <p className="opacity-90">Parc des Expositions, Abidjan</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Date</h3>
                                    <p className="opacity-90">26 Juillet 2025</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Contact Urgent</h3>
                                    <p className="opacity-90">+225 01 01 01 01 01</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire d'envoie de message */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Envoyez-nous un Message
                        </h2>

                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;