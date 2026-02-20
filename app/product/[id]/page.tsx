import { notFound } from 'next/navigation';
import Link from 'next/link';
import Menu from '../../components/Menu';
import ImageZoom from '../../components/ImageZoom';
import { getFurnitureById, furnitureData } from '../../data/furniture';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return furnitureData.map((item) => ({
    id: item.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getFurnitureById(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Menu />
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Catalog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
                <ImageZoom
                  src={product.images[0]}
                  alt={product.name}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {product.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-md"
                    >
                      <ImageZoom
                        src={image}
                        alt={`${product.name} - View ${index + 2}`}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                  {product.category}
                </p>
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                  {product.name}
                </h1>
                <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                  ${product.price.toLocaleString()}
                </p>
              </div>

              <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                  Description
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {product.dimensions && (
                <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                    Dimensions
                  </h2>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Width
                      </p>
                      <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                        {product.dimensions.width} {product.dimensions.unit}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Height
                      </p>
                      <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                        {product.dimensions.height} {product.dimensions.unit}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Depth
                      </p>
                      <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                        {product.dimensions.depth} {product.dimensions.unit}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
                <button className="w-full py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-semibold text-lg hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors">
                  Contact for Availability
                </button>
              </div>

              <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-6">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Product Information
                </h3>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Premium quality materials</li>
                  <li>• Professional assembly available</li>
                  <li>• 1-year warranty included</li>
                  <li>• Free consultation with our design team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
