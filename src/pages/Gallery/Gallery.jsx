import { useState, useEffect } from "react";
import SectionHeader from "../../components/SectionHeader";
import { ImageIcon, Download, Search, ChevronLeft, ChevronRight, X, ChevronsLeft, ChevronsRight } from "lucide-react";
import ParticlesBackground from "../../components/ParticlesBackground";

const API_URL = "https://image.msgroupe.tech/api/index";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const photosPerPage = 15;

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
    setCurrentPage(1);
  };

  const filteredPhotos = photos.filter(photo => 
    photo.title.toLowerCase().includes(filters.search.toLowerCase())
  );

  // Calcul des photos pour la page courante
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = filteredPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);
  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > totalPages) pageNumber = totalPages;
    setCurrentPage(pageNumber);
  };

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 7; // Nombre maximum de boutons de page visibles
    let startPage, endPage;

    if (totalPages <= maxVisiblePages) {
      // Moins de pages que le maximum visible : toutes les afficher
      startPage = 1;
      endPage = totalPages;
    } else {
      // Plus de pages que le maximum visible : calculer quelles pages afficher
      const half = Math.floor(maxVisiblePages / 2);
      if (currentPage <= half + 1) {
        // Début de la pagination
        startPage = 1;
        endPage = maxVisiblePages - 2; // -2 pour les "..." et la dernière page
      } else if (currentPage >= totalPages - half) {
        // Fin de la pagination
        startPage = totalPages - maxVisiblePages + 3; // +3 pour la première page et "..."
        endPage = totalPages;
      } else {
        // Milieu de la pagination
        startPage = currentPage - Math.floor((maxVisiblePages - 4) / 2);
        endPage = currentPage + Math.floor((maxVisiblePages - 4) / 2);
      }
    }

    // Bouton première page
    if (startPage > 1) {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => paginate(1)}
          className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
            1 === currentPage ? 'z-10 bg-blue-50 border-blue-500 text-blue-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
          }`}
        >
          1
        </button>
      );

      if (startPage > 2) {
        pageNumbers.push(
          <span key="start-ellipsis" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
            ...
          </span>
        );
      }
    }

    // Boutons pages principales
    for (let i = startPage; i <= endPage; i++) {
      if (i === 1 && startPage !== 1) continue; // Déjà affichée
      if (i === totalPages && endPage !== totalPages) continue; // Sera affichée plus tard

      pageNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
            i === currentPage ? 'z-10 bg-blue-50 border-blue-500 text-blue-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
          }`}
        >
          {i}
        </button>
      );
    }

    // Bouton dernière page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span key="end-ellipsis" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
            ...
          </span>
        );
      }

      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => paginate(totalPages)}
          className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
            totalPages === currentPage ? 'z-10 bg-blue-50 border-blue-500 text-blue-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

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

        <div className="mb-8 bg-white p-4 rounded-lg shadow mx-4 sm:mx-0">
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
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-0">
              {currentPhotos.map((photo) => (
                <div key={photo.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div 
                    className="relative h-60 bg-gray-100 cursor-pointer"
                    onClick={() => openPhotoModal(photo)}
                  >
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination améliorée */}
            {totalPages > 1 && (
              <div className="mt-8 mx-4 sm:mx-0">
                <div className="bg-white rounded-lg shadow overflow-x-auto">
                  <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex-1 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => paginate(1)}
                          disabled={currentPage === 1}
                          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Première page"
                        >
                          <span className="sr-only">Première</span>
                          <ChevronsLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => paginate(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Page précédente"
                        >
                          <span className="sr-only">Précédent</span>
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="hidden sm:flex">
                        <nav className="relative z-0 inline-flex -space-x-px" aria-label="Pagination">
                          {renderPageNumbers()}
                        </nav>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => paginate(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Page suivante"
                        >
                          <span className="sr-only">Suivant</span>
                          <ChevronRight className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => paginate(totalPages)}
                          disabled={currentPage === totalPages}
                          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Dernière page"
                        >
                          <span className="sr-only">Dernière</span>
                          <ChevronsRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Version mobile simplifiée */}
                  <div className="sm:hidden flex items-center justify-center py-3">
                    <span className="text-sm text-gray-700">
                      Page <span className="font-medium">{currentPage}</span> sur <span className="font-medium">{totalPages}</span>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </>
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

      {/* Modal pour afficher la photo en grand */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-black opacity-75" onClick={closePhotoModal}></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {selectedPhoto.title}
                      </h3>
                      <button
                        type="button"
                        className="ml-2 bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                        onClick={closePhotoModal}
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    <div className="mt-4">
                      <img 
                        src={selectedPhoto.imageUrl} 
                        alt={selectedPhoto.title}
                        className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/800x600?text=Image+Indisponible";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <a
                  href={selectedPhoto.downloadUrl}
                  download={`diplome-${selectedPhoto.id}.${selectedPhoto.extension}`}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger
                </a>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closePhotoModal}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;