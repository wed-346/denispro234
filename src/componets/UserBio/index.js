import React, { useEffect, useState } from 'react';
import './styles.css';
import UserCounter from '../UserCounter';
import Button from '../Buttons';

const UserBio = ({ avatarUrl,
	nickname,
	subscribed,
	subscribers,
	firstName,
	lastName,
	description,
	url,
	isMyPage,
	isSubscribed
}) => {
	const [btnProps, setBtnProps] = useState({ onClick: () => false, children: 'Подписаться' });
	useEffect(() => {
		if (isMyPage) {
			setBtnProps({ onClick: () => false, children: 'Редактировать' });
		} else if (isSubscribed) {
			setBtnProps({ onClick: () => false, children: 'Отписаться' });


		} else {
			setBtnProps({ onClick: () => false, children: 'Подписаться' });

		}

	}, [isMyPage, isSubscribed]);
	return (
		<div className="cnUserBioRoot">
			<div>
				<img className='cnUserBioImg' src={avatarUrl} alt="avatar" />
			</div>
			<div className="cnUserBioinfo">
				<div className="cnUserBioContainerInfo">
					<span className="cnUserBionicname">{nickname}</span>
					<Button {...btnProps} />
				</div>
				<div className="cnUserBioContainerInfo">
					<UserCounter count={5} text="Публикаций" className="cnIserBioCounterPublicution" />
					<UserCounter count={subscribers} text="Подписчиков" className="cnIserBioCounterPublicution" />
					<UserCounter count={subscribed} text="Подписок" className="cnIserBioCounterPublicution" />
				</div>
				<div className="cnUserBioContainerInfo">
					<span className="cnUserBioNamefirstlast">{firstName} {lastName}</span>
				</div>
				<div className="cnUserBioContainerInfo">
					<span>{description}</span>
				</div>
				<a href={url}>{url}</a>

			</div>

		</div>
	);


};
export default UserBio;

