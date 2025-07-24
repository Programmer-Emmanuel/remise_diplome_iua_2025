import { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import { ImageIcon, Download, Search, Filter } from "lucide-react";
import { filieres, categories } from "../../data/photos";
import ParticlesBackground from "../../components/ParticlesBackground";

import iua1 from '../../assets/images/iua1.jpeg';
import parc from '../../assets/images/parc.jpeg';
import iua2 from '../../assets/images/iua2.jpeg';

const fakePhotos = [
  {
    id: 1,
    url: iua1,
    title: "Photo 1",
    category: "remise",
    filiere: "Informatique",
    promotion: "2025",
  },
  {
    id: 2,
    url: parc,
    title: "Photo 2",
    category: "remise",
    filiere: "Comptabilité",
    promotion: "2024",
  },
  {
    id: 3,
    url: iua2,
    title: "Photo 3",
    category: "remise",
    filiere: "Comptabilité",
    promotion: "2024",
  },
];

const Gallery = () => {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    filiere: "",
    promotion: "",
  });

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "photo-iua.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredPhotos = fakePhotos.filter((photo) => {
    const matchesSearch = photo.title.toLowerCase().includes(filters.search.toLowerCase());
    const matchesCategory = filters.category ? photo.category === filters.category : true;
    const matchesFiliere = filters.filiere ? photo.filiere === filters.filiere : true;
    const matchesPromotion = filters.promotion ? photo.promotion === filters.promotion : true;
    return matchesSearch && matchesCategory && matchesFiliere && matchesPromotion;
  });

  return (
    <div className="relative z-0">
      {/* Particules en arrière-plan */}
      <ParticlesBackground />

      {/* Contenu principal */}
      <div className="relative z-10 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={ImageIcon}
          title="Galerie Photos"
          description="Explorez tous les moments capturés lors de la cérémonie de remise des diplômes IUA 2025"
        />

        {/* Filtres */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-blue-800 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Filtrer les photos</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <select
              value={filters.category}
              onChange={(e) => handleFilterChange("category", e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Toutes les catégories</option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <select
              value={filters.filiere}
              onChange={(e) => handleFilterChange("filiere", e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Toutes les filières</option>
              {filieres.map((filiere) => (
                <option key={filiere} value={filiere}>
                  {filiere}
                </option>
              ))}
            </select>

            <select
              value={filters.promotion}
              onChange={(e) => handleFilterChange("promotion", e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Toutes les promotions</option>
              <option value="2025">Promotion 2025</option>
              <option value="2024">Promotion 2024</option>
            </select>
          </div>
        </div>

        {/* Galerie */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <img src={photo.url} alt={photo.title} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h4 className="text-md font-semibold text-gray-800 mb-2">{photo.title}</h4>
                <p className="text-sm text-gray-500">{photo.filiere} · {photo.promotion}</p>
                <div className="mt-4">
                  <button
                    onClick={() => handleDownload(photo.url)}
                    className="inline-flex items-center px-3 py-1.5 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filteredPhotos.length === 0 && (
            <p className="col-span-full text-center text-gray-500">Aucune photo trouvée.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
