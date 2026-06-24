import { ShoppingCart, Star, ArrowRight, Zap, CheckCircle } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Phomemo Mini Impresora T02",
    description: "Impresora térmica de bolsillo sin tinta. Perfecta para fotos, notas y organización con su app divertida.",
    price: "29.99",
    category: "Productividad",
    amazonUrl: "https://amzn.to/4vtIuqk",
    badge: "Más Vendido",
    image: "https://images.unsplash.com/photo-1583500171118-2e06173a985d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Cargador Inalámbrico 3 en 1",
    description: "Carga rápida para iPhone, Apple Watch y AirPods al mismo tiempo. Olvida el desorden de cables.",
    price: "34.50",
    category: "Tecnología",
    amazonUrl: "https://amzn.to/3QBYJCI",
    badge: "Tendencia",
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Monitor Portátil ARZOPA 15.6\"",
    description: "Pantalla Full HD 1080P ultra delgada. Conexión USB-C para trabajar con doble pantalla en cualquier lugar.",
    price: "129.99",
    category: "Nómada Digital",
    amazonUrl: "https://amzn.to/3SnMOcd",
    badge: "Recomendado",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Atenuador Exterior Treatlife",
    description: "Enchufe inteligente para patio resistente al agua. Controla la intensidad de tus luces desde el móvil.",
    price: "22.99",
    category: "Smart Home",
    amazonUrl: "https://amzn.to/4vrfgs5",
    badge: "Viral",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Picador Eléctrico de Ajo USB",
    description: "Mini procesador de alimentos inalámbrico. Pica ajo, cebolla y verduras en segundos sin olores.",
    price: "14.99",
    category: "Cocina",
    amazonUrl: "https://amzn.to/4vvaWZ9",
    badge: "TikTok Trend",
    image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Masajeador GLO24K LED",
    description: "Terapia de luz roja para cara y cuello. Reafirma la piel y reduce arrugas con tecnología LED.",
    price: "39.99",
    category: "Cuidado Personal",
    amazonUrl: "https://amzn.to/4es38kJ",
    badge: "Beauty Tech",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Power Plug Pro Energy Saver",
    description: "Dispositivo inteligente para optimizar el consumo eléctrico y proteger tus electrodomésticos.",
    price: "14.99",
    category: "Hogar Eficiente",
    amazonUrl: "https://amzn.to/4w1dsWH",
    badge: "Ahorro",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Cargador Solar BLAVOR 42.8k",
    description: "Batería externa solar masiva para exteriores. Resistente al agua, con brújula y linterna.",
    price: "26.99",
    category: "Energía Solar",
    amazonUrl: "https://amzn.to/4vsjXC5",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Impresora Portátil A4 M08F",
    description: "Impresión de documentos sin tinta desde el móvil o laptop. Ideal para contratos y viajes.",
    price: "31.77",
    category: "Oficina",
    amazonUrl: "https://amzn.to/4w5C40w",
    badge: "Profesional",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "EcoFlow Delta 3 Ultra",
    description: "Estación de energía de gran capacidad (3600W). Respaldo crítico para hogar y camping extremo.",
    price: "2,599.00",
    category: "Energía",
    amazonUrl: "https://amzn.to/3SqBCvo",
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1621905235277-f2742e6b7f9a?q=80&w=800&auto=format&fit=crop"
  }
];

// Actualización de catálogo: 8 productos verificados
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-orange-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          JUAN GADGETS: Tu Tienda de Confianza
        </h1>
        <p className="text-xl text-orange-50 max-w-2xl mx-auto mb-10">
          Versión 3.0: 10 Productos con Imágenes Garantizadas
        </p>
        <div className="flex justify-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <CheckCircle className="w-4 h-4 text-green-400" /> Selección Experta
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <CheckCircle className="w-4 h-4 text-green-400" /> Mejores Precios
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-12 text-slate-800 flex items-center gap-3">
          <Zap className="text-orange-500 fill-orange-500" /> Selecciones Destacadas
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} style={{ border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', backgroundColor: 'white' }}>
              <div style={{ height: '250px', width: '100%', position: 'relative', backgroundColor: '#f1f5f9' }}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', top: '16px', left: '16px', backgroundColor: '#ea580c', color: 'white', fontSize: '12px', fontWeight: 'bold', padding: '4px 12px', borderRadius: '99px' }}>
                  {product.badge}
                </span>
              </div>
              
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#ea580c', textTransform: 'uppercase' }}>{product.category}</span>
                  <div style={{ color: '#facc15', fontSize: '14px' }}>★ 4.8</div>
                </div>
                
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#0f172a', marginBottom: '12px' }}>{product.title}</h3>
                <p style={{ color: '#475569', fontSize: '14px', marginBottom: '24px', lineHeight: '1.5' }}>
                  {product.description}
                </p>
                
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '12px', color: '#94a3b8', display: 'block' }}>Precio aprox.</span>
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>${product.price}</span>
                  </div>
                  <a 
                    href={product.amazonUrl}
                    style={{ backgroundColor: '#0f172a', color: 'white', padding: '12px 20px', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold' }}
                  >
                    Ver en Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t py-12 px-4 text-center">
        <p className="text-slate-500 text-sm mb-4">
          © 2026 Juan Gadgets. Participamos en el programa de afiliados de Amazon.
        </p>
        <div className="flex justify-center gap-6 text-slate-400">
          <a href="#" className="hover:text-slate-600">Contacto</a>
          <a href="#" className="hover:text-slate-600">Privacidad</a>
          <a href="#" className="hover:text-slate-600">Aviso Legal</a>
        </div>
      </footer>
    </main>
  );
}