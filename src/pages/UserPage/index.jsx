import { useSelector } from "react-redux";
import Layout from "../../componets/Layout";
import './styles.css';
import UserBio from "../../componets/UserBio";
import CardPhotoBlock from "../../componets/Card";

const UserPage = () => {
	const authorizedUser = useSelector(state => state.users.authorizedUser)
	return (
		<Layout nickName={authorizedUser.nickname} id={authorizedUser.id} avatarUrl={authorizedUser.avatarUrl} >
			<div className="cnUserPageContainer">
				<UserBio
					avatarUrl={authorizedUser.avatarUrl}
					nickname={authorizedUser.nickname}
					subscribed={authorizedUser.subscribers.length}
					subscribers={authorizedUser.subscribers.length}
					firstName={authorizedUser.firstName}
					lastName={authorizedUser.lastName}
					description={authorizedUser.description}
					url={authorizedUser.url}
				/>

				<div className="cnUserPageCardPhotoRoot">
					<CardPhotoBlock imgUrl="" className="cnUserPageCardBlock" />
					<CardPhotoBlock imgUrl="" className="cnUserPageCardBlock" />
					<CardPhotoBlock imgUrl="" className="cnUserPageCardBlock" />
				</div>
			</div>
		</Layout>

	);
};

export default UserPage;