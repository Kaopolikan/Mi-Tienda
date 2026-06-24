export default function Home() {
  const products = [
    { id: 1, title: "Impresora Phomemo T02", price: "29.99", url: "https://amzn.to/4vtIuqk", img: "https://images.unsplash.com/photo-1583500171118-2e06173a985d?w=500" },
    { id: 2, title: "Cargador 3 en 1", price: "34.50", url: "https://amzn.to/3QBYJCI", img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=500" },
    { id: 3, title: "Monitor ARZOPA 15.6", price: "129.99", url: "https://amzn.to/3SnMOcd", img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500" },
    { id: 4, title: "Enchufe Treatlife", price: "22.99", url: "https://amzn.to/4vrfgs5", img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500" },
    { id: 5, title: "Picador de Ajo USB", price: "14.99", url: "https://amzn.to/4vvaWZ9", img: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=500" },
    { id: 6, title: "Masajeador LED", price: "39.99", url: "https://amzn.to/4es38kJ", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500" },
    { id: 7, title: "Ahorrador de Energía", price: "14.99", url: "https://amzn.to/4w1dsWH", img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=500" },
    { id: 8, title: "Cargador Solar 42k", price: "26.99", url: "https://amzn.to/4vsjXC5", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500" },
    { id: 9, title: "Impresora A4 M08F", price: "31.77", url: "https://amzn.to/4w5C40w", img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500" },
    { id: 10, title: "EcoFlow Delta Pro", price: "2599.00", url: "https://amzn.to/3SqBCvo", img: "https://images.unsplash.com/photo-1621905235277-f2742e6b7f9a?w=500" }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '50px' }}>
      <header style={{ backgroundColor: '#ea580c', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', margin: '0' }}>JUAN GADGETS</h1>
        <p style={{ opacity: '0.9' }}>Las Mejores Ofertas de Amazon 2026</p>
      </header>

      <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {products.map(p => (
          <div key={p.id} style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <div style={{ height: '220px', width: '100%', backgroundColor: '#f1f5f9' }}>
              <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
