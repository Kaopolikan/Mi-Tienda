export default function Home() {
  const products = [
    { id: 1, title: "Phomemo Mini Impresora T02", price: "29.99", url: "https://amzn.to/4vtIuqk", img: "https://m.media-amazon.com/images/I/61i5C5n2XkL._AC_SL1500_.jpg" },
    { id: 2, title: "Cargador Inalámbrico 3 en 1", price: "34.50", url: "https://amzn.to/3QBYJCI", img: "https://m.media-amazon.com/images/I/61MvUa0f4OL._AC_SL1500_.jpg" },
    { id: 3, title: "Monitor ARZOPA 15.6", price: "129.99", url: "https://amzn.to/3SnMOcd", img: "https://m.media-amazon.com/images/I/71YvS-3Xb-L._AC_SL1500_.jpg" },
    { id: 4, title: "Atenuador Exterior Treatlife", price: "22.99", url: "https://amzn.to/4vrfgs5", img: "https://m.media-amazon.com/images/I/61pD7U8uTGL._AC_SL1500_.jpg" },
    { id: 5, title: "Picador de Ajo USB", price: "14.99", url: "https://amzn.to/4vvaWZ9", img: "https://m.media-amazon.com/images/I/61YhS0Wwz0L._AC_SL1500_.jpg" },
    { id: 6, title: "Masajeador GLO24K LED", price: "39.99", url: "https://amzn.to/4es38kJ", img: "https://m.media-amazon.com/images/I/51r-xG9X7vL._AC_SL1500_.jpg" },
    { id: 7, title: "Power Plug Pro Energy Saver", price: "14.99", url: "https://amzn.to/4w1dsWH", img: "https://m.media-amazon.com/images/I/61Wv6Z-Z9DL._AC_SL1500_.jpg" },
    { id: 8, title: "Cargador Solar BLAVOR 42k", price: "26.99", url: "https://amzn.to/4vsjXC5", img: "https://m.media-amazon.com/images/I/71UqC8-9mML._AC_SL1500_.jpg" },
    { id: 9, title: "Impresora Portátil A4 M08F", price: "31.77", url: "https://amzn.to/4w5C40w", img: "https://m.media-amazon.com/images/I/61-9pC8p0DL._AC_SL1500_.jpg" },
    { id: 10, title: "EcoFlow Delta 3 Ultra", price: "2599.00", url: "https://amzn.to/3SqBCvo", img: "https://m.media-amazon.com/images/I/71o+57989SL._AC_SL1500_.jpg" }
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
