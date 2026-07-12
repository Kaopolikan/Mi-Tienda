export default function Home() {
  const products = [
    { 
      id: 1, 
      title: "Impresora Portátil A4 M08F", 
      price: "45.98", 
      url: "https://amzn.to/4w5C40w", 
      img: "https://sc04.alicdn.com/kf/Aa2700f34a33a4c169ff41eabd5d692440.jpg",
      details: "Ideal para estudiantes y profesionales móviles. Imprime sin tinta mediante tecnología térmica, ahorrando costos y espacio. Conexión Bluetooth estable."
    },
    { 
      id: 2, 
      title: "Monitor Portátil InnoView 15.6\"", 
      price: "49.99", 
      url: "https://www.amazon.com/dp/B095GG31KX", 
      img: "https://sc04.alicdn.com/kf/A6e4f6ecf24f04dbdae72edd458eb9f46g.jpg",
      details: "Aumenta tu productividad al instante con una segunda pantalla FHD. Ultra delgado y ligero, perfecto para viajes, presentaciones o gaming móvil."
    },
    { 
      id: 3, 
      title: "Lámpara LED wowatt Recargable", 
      price: "34.19", 
      url: "https://amzn.to/4fXuCjo", 
      img: "https://sc04.alicdn.com/kf/A3654ed6600624d1391a94e7d5a62f5824.jpg",
      details: "Luz con sensor de movimiento para armarios y pasillos. Recargable vía USB y de fácil instalación magnética. Ahorro energético garantizado."
    },
    { 
      id: 4, 
      title: "Ventilador Camping FRIZCOL 24k", 
      price: "28.47", 
      url: "https://amzn.to/3R2YeBL", 
      img: "https://sc04.alicdn.com/kf/Ae0c529171f8742d18cc093f4ad3c030ff.jpg",
      details: "Potente ventilador 3-en-1 con linterna y función de Power Bank. Batería masiva de 24,000mAh para días de uso continuo en exteriores o emergencias."
    },
    { 
      id: 5, 
      title: "Aire Acondicionado 8000 BTU", 
      price: "129.00", 
      url: "https://amzn.to/4eHmfGv", 
      img: "https://sc04.alicdn.com/kf/A707e07a7da5640d6955db9230ac20e35a.jpg",
      details: "Enfriamiento rápido y portátil para habitaciones de hasta 350 pies cuadrados. Incluye kit de ventana y control remoto para máximo confort."
    },
    { 
      id: 6, 
      title: "EcoFlow Delta 3 Ultra", 
      price: "2599.00", 
      url: "https://amzn.to/3SqBCvo", 
      img: "https://sc04.alicdn.com/kf/Ab4d4ff97fedf4803a83bd887efb4744cN.jpg",
      details: "Respaldo energético premium para el hogar. Capacidad masiva para electrodomésticos grandes y carga ultra rápida para emergencias críticas."
    },
    { 
      id: 7, 
      title: "Picadora de Ajo Eléctrica Inalámbrica", 
      price: "9.99", 
      url: "https://amzn.to/4vvaWZ9", 
      img: "https://sc04.alicdn.com/kf/Ab53717efe6644f2e849cdf5707277874I.jpg",
      details: "Pica ajo, jengibre y verduras en segundos con solo presionar un botón. Recargable por USB y portátil, ideal para mantener tus manos libres de olores."
    },
    { 
      id: 8, 
      title: "Ventilador Camping FRIZCOL 48k", 
      price: "49.98", 
      url: "https://www.amazon.com/dp/B0GG8L9ZHW", 
      img: "https://sc02.alicdn.com/kf/Aac53c2b7333e4439bfedf94549aa085b0.png",
      details: "Máxima potencia y autonomía. Batería gigante de 48,000mAh (hasta 120h de uso). Incluye luz LED, control remoto y función de carga para móviles. El rey del camping."
    },
    { 
      id: 9, 
      title: "eAhora Romeo Pro Electric Bike", 
      price: "1499.00", 
      url: "https://www.amazon.com/dp/B0G1SY2GW7", 
      img: "https://s.alicdn.com/@sc04/kf/H17be97f897d14d469ba3eb62e879d3b3p.jpg",
      details: "La e-bike más viral de TikTok 2026. Motor de 1600W (pico), velocidad de 34Mph y diseño robusto para cualquier terreno. Rendimiento extremo y confort."
    },
    { 
      id: 10, 
      title: "Bombillas LED Emergencia Brightown", 
      price: "29.99", 
      url: "https://www.amazon.com/dp/B0FK9SSYDF", 
      img: "https://s.alicdn.com/@sc04/kf/H83d00095457443f18d28f0f28d8704b5v.jpg",
      details: "Pack de 4 bombillas inteligentes. Se recargan con uso normal y se encienden automáticamente cuando se corta la luz. ¡No vuelvas a quedarte a oscuras!"
    },
    { 
      id: 11, 
      title: "Generador Solar GRECELL 2400W", 
      price: "799.99", 
      url: "https://www.amazon.com/dp/B0CD7WN2WL", 
      img: "https://s.alicdn.com/@sc04/kf/Hcd05cb2db6374e7db0cf5ddb51bde11eX.jpg",
      details: "Potencia masiva de 2400W y batería LiFePO4 de 1843Wh. Soporta 12 dispositivos simultáneamente. Carga rápida en solo 2 horas para máxima autonomía."
    },
    { 
      id: 12, 
      title: "Jackery Explorer 500", 
      price: "499.00", 
      url: "https://www.amazon.com/dp/B07SM5HBK1", 
      img: "https://sc04.alicdn.com/kf/Ab3c23dd9ac6c404883472ee98d9f7878M.jpg",
      details: "La marca más confiable en estaciones portátiles. Compacta, ligera y perfecta para camping o respaldo básico de emergencia. Calidad garantizada."
    },
    { 
      id: 13, 
      title: "Limpiador de Vapor Kiato", 
      price: "39.99", 
      url: "https://www.amazon.com/dp/B0G1T854H1", 
      img: "https://s.alicdn.com/@sc04/kf/H03d4cf7c7a7040ccb714c14d7655ad8eY.jpg",
      details: "Limpiador a vapor manual 10 en 1. Potente presión constante para desinfectar y limpiar cocina, sofás y tapicería sin químicos. El favorito del ASMR de limpieza."
    },
    { 
      id: 14, 
      title: "Lámpara Champiñón Vintage", 
      price: "32.99", 
      url: "https://www.amazon.com/dp/B0FHJPHHFM", 
      img: "https://s.alicdn.com/@sc04/kf/Hb28fedcab0064319ba14f3365a937fb56.jpg",
      details: "Lámpara de cristal naranja con diseño retro mid-century. Crea un ambiente acogedor y estético perfecto para tu habitación o escritorio. Tendencia total en TikTok."
    },
    { 
      id: 15, 
      title: "Proyector Galaxia Rossetta", 
      price: "49.99", 
      url: "https://www.amazon.com/dp/B0B3JPS39B", 
      img: "https://s.alicdn.com/@sc04/kf/H56bcf35fa2d8472e8bdd4dfd351fcfa3F.jpg",
      details: "Proyector de estrellas 4 en 1 con altavoz Bluetooth y máquina de ruido blanco. Transforma cualquier espacio en una galaxia relajante con efectos de aurora."
    },
    { 
      id: 16, 
      title: "Organizadores de Nevera Hoojo", 
      price: "19.99", 
      url: "https://www.amazon.com/dp/B08GRLG9X7", 
      img: "https://s.alicdn.com/@sc04/kf/Hdc3b104b6f8341aeb5de513aac27e367x.jpg",
      details: "Set de 8 contenedores transparentes y apilables. El secreto detrás de los videos virales de organización y 'restock'. Mantén tu comida fresca y ordenada."
    },
    { 
      id: 17, 
      title: "Ventilador de Cuello JISULIFE", 
      price: "31.99", 
      url: "https://www.amazon.com/dp/B08911JGGW", 
      img: "https://s.alicdn.com/@sc04/kf/H93806108fb134ab68a116efd4caa915d3.jpg",
      details: "Ventilador portátil manos libres sin aspas. Batería de 4000mAh para hasta 16 horas de uso. Diseño ligero y silencioso, ideal para viajes y actividades al aire libre."
    },
    { 
      id: 18, 
      title: "E-Bike Montaña Jasion EB5", 
      price: "199.00", 
      url: "https://www.amazon.com/dp/B0H7WMK9VK", 
      img: "https://sc04.alicdn.com/kf/Aad3476edcb4a49ec9fec57966e2395a01.jpg",
      details: "La bicicleta eléctrica más económica y vendida de Amazon. Diseño de montaña ligero, motor de 1000W (pico) y hasta 40 millas de autonomía. ¡Oferta limitada!"
    },
    { 
      id: 19, 
      title: "Ancheer Folding E-Bike 14\"", 
      price: "259.99", 
      url: "https://www.amazon.com/dp/B0G5YZB77Q", 
      img: "https://sc04.alicdn.com/kf/Aff12d26901ef43429472ddc5db1651a4h.jpg",
      details: "Compacta, ligera y plegable. Motor de 350W y velocidad de hasta 20MPH. Perfecta para trayectos urbanos y fácil de guardar en cualquier rincón o maletero."
    },
    { 
      id: 23, 
      title: "Azulejos Magnéticos AFUNX (102 pcs)", 
      price: "26.99", 
      url: "https://www.amazon.com/dp/B0FSKT2PT9", 
      img: "https://sc04.alicdn.com/kf/A2d779412c68e43a19246cc410345c0e2Y.jpg",
      details: "Set de 102 piezas de bloques de construcción magnéticos 3D transparentes. Inspira la creatividad más allá de la imaginación. El juguete educativo STEM favorito de Amazon 2026 para niños."
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fffbeb', minHeight: '100vh', paddingBottom: '50px' }}>
      <header style={{ backgroundColor: '#1e293b', color: '#fbbf24', padding: '60px 20px', textAlign: 'center', borderBottom: '8px solid #fbbf24' }}>
        <div style={{ marginBottom: '20px' }}>
          <img 
            src="https://sc04.alicdn.com/kf/A1322de4e062d4297b20ff22e7a4741d89.jpg" 
            alt="Juan - Fundador" 
            style={{ width: '120px', height: '120px', borderRadius: '50%', border: '4px solid #fbbf24', objectFit: 'cover', margin: '0 auto' }}
          />
        </div>
        <h1 style={{ fontSize: '48px', margin: '0', fontWeight: '900' }}>KAOPOLIKAN VIP</h1>
        <p style={{ fontSize: '20px', marginTop: '10px', color: 'white' }}>Selección Personal de Juan: Las Mejores Ofertas de Amazon 2026</p>
      </header>

      <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
        {products.map(p => (
          <div key={p.id} style={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '240px', width: '100%', backgroundColor: '#f8fafc', padding: '10px' }}>
              <img 
                src={p.img} 
                alt={p.title} 
                referrerPolicy="no-referrer"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} 
              />
            </div>
            <div style={{ padding: '25px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '20px', margin: '0 0 12px 0', color: '#1e293b', fontWeight: 'bold' }}>{p.title}</h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', marginBottom: '20px' }}>{p.details}</p>
              <div style={{ marginTop: 'auto' }}>
                <p style={{ fontSize: '28px', fontWeight: '900', color: '#ea580c', margin: '15px 0' }}>${p.price}</p>
                <a href={p.url} target="_blank" style={{ display: 'block', backgroundColor: '#1e293b', color: 'white', textAlign: 'center', padding: '14px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>
                  Ver Oferta en Amazon
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <footer style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginTop: '40px' }}>
        © 2026 Kaopolikan VIP | Selección Maestra de Ofertas
      </footer>
    </div>
  );
}
