import './Post.css'
const Post = ({postInfo}) => {
    const {userId, id, title, body} = postInfo;
    return (
        <div className="post">
            <h4>{userId}</h4>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Post;