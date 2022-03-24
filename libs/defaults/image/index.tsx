import NextImage, {ImageProps} from 'next/image';

export function Image({...props}: Omit<ImageProps, 'unoptimized'>) {
	return <NextImage {...props} unoptimized/>;
}
