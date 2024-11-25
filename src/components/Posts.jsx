import { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts )
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
        
    }, [])
    return (
        <div className="">
            <h3>Post Length : {posts.length}</h3>
            {
                posts.map(post => <Post key={post.id} postInfo={post}></Post>)
            }
        </div>
    );
};

export default Posts;