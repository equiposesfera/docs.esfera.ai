'use client';

import { useState } from 'react';
import styles from './recursos-visuales.module.css';

interface Video {
  titulo: string;
  videoId: string;
  fechaEmision: string;
}

const videos: Video[] = [
  { titulo: 'EMPRESA', videoId: 'C-MrdJxmaUA', fechaEmision: '20/10/2024' },
  { titulo: 'PROYECTOS', videoId: 'Ws7EAQ2tMGQ', fechaEmision: '23/10/2024' },
  { titulo: 'USUARIOS', videoId: 'tMOWL29otuA', fechaEmision: '20/10/2024' },
  { titulo: 'IMPORTAR ITEMS', videoId: 'lz1SPQfi7l0', fechaEmision: '20/10/2024' },
  { titulo: 'CREAR ITEMS', videoId: '5SBE7Gv2Vfc', fechaEmision: '20/10/2024' },
  { titulo: 'EDITAR ITEMS', videoId: 'v0IdQ8NvfNc', fechaEmision: '20/10/2024' },
  { titulo: 'MATERIALES Y SERVICIOS', videoId: 'b9X5UVZ8as0', fechaEmision: '20/10/2024' },
  { titulo: 'MANO DE OBRA', videoId: 'JiF_20kk2eQ', fechaEmision: '20/10/2024' },
  { titulo: 'EQUIPOS, MAQUINARIAS Y HERRAMIENTAS', videoId: 'kQwHqxePNIY', fechaEmision: '22/10/2024' },
  { titulo: 'GRUPOS', videoId: 'tcah8wj8yfQ', fechaEmision: '22/10/2024' },
  { titulo: 'UNIDADES DE MEDIDA', videoId: 'TrJwHe5rDso', fechaEmision: '22/10/2024' },
  { titulo: 'CATEGORIAS', videoId: 'KiQvy3VUrTE', fechaEmision: '22/10/2024' },
  { titulo: 'INTRODUCCION A PRESUPUESTO', videoId: 'PjS3cl1TGAE', fechaEmision: '07/11/2024' },
  { titulo: 'COMPUTO', videoId: 'X6r6SeEBWlU', fechaEmision: '13/11/2024' },
  { titulo: 'PRESUPUESTO', videoId: 'dyAeOlyZjwU', fechaEmision: '13/11/2024' },
  { titulo: 'COMITENTES', videoId: 'WNMwOKR_WFk', fechaEmision: '20/10/2024' },
  { titulo: 'PROVEEDORES', videoId: '_S2D2gFLEgo', fechaEmision: '20/10/2024' },
  { titulo: 'CONTRATISTAS', videoId: 'f-49RiJD-Bk', fechaEmision: '20/10/2024' },
  { titulo: 'DOCUMENTOS', videoId: 'ZmGDD_GGuxE', fechaEmision: '25/10/2024' },
  { titulo: 'CONFIGURACION', videoId: '76XuXDEw958', fechaEmision: '07/12/2024' },
  { titulo: 'PEDIDOS', videoId: 'KQZJXFeJlaU', fechaEmision: '23/10/2024' },
  { titulo: 'COTIZACIONES', videoId: '1lu5ErTXkYs', fechaEmision: '23/10/2024' },
  { titulo: 'AUTORIZACION DE COTIZACIONES', videoId: 'vryFefyp9-4', fechaEmision: '23/10/2024' },
  { titulo: 'ORDEN DE COMPRA', videoId: 'Mx1v1Z-KTFk', fechaEmision: '23/10/2024' },
  { titulo: 'ENTRADA DE ALMACEN', videoId: 'AsP7iaLiPRM', fechaEmision: '23/10/2024' },
  { titulo: 'SALIDAS DE ALMACEN', videoId: 'ulQKkzjDDhs', fechaEmision: '25/10/2024' },
  { titulo: 'STOCK DE ALMACEN', videoId: 'fvMnDykjyHI', fechaEmision: '25/10/2024' },
  { titulo: 'AVANCES', videoId: '1GHdjH325PE', fechaEmision: '26/10/2024' },
  { titulo: 'PLANILLAS', videoId: '02tjIGB3vSY', fechaEmision: '23/10/2024' },
  { titulo: 'RETENCIONES', videoId: '6uauTGyrlbY', fechaEmision: '26/10/2024' },
  { titulo: 'INMUEBLES', videoId: 'vv-ZOlcDw50', fechaEmision: '25/10/2024' },
  { titulo: 'CLIENTES', videoId: 'aYI_MNy9o0E', fechaEmision: '25/10/2024' },
  { titulo: 'VENTA DE INMUEBLES', videoId: 'L4PTFrbCg74', fechaEmision: '28/10/2024' },
  { titulo: 'GALERIA DE INMUEBLES', videoId: 'fkD-lVyvfHI', fechaEmision: '28/10/2024' },
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
              <p className={styles.fechaEmision}>Video subido el: {video.fechaEmision}</p>
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
