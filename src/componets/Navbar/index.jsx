import UserBage from '../UserBadge';
import './styles.css';
const Navbar = ({
	nickName,
	avatarUrl,
	id,
}) => {
	return (
		<div className="cnNavbarrott">

			<div className="cnnavbarwrapper">
				<a href="/" className="cnNavbarButton">KIBZUNARIA</a>
				<UserBage nickName={nickName} avatarUrl={avatarUrl} id={id} />

			</div>

		</div>

	);
};
export default Navbar;