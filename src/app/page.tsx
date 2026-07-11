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
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fffbeb', minHeight: '100vh', paddingBottom: '50px' }}>
      <header style={{ backgroundColor: '#1e293b', color: '#fbbf24', padding: '60px 20px', textAlign: 'center', borderBottom: '8px solid #fbbf24' }}>
        <h1 style={{ fontSize: '48px', margin: '0', fontWeight: '900' }}>TIENDA VIP: JUAN GADGETS</h1>
        <p style={{ fontSize: '20px', marginTop: '10px', color: 'white' }}>--- CATÁLOGO EXCLUSIVO SELECCIONADO ---</p>
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
        © 2026 Juan Gadgets | Versión de Emergencia 4.0 - Estilos Forzados
      </footer>
    </div>
  );
}
