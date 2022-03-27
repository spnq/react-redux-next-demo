import NextImage, {ImageProps} from 'next/image';

export function Image({...props}: Omit<ImageProps, 'optimized' | 'unoptimized'>) {
	return <NextImage {...props} unoptimized/>;
}
