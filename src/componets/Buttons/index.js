import cn from "classnames";
import './styles.css';

const Button = (props) => {
	return (
		<button {...props} className={cn('cnButoon', props.className)} />
	)

}
export default Button;