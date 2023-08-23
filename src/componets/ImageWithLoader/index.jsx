import { useState } from 'react';
import './styles.css';
import cn from 'classnames';
import { Bars } from 'react-loader-spinner';

const ImagewithLoader = (src, alt, className) => {
	const [isImgLoading, setIsImgLoading] = useState(false);
	const [isImgError, setIsImgError] = useState(false);

	const onError = () => {
		setIsImgError(true);
		setIsImgLoading(false);

	};

	return (
		<div className={cn('cnImageWithLoaderRoot', className)}>
			{!isImgLoading && <div className="cnImageWithLoaderWrapper">  {isImgError ? 'err' : <Bars color="000BFF" width={15} height={15} />} </div>}
			<img src={src} alt={alt} className={cn("cnImageWithLoaderImg", isImgLoading && 'cnImageWithIMGLoading')} onError={onError} onLoad={() => setIsImgLoading(true)} />
		</div>

	)

};
export default ImagewithLoader;