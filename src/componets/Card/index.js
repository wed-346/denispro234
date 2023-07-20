import React from 'react';
 import './styles.css';
import cn from 'classnames';


 const CardPhotoBlock = ({imgUrl, className, likes, comments, isLikedByYou}) => {
	return (
		<div className={cn("cnCardRoot", className )}>
          <img src={imgUrl} alt={imgUrl} className="cnCradPhotoimg"/>
			 <div className="cnCardHover" />
			 <div className="cnCardIconRoot">
				<i className={cn(`${isLikedByYou ? 'fas' : 'fa'} fa-heart`, "cnCardIconNumberfarfas")} />
				<span className="cnCardNumber">{likes}</span>
				<i className={cn("fas fa-comment", "cnCardIconNumberfarfas")} />
				<span className="cnCardNumber">{comments}</span>
			 </div>

			

		</div>
	);
 };
 export default CardPhotoBlock;