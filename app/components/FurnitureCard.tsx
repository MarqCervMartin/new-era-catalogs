'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FurnitureItem } from '../types/furniture';

interface FurnitureCardProps {
  item: FurnitureItem;
}

export default function FurnitureCard({ item }: FurnitureCardProps) {
  return (
    <Link href={`/product/${item.id}`}>
      <div className="h-full bg-white dark:bg-zinc-900 p-6 flex flex-col items-center justify-center cursor-pointer group">
        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
          <Image
            src={item.images[0]}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="text-center w-full">
          <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
            {item.category}
          </p>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
            {item.description}
          </p>
          <p className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            ${item.price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
