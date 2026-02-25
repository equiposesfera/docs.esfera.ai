'use client';

import { useState } from 'react';
import styles from './recursos-visuales.module.css';

interface Video {
  titulo: string;
  videoId: string;
}

const videos: Video[] = [
  { titulo: 'Lanzamiento de Esfera', videoId: 'FijHCVQPuB4' },
  { titulo: 'Comienza a Usar Esfera: Guía de Acceso', videoId: 'dBdNSHsMbbk' },
  { titulo: 'Flujo de Trabajo', videoId: 'mZIimzmA8Pc' },
  { titulo: 'EMPRESA', videoId: 'C-MrdJxmaUA' },
  { titulo: 'PROYECTOS', videoId: 'Ws7EAQ2tMGQ' },
  { titulo: 'USUARIOS', videoId: 'tMOWL29otuA' },
  { titulo: 'IMPORTAR ITEMS', videoId: 'lz1SPQfi7l0' },
  { titulo: 'CREAR ITEMS', videoId: '5SBE7Gv2Vfc' },
  { titulo: 'EDITAR ITEMS', videoId: 'v0IdQ8NvfNc' },
  { titulo: 'MATERIALES Y SERVICIOS', videoId: 'b9X5UVZ8as0' },
  { titulo: 'MANO DE OBRA', videoId: 'JiF_20kk2eQ' },
  { titulo: 'EQUIPOS, MAQUINARIAS Y HERRAMIENTAS', videoId: 'kQwHqxePNIY' },
  { titulo: 'GRUPOS', videoId: 'tcah8wj8yfQ' },
  { titulo: 'UNIDADES DE MEDIDA', videoId: 'TrJwHe5rDso' },
  { titulo: 'CATEGORIAS', videoId: 'KiQvy3VUrTE' },
  { titulo: 'INTRODUCCION A PRESUPUESTO', videoId: 'PjS3cl1TGAE' },
  { titulo: 'COMPUTO', videoId: 'X6r6SeEBWlU' },
  { titulo: 'PRESUPUESTO', videoId: 'dyAeOlyZjwU' },
  { titulo: 'COMITENTES', videoId: 'WNMwOKR_WFk' },
  { titulo: 'PROVEEDORES', videoId: '_S2D2gFLEgo' },
  { titulo: 'CONTRATISTAS', videoId: 'f-49RiJD-Bk' },
  { titulo: 'DOCUMENTOS', videoId: 'ZmGDD_GGuxE' },
  { titulo: 'CONFIGURACION', videoId: '76XuXDEw958' },
  { titulo: 'PEDIDOS', videoId: 'KQZJXFeJlaU' },
  { titulo: 'COTIZACIONES', videoId: '1lu5ErTXkYs' },
  { titulo: 'AUTORIZACION DE COTIZACIONES', videoId: 'vryFefyp9-4' },
  { titulo: 'ORDEN DE COMPRA', videoId: 'Mx1v1Z-KTFk' },
  { titulo: 'ENTRADA DE ALMACEN', videoId: 'AsP7iaLiPRM' },
  { titulo: 'SALIDAS DE ALMACEN', videoId: 'ulQKkzjDDhs' },
  { titulo: 'STOCK DE ALMACEN', videoId: 'fvMnDykjyHI' },
  { titulo: 'AVANCES', videoId: '1GHdjH325PE' },
  { titulo: 'PLANILLAS', videoId: '02tjIGB3vSY' },
  { titulo: 'RETENCIONES', videoId: '6uauTGyrlbY' },
  { titulo: 'INMUEBLES', videoId: 'vv-ZOlcDw50' },
  { titulo: 'CLIENTES', videoId: 'aYI_MNy9o0E' },
  { titulo: 'VENTA DE INMUEBLES', videoId: 'L4PTFrbCg74' },
  { titulo: 'GALERIA DE INMUEBLES', videoId: 'fkD-lVyvfHI' },
];

export default function RecursosVisuales() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleVideoClick = (video: Video) => {
    console.log('Video clicked:', video.titulo);
    setSelectedVideo(video);
  };

  return (
    <div className={styles.container}>
      <h1>Recursos Visuales</h1>
      <p className={styles.description}>Haz clic en cualquier video para reproducirlo en pantalla completa</p>
      {/* Nota importante */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">⚠️ Nota importante</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Como el sistema de Esfera.AI está en actualización continua, algunos contenidos pueden tener alguna variación.</li>
          <li>Estamos trabajando constantemente para mantener la información actualizada.</li>
          <li>Si tienes alguna dudas, no dudes en contactar al <a href="https://wa.me/15557021023?text=Ayuda" target="_blank" rel="noopener noreferrer" className="font-bold">soporte</a> para poder ayudarte.</li>
        </ul>
      </div>
      <div className={styles.grid}>
        {videos.map((video) => (
          <div key={video.videoId} style={{ cursor: 'pointer' }} onClick={() => handleVideoClick(video)}>
            <div className={styles.videoCard}>
              <div className={styles.thumbnail}>
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt={video.titulo}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                  }}
                />
                <div className={styles.playIcon}>▶</div>
              </div>
              <h3>{video.titulo}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className={styles.modal} onClick={() => setSelectedVideo(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton} 
              onClick={() => setSelectedVideo(null)}
              type="button"
              aria-label="Cerrar video"
            >
              ✕
            </button>
            <h2>{selectedVideo.titulo}</h2>
            <div className={styles.videoContainer}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
