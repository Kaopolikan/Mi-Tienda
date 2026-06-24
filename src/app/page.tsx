export default function Home() {
  const products = [
    { id: 1, title: "Impresora Portátil A4 M08F", price: "31.77", url: "https://amzn.to/4w5C40w", img: "https://sc04.alicdn.com/kf/Aa2700f34a33a4c169ff41eabd5d692440.jpg" },
    { id: 2, title: "Monitor ARZOPA 15.6", price: "129.99", url: "https://amzn.to/3SnMOcd", img: "https://sc04.alicdn.com/kf/Ad7e0bb5c296946b7af221c39cbf30217S.jpg" },
    { id: 3, title: "EcoFlow Delta 3 Ultra", price: "2599.00", url: "https://amzn.to/3SqBCvo", img: "https://sc04.alicdn.com/kf/Ab4d4ff97fedf4803a83bd887efb4744cN.jpg" }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fffbeb', minHeight: '100vh', paddingBottom: '50px' }}>
      <header style={{ backgroundColor: '#1e293b', color: '#fbbf24', padding: '60px 20px', textAlign: 'center', borderBottom: '8px solid #fbbf24' }}>
        <h1 style={{ fontSize: '48px', margin: '0', fontWeight: '900' }}>TIENDA VIP: JUAN GADGETS</h1>
        <p style={{ fontSize: '20px', marginTop: '10px', color: 'white' }}>--- VERSIÓN DEFINITIVA CON IMÁGENES REALES ---</p>
      </header>

      <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {products.map(p => (
          <div key={p.id} style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <div style={{ height: '220px', width: '100%', backgroundColor: '#f1f5f9' }}>
              <img 
                src={p.img} 
                alt={p.title} 
                referrerPolicy="no-referrer"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} 
              />
            </div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', margin: '0 0 10px 0', color: '#1e293b' }}>{p.title}</h3>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#ea580c', margin: '10px 0' }}>${p.price}</p>
              <a href={p.url} target="_blank" style={{ display: 'block', backgroundColor: '#1e293b', color: 'white', textAlign: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', marginTop: '15px' }}>
                Ver en Amazon
              </a>
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
