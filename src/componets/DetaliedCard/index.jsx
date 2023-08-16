import { useState } from 'react';
import cn from 'classnames';
import { nanoid } from 'nanoid';
import TextArea from '../TextArea';
import PhotoModal from '../PhotoModal';
import UserBage from '../UserBadge';
import Comment from '../comment';

import './styles.css';
const DetalidCard = ({
	userName,
	avatarUrl,
	userId,
	imgUrl,
	likes,
	isLikedByYou,
	comments,
	className,
	onLikeClick,
	id,
	onCommentSendClick,
	muateLoading,


}) => {
	const [isCommentShown, setIsCommentsShow] = useState(false);
	const [comment, setComment] = useState('');

	const [isModalVisible, setIssMobalVisible] = useState(false);
	const handleSendCommentClick = () => {
		if (comment) {
			onCommentSendClick(id, comment);
			setComment('');
		};
	};
	const rendercomment = () => {
		if (comments.length > 2 && !isCommentShown) {
			const commentsCopy = [...comments];
			const commentsForReally = commentsCopy.splice(comments.length - 2, 2);

			return (
				<>
					<span className="cnDetaliedCardIScOMMENT" onClick={() => setIsCommentsShow(true)}>{`Показать еще ${comments.length - commentsForReally.length} коментария`}</span>
					{commentsForReally.map((comment) => <Comment {...comment} key={nanoid()} />)}
				</>
			);
		}
		return comments.map((comment) => <Comment {...comment} key={nanoid()} />)

	};
	const onCloseModal = () => {
		setComment('');
		setIssMobalVisible(false);

	};
	const onOpenModal = () => {
		setComment('');
		setIssMobalVisible(true);

	};


	return (
		<div className={cn("cnCardRootD", className)}>
			<div className="cnCardDetaliedBody">
				<UserBage nickName={userName} avatarUrl={avatarUrl} id={userId} />
			</div>
			<div>
				<img src={imgUrl} alt="img" className="cnCardIMG" />
			</div>
			<div className="cnDetaliedButton">
				<i onClick={() => onLikeClick(id)} className={`${isLikedByYou ? 'fas' : 'far'} fa-heart cnDetaliedLikeIcon `} />
				<i className="fas fa-comment CnDetaliedCardComment" onClick={onOpenModal} />
			</div>
			<div className="Likecnn">
				{`Оценили ${likes} человек`}
			</div>
			<div className="cnDetaliedCardcommment">
				{rendercomment()}


			</div>
			<TextArea
				value={comment}
				onChange={setComment}
				placeholder='Ведите коментарий'
				isLoading={muateLoading}
				onSumbit={handleSendCommentClick}
				buttonText="Отправить"

			/>

			<PhotoModal
				comments={comments}
				isOpen={isModalVisible}
				onClose={onCloseModal}
				userName={userName}
				avatarUrl={avatarUrl}
				userId={userId}
				commentValue={comment}
				setCommentValue={setComment}
				onCommentSumbit={handleSendCommentClick}
				isCommentLoading={muateLoading}
				imgUrl={imgUrl}
				isLikedByYou={isLikedByYou}
				onLikeClick={() => onLikeClick(id)}


			/>



		</div>

	);
};
export default DetalidCard;
