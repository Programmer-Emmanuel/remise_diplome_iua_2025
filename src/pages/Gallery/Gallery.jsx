import { useState, useEffect } from "react";
import SectionHeader from "../../components/SectionHeader";
import { ImageIcon, Download, Search } from "lucide-react";
import ParticlesBackground from "../../components/ParticlesBackground";

const API_URL = "https://image.msgroupe.tech/api/index";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
  });

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const { status, message, data } = await response.json();
        
        if (status === 1 && Array.isArray(data)) {
          setPhotos(data.map(photo => ({
            id: photo.id,
            imageUrl: photo.image_url,
            downloadUrl: photo.download_url,
            title: `Photo ${photo.id}`,
            createdAt: photo.created_at,
            extension: photo.image_url.split('.').pop().toLowerCase()
          })));
        } else {
          throw new Error(message || "Format de données inattendu");
        }
      } catch (err) {
        setError(err.message);
        console.error("Erreur de chargement:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredPhotos = photos.filter(photo => 
    photo.title.toLowerCase().includes(filters.search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="relative z-0">
        <ParticlesBackground />
        <div className="relative z-10 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative z-0">
        <ParticlesBackground />
        <div className="relative z-10 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
            <p className="font-bold">Erreur</p>
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Réessayer
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-0 min-h-screen">
      <ParticlesBackground />
      <div className="relative z-10 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={ImageIcon}
          title="Galerie Photos"
          description="Explorez tous les moments capturés lors de la cérémonie de remise des diplômes IUA 2025"
        />

        <div className="mb-8 bg-white p-4 rounded-lg shadow">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition"
              placeholder="Rechercher des photos..."
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
            />
          </div>
        </div>

        {filteredPhotos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div key={photo.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-60 bg-gray-100">
                  <img 
                    src={photo.imageUrl} 
                    alt={photo.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x300?text=Image+Indisponible";
                      e.target.className = "w-full h-full object-contain p-4 bg-gray-200";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">{photo.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(photo.createdAt).toLocaleDateString('fr-FR')}
                  </p>
                  <a
                    href={photo.downloadUrl}
                    download={`diplome-${photo.id}.${photo.extension}`}
                    className="mt-3 w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 text-gray-400">
              <ImageIcon className="w-full h-full" />
            </div>
            <h3 className="mt-2 text-lg font-medium text-gray-900">Aucune photo trouvée</h3>
            <p className="mt-1 text-sm text-gray-500">
              {filters.search ? "Essayez une autre recherche" : "La galerie semble vide"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;