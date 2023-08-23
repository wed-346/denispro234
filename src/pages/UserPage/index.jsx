import { useDispatch, useSelector } from "react-redux";
import Layout from "../../componets/Layout";
import './styles.css';
import UserBio from "../../componets/UserBio";
import CardPhotoBlock from "../../componets/Card";

import { useEffect } from "react";
import { getPostsByUser, sendCommentsOnUserPage, toggleLikeInPost } from "../../redux/actions/postsByUser";
import { useParams } from "react-router-dom";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Bars } from "react-loader-spinner";
import { getUser } from "../../redux/actions/users";




const UserPage = () => {
	const authorizedUser = useSelector(state => state.users.authorizedUser);
	const user = useSelector(state => state.users.user);
	const posts = useSelector(state => state.postsByUser.posts)
	const isPostsError = useSelector(state => state.postsByUser.isPostsError)
	const isPostsLoading = useSelector(state => state.postsByUser.isPostsLoading);
	const isUserLoading = useSelector(state => state.users.isUserLoading);
	const isUserError = useSelector(state => state.users.isUserError);
	const muateLoading = useSelector(state => state.photos.isMutateLoading);
	const dispatch = useDispatch();



	const { id } = useParams();
	const [postsForRender, SetPostsForRender] = useState([]);



	const [page, setPage] = useState(0);


	useEffect(() => {
		const newPost = [...posts];
		if (newPost.length) {
			SetPostsForRender(newPost.splice(0, 12));

		}

	}, [posts]);
	useEffect(() => {
		dispatch(getPostsByUser(id));
		dispatch(getUser(id));




	}, [id, dispatch]);

	const onLikeClick = (photoId) => {
		dispatch(toggleLikeInPost(authorizedUser.id, photoId, id))
	};
	const onCommentSendClick = (photoId, comment) => {
		dispatch(sendCommentsOnUserPage(authorizedUser.nickname, photoId, user.id, comment));
	};



	const nextHandler = () => {
		const newPosts = [...posts];
		const offset = 12 * (page + 1);

		SetPostsForRender([...postsForRender, ...newPosts.splice(offset, offset + 12)])
		setPage(page + 1);

	};


	return (
		<Layout nickName={authorizedUser.nickname} id={authorizedUser.id} avatarUrl={authorizedUser.avatarUrl} >
			{isPostsLoading || isUserLoading ? <div className="cnMainLOaderContainer">
				<Bars color="#000BFF" height={80} width={80} />
			</div> : <div className="cnUserPageContainer">
				{!isUserError && <UserBio
					avatarUrl={user.avatarUrl}
					nickname={user.nickname}
					subscribed={user.subscribers.length}
					subscribers={user.subscribers.length}
					firstName={user.firstName}
					lastName={user.lastName}
					description={user.description}
					url={user.url}
					isMyPage={id == authorizedUser.id}
					isSubscribed={user.subscribers.includes(authorizedUser.id)}

				/>}

				<div className="cnUserPageCardPhotoRoot">

					{postsForRender.length ? <InfiniteScroll
						dataLength={postsForRender.length}
						next={nextHandler}
						hasMore={postsForRender.length < posts.length}
						loader={
							<div className="cnMainLOaderContainer">
								<Bars color="#000BFF" height={15} width={15} />
							</div>}
						endMessage={
							<p className="cnMainLOaderContainer">Thats all!</p>
						}
						className="cnUserPageScrool"

					>


						{postsForRender.map(({ imgUrl, likes, comments, isLikedByYou, id }) =>

							< CardPhotoBlock

								key={id}
								imgUrl={imgUrl}
								className="cnUserPageCardBlock"
								likes={likes.length}
								comments={comments}
								isLikedByYou={likes.includes(authorizedUser.id)}
								onLikeClick={() => onLikeClick(id)}
								userData={{
									userName: user.nickname,
									avatarUrl: user.avatarUrl,
									userId: user.id,


								}}


								onCommentSumbit={(comment) => onCommentSendClick(id, comment)}
								isMutateCommentLoading={muateLoading}



							/>)}

					</InfiniteScroll> : !isPostsError && <p className="cnUserPagenoPosts">User dont have posts</p>}



				</div>
			</div>}
		</Layout >

	);
};

export default UserPage;