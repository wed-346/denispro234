

import Button from '../Buttons';
import './styles.css';

const TextArea = ({ value, onChange, placeholder, isLoading, onSumbit, buttonText }) => (
	<div className="cnContainerTextArea">
		<textarea
			value={value}
			onChange={e => onChange(e.target.value)}
			placeholder={placeholder}
			className="cnRoot"

		/>
		<Button disabled={isLoading} className="cnrootButton" onClick={onSumbit}>{buttonText}</Button>
	</div>
);

export default TextArea;
