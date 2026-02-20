'use client';

import Link from 'next/link';
import Image from 'next/image';
import Menu from './components/Menu';
import { furnitureData } from './data/furniture';

const categories = [
  { name: 'Sofas', icon: '🛋️', color: 'from-blue-500 to-blue-600' },
  { name: 'Tables', icon: '🪑', color: 'from-amber-500 to-amber-600' },
  { name: 'Chairs', icon: '🪑', color: 'from-green-500 to-green-600' },
  { name: 'Beds', icon: '🛏️', color: 'from-purple-500 to-purple-600' },
  { name: 'Storage', icon: '📦', color: 'from-pink-500 to-pink-600' },
  { name: 'Lighting', icon: '💡', color: 'from-yellow-500 to-yellow-600' },
  { name: 'Office', icon: '💼', color: 'from-indigo-500 to-indigo-600' },
  { name: 'Outdoor', icon: '🌳', color: 'from-teal-500 to-teal-600' },
  { name: 'Decor', icon: '🎨', color: 'from-rose-500 to-rose-600' },
];

export default function Home() {
  const scrollToCategory = (categoryName: string) => {
    const element = document.getElementById(`category-${categoryName.toLowerCase()}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Menu />
      <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black">
        {/* Categories Grid */}
        <section id="categories-grid" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <section className="flex items-center justify-center px-6 py-8 lg:py-12 my-6">
              <div className="max-w-6xl w-full bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 lg:mb-6 tracking-tight">
                      Muebleria Nueva Era
                    </h1>
                    <p className="text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 mb-6">
                      📍 Visitanos en Avenida Insurgentes 70, Zumpango, Estado de México. A un costado de la prepa No 2 Zumpango San Pedro. 
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mb-6">
                        {/* Replace PHONE_NUMBER with country code + number, e.g. 5215512345678 */}
                        <a
                        href="https://wa.me/5215512345678?text=Hola%20quiero%20informaci%C3%B3n%20sobre%20la%20l%C3%ADnea%20de%20muebles"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abrir WhatsApp"
                        className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold text-base transition-colors shadow flex items-center gap-3 justify-center"
                        >
                        <Image
                          src="/icons/whatsapp.png"
                          alt="WhatsApp"
                          width={20}
                          height={20}
                          className="flex-shrink-0"
                        />
                        WhatsApp
                        </a>

                        <a
                        href="https://maps.app.goo.gl/UgB76LPx8Wv6DWHG6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 rounded-lg font-semibold text-base border-2 border-zinc-900 dark:border-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center gap-3 justify-center"
                        >
                        <Image
                          src="/icons/google-maps.png"
                          alt="Google Maps"
                          width={20}
                          height={20}
                          className="flex-shrink-0"
                        />
                        Abrir en Maps
                        </a>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                      <div>
                        <span className="font-bold text-xl text-zinc-900 dark:text-zinc-50">Entrega a domicilio</span>
                        <p>Zumpango y alrededores</p>
                      </div>
                      <div className="w-px h-10 bg-zinc-300 dark:bg-zinc-700"></div>
                      <div>
                        <span className="font-bold text-xl text-zinc-900 dark:text-zinc-50">Sistema de apartado</span>
                        <p>Liquida en un mes</p>
                      </div>
                      <div className="w-px h-10 bg-zinc-300 dark:bg-zinc-700"></div>
                      <div>
                        <span className="font-bold text-xl text-zinc-900 dark:text-zinc-50">Garantía</span>
                        <p>Hasta por un año en productos electronicos</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative h-72 lg:h-auto">
                    <Image
                      src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Modern furniture"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="max-w-6xl mx-auto mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => scrollToCategory(category.name)}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`bg-gradient-to-br ${category.color} p-6 h-44 flex flex-col items-center justify-center text-white`}>
                    <span className="text-5xl mb-2 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </span>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="text-sm opacity-90 mt-1">
                      {furnitureData.filter(item => item.category === category.name).length} items
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Category Sections */}
        {categories.map((category) => {
          const items = furnitureData.filter(item => item.category === category.name);

          if (items.length === 0) return null;

          return (
            <section
              key={category.name}
              id={`category-${category.name.toLowerCase()}`}
              className="py-20 px-6 border-t border-zinc-200 dark:border-zinc-800"
            >
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-5xl">{category.icon}</span>
                  <div>
                    <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                      {category.name}
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {items.length} {items.length === 1 ? 'item' : 'items'} available
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item) => (
                    <Link
                      key={item.id}
                      href={`/product/${item.id}`}
                      className="group bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
                          {item.name}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                          ${item.price.toLocaleString()}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Footer CTA */}
        <section className="py-20 px-6 bg-zinc-900 dark:bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              🚚 Envió a Zumpango y alrededores
            </h2>
            <Link
              href="/catalog"
              className="inline-block px-8 py-4 bg-white text-zinc-900 rounded-lg font-semibold text-lg hover:bg-zinc-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Abrir Catalogo
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
