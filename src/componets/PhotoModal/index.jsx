import Modal from 'react-modal';
import UserBage from '../UserBadge';
import { useEffect } from 'react';
import Comment from '../comment';
import { nanoid } from 'nanoid';
import TextArea from '../TextArea';
import './styles.css';

const PhotoModal = ({
	isCommentLoading,
	commentValue,
	setCommentValue,
	onCommentSumbit,
	isOpen,
	onClose,
	imgUrl,
	userName,
	avatarUrl,
	userId,
	comments,
	likes,
	isLikedByYou,
	onLikeClick,
}) => {
	useEffect(() => {
		const body = document.querySelector('body');
		if (isOpen) {
			body.classList.add('cnBodyOverflow');

		} else {
			body.classList.remove('cnBodyOverflow');

		}


	}, [isOpen]);
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			className="cnModall"
			overlayClassName="cnModalOverley"
			ariaHideApp={false}


		>

			<div className="cnPhotoModalRoot">
				<div className="cnModalPhotowrapper">
					<img src={imgUrl} alt={imgUrl} className="cnModalImg" />
				</div>
				<div className="cnModalCommentsBlock">
					<div>
						<div className="cnModalHeader">
							<UserBage nickName={userName} avatarUrl={avatarUrl} id={userId} />
						</div>
						<div className="cnModalComments">
							{comments.map(comment => <Comment key={nanoid()} {...comment} />)}

						</div>
					</div>
					<div>
						<div className="cnModalIcons">
							<i onClick={onLikeClick} className={`${isLikedByYou ? 'fas' : 'far'} fa-heart cnModalIMGIcons `} />

						</div>
						<TextArea
							value={commentValue}
							onChange={setCommentValue}
							placeholder='Ведите коментарий'
							buttonText="Отправить"
							onSumbit={onCommentSumbit}
							isLoading={isCommentLoading}
						/>
					</div>

				</div>



			</div>
		</Modal>
	);

};

export default PhotoModal;