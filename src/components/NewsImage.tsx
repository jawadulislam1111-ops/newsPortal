import type { ImgHTMLAttributes } from 'react';
import { responsiveImage } from '../lib/images';

type NewsImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  priority?: boolean;
};

export function NewsImage({
  src, alt, priority = false, sizes, width, height, srcSet,
  loading = 'lazy', decoding = 'async', fetchPriority, ...props
}: NewsImageProps) {
  const image = responsiveImage(src);
  return (
    <img
      {...props}
      src={src}
      alt={alt}
      width={width ?? image?.width}
      height={height ?? image?.height}
      srcSet={srcSet ?? image?.srcSet}
      sizes={sizes ?? image?.sizes}
      loading={priority ? 'eager' : loading}
      fetchPriority={priority ? 'high' : fetchPriority}
      decoding={decoding}
    />
  );
}
