'use client';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Image from 'next/image';

interface ImageZoomProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ImageZoom({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
}: ImageZoomProps) {
  return (
    <Zoom>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{ cursor: 'zoom-in' }}
      />
    </Zoom>
  );
}
