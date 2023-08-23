
import { useState } from 'react';
import PhotoModal from '../PhotoModal';
import cn from 'classnames';
import ImagewithLoader from '../ImageWithLoader';
import './styles.css';


const CardPhotoBlock = ({ isMutateCommentLoading, imgUrl, className, likes, comments, isLikedByYou, onCommentSumbit, onLikeClick, id, userData, onCommentClick }) => {
	const [isModalVisible, setIssMobalVisible] = useState(false);
	const [comment, setComment] = useState('');



	return (
		<div className={cn("cnCardRoot", className)}>
			<ImagewithLoader className="cnCradPhotoimg" src={imgUrl} alt={imgUrl} />

			<div className="cnCardHover" />
			<div className="cnCardIconRoot">
				<i className={cn(`${isLikedByYou ? 'fa' : 'far'} fa-heart`, "cnCardIconNumberfarfas")} onClick={onLikeClick} />
				<span className="cnCardNumber cnCardNumbertwo">{likes}</span>
				<i className={cn("fas fa-comment", "cnCardIconNumberfarfas")} onClick={() => setIssMobalVisible(true)} />
				<span className="cnCardNumber ">{comments.length}</span>
			</div>
			<PhotoModal
				comments={comments}
				isOpen={isModalVisible}
				onClose={() => setIssMobalVisible(false)}
				{...userData}
				commentValue={comment}
				setCommentValue={setComment}
				onCommentSumbit={() => onCommentSumbit(comment)}
				isCommentLoading={isMutateCommentLoading}
				imgUrl={imgUrl}
				isLikedByYou={isLikedByYou}
				onLikeClick={() => onLikeClick(id)}


			/>




		</div>
	);
};
export default CardPhotoBlock;