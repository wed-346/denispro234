import { useDispatch, useSelector } from "react-redux";
import DetalidCard from "../../componets/DetaliedCard";
import Layout from "../../componets/Layout";
import { useEffect, useState } from "react";
import { getPhotos, mutatePhoto, sendComments } from "../../redux/actions/photos";
import InfiniteScroll from "react-infinite-scroll-component";
import './styles.css';
import { Bars } from "react-loader-spinner";



const MainPage = () => {
	const photos = useSelector(state => state.photos.photos);
	const loading = useSelector(state => state.photos.isPhotosLoading);
	const authorizedUser = useSelector(state => state.users.authorizedUser)
	const total = useSelector(state => state.photos.totalPhotos);
	const dispatch = useDispatch();
	const muateLoading = useSelector(state => state.photos.isMutateLoading);
	const [page, setPage] = useState(1);



	useEffect(() => {
		dispatch(getPhotos(page))
		// eslint-disable-next-line 
	}, [page]);



	const nextHandler = () => {
		setPage(page + 1);
	};
	const onLikeClick = (photoId) => {
		dispatch(mutatePhoto(authorizedUser.id, photoId));
	};
	const onCommentSendClick = (photoId, comment) => {
		dispatch(sendComments(authorizedUser.nickname, photoId, comment));
	};

	return (

		<Layout nickName={authorizedUser.nickname} id={authorizedUser.id} avatarUrl={authorizedUser.avatarUrl}>
			<div className="cnMainPageRottBackendd">
				<InfiniteScroll
					dataLength={photos.length}
					next={nextHandler}
					hasMore={photos.length < total}
					loader={
						<div className="cnMainLOaderContainer">
							<Bars color="#000BFF" height={15} width={15} />
						</div>}
					endMessage={
						<p className="cnMainLOaderContainer">Thats all!</p>
					}
				>
					{photos.map(({ author, imgUrl, id, likes, comments }) => (
						<DetalidCard
							key={id}
							id={id}
							userName={author.nickname}
							userId={author.id}
							avatarUrl={author.avatarUrl}
							imgUrl={imgUrl}
							likes={likes.length}
							isLikedByYou={likes.includes(authorizedUser.id)}
							comments={comments}
							className="cnMainPageCardBody"
							onLikeClick={onLikeClick}
							onCommentSendClick={onCommentSendClick}
							muateLoading={muateLoading}
						/>
					))}
				</InfiniteScroll>
			</div>




		</Layout>

	);
};
export default MainPage;