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
    image: "https://m.media-amazon.com/images/I/61i5C5n2XkL._AC_SL1500_.jpg"
  },
  {
    id: 2,
    title: "Cargador Inalámbrico 3 en 1",
    description: "Carga rápida para iPhone, Apple Watch y AirPods al mismo tiempo. Olvida el desorden de cables.",
    price: "34.50",
    category: "Tecnología",
    amazonUrl: "https://amzn.to/3QBYJCI",
    badge: "Tendencia",
    image: "https://m.media-amazon.com/images/I/61MvUa0f4OL._AC_SL1500_.jpg"
  },
  {
    id: 3,
    title: "Monitor Portátil ARZOPA 15.6\"",
    description: "Pantalla Full HD 1080P ultra delgada. Conexión USB-C para trabajar con doble pantalla en cualquier lugar.",
    price: "129.99",
    category: "Nómada Digital",
    amazonUrl: "https://amzn.to/3SnMOcd",
    badge: "Recomendado",
    image: "https://m.media-amazon.com/images/I/71YvS-3Xb-L._AC_SL1500_.jpg"
  },
  {
    id: 4,
    title: "Atenuador Exterior Treatlife",
    description: "Enchufe inteligente para patio resistente al agua. Controla la intensidad de tus luces desde el móvil.",
    price: "22.99",
    category: "Smart Home",
    amazonUrl: "https://amzn.to/4vrfgs5",
    badge: "Viral",
    image: "https://m.media-amazon.com/images/I/61pD7U8uTGL._AC_SL1500_.jpg"
  },
  {
    id: 5,
    title: "Picador Eléctrico de Ajo USB",
    description: "Mini procesador de alimentos inalámbrico. Pica ajo, cebolla y verduras en segundos sin olores.",
    price: "14.99",
    category: "Cocina",
    amazonUrl: "https://amzn.to/4vvaWZ9",
    badge: "TikTok Trend",
    image: "https://m.media-amazon.com/images/I/61YhS0Wwz0L._AC_SL1500_.jpg"
  },
  {
    id: 6,
    title: "Masajeador GLO24K LED",
    description: "Terapia de luz roja para cara y cuello. Reafirma la piel y reduce arrugas con tecnología LED.",
    price: "39.99",
    category: "Cuidado Personal",
    amazonUrl: "https://amzn.to/4es38kJ",
    badge: "Beauty Tech",
    image: "https://m.media-amazon.com/images/I/51r-xG9X7vL._AC_SL1500_.jpg"
  },
  {
    id: 7,
    title: "Power Plug Pro Energy Saver",
    description: "Dispositivo inteligente para optimizar el consumo eléctrico y proteger tus electrodomésticos.",
    price: "14.99",
    category: "Hogar Eficiente",
    amazonUrl: "https://amzn.to/4w1dsWH",
    badge: "Ahorro",
    image: "https://m.media-amazon.com/images/I/61Wv6Z-Z9DL._AC_SL1500_.jpg"
  },
  {
    id: 8,
    title: "Cargador Solar BLAVOR 42.8k",
    description: "Batería externa solar masiva para exteriores. Resistente al agua, con brújula y linterna.",
    price: "26.99",
    category: "Energía Solar",
    amazonUrl: "https://amzn.to/4vsjXC5",
    badge: "Best Seller",
    image: "https://m.media-amazon.com/images/I/71UqC8-9mML._AC_SL1500_.jpg"
  },
  {
    id: 9,
    title: "Impresora Portátil A4 M08F",
    description: "Impresión de documentos sin tinta desde el móvil o laptop. Ideal para contratos y viajes.",
    price: "31.77",
    category: "Oficina",
    amazonUrl: "https://amzn.to/4w5C40w",
    badge: "Profesional",
    image: "https://m.media-amazon.com/images/I/61-9pC8p0DL._AC_SL1500_.jpg"
  },
  {
    id: 10,
    title: "EcoFlow Delta 3 Ultra",
    description: "Estación de energía de gran capacidad (3600W). Respaldo crítico para hogar y camping extremo.",
    price: "2,599.00",
    category: "Energía",
    amazonUrl: "https://amzn.to/3SqBCvo",
    badge: "Premium",
    image: "https://m.media-amazon.com/images/I/71o+57989SL._AC_SL1500_.jpg"
  }
];

// Actualización de catálogo: 8 productos verificados
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
          Gadgets que Transforman tu Día
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          Analizamos miles de productos en Amazon para traerte solo lo que realmente vale la pena.
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
            <div key={product.id} className="group border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="relative h-64 bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.badge}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold text-orange-600 uppercase tracking-widest">{product.category}</span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-slate-600 text-sm ml-1">4.8</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{product.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between border-t pt-6">
                  <div>
                    <span className="text-sm text-slate-400 block">Precio aprox.</span>
                    <span className="text-2xl font-bold text-slate-900">€{product.price}</span>
                  </div>
                  <a 
                    href={product.amazonUrl}
                    className="bg-slate-900 text-white p-4 rounded-xl hover:bg-orange-600 transition-colors flex items-center gap-2"
                  >
                    Ver en Amazon <ArrowRight className="w-4 h-4" />
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