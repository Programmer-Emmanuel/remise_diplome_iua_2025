import { Send } from "lucide-react";
import Input from "../../../components/Input";

// { formData, handleInputChange, handleSubmit }
const ContactForm = () => {
    return (
        <>
            {/* onSubmit={handleSubmit} */}
            <form  className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom Complet
                    </label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Votre nom complet"
                        //value={formData.name}
                        //onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse Email
                    </label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="votre@email.com"
                        //value={formData.email}
                        //onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        required
                        //value={formData.subject}
                        //onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mt-1"
                    >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="info-ceremonie">Informations sur la cérémonie</option>
                        <option value="photos">Questions sur les photos</option>
                        <option value="invitations">Invitations et accès</option>
                        <option value="technique">Problème technique</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Votre message..."
                        //value={formData.message}
                        //onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none mt-1"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                    <Send className="w-5 h-5" />
                    <span>Envoyer le Message</span>
                </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
                Nous répondons généralement sous 24 heures
            </div>
        </>
    );
};

export default ContactForm;