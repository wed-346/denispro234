import './styles.css';
const Comment = ({
    nickname,
    text
    
}) => {
    return (
        <div className="cnCommentRoot">
            <span className="cnCommentText">{nickname}:</span>
            <span>{text}</span>
        </div>

    );
};
export default Comment; 