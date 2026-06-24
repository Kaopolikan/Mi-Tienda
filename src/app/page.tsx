import { ShoppingCart, Star, ArrowRight, Zap, CheckCircle } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Mini Impresora Térmica Portátil",
    description: "Organiza tu vida sin gastar en tinta. Ideal para etiquetas, notas y fotos rápidas.",
    price: "25.99",
    category: "Productividad",
    amazonUrl: "https://amzn.to/4vtIuqk", // Enlace de afiliado actualizado
    badge: "Más Vendido",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Estación de Carga 5 en 1",
    description: "Carga tu iPhone, Apple Watch y AirPods simultáneamente. Diseño minimalista y plegable.",
    price: "34.50",
    category: "Tecnología",
    amazonUrl: "https://amzn.to/3QBYJCI", // Enlace de afiliado actualizado
    badge: "Tendencia",
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Monitor Portátil 15.6\" Ultra Slim",
    description: "Expande tu espacio de trabajo donde sea. Conexión USB-C y resolución Full HD.",
    price: "129.00",
    category: "Nómada Digital",
    amazonUrl: "https://amzn.to/3SnMOcd", // Enlace de afiliado actualizado
    badge: "Recomendado",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Enchufe Inteligente Exterior Treatlife",
    description: "Controla y atenúa las luces de tu patio desde cualquier lugar. Resistente a la intemperie (IP44).",
    price: "22.99",
    category: "Smart Home",
    amazonUrl: "https://amzn.to/4vrfgs5",
    badge: "Viral",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=500&auto=format&fit=crop"
  }
];

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