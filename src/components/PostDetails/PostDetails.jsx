import { Navigate, useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData();
    const{id,title,body}= post;

    const navigate = useNavigate()
    
    const handleGoBack = () =>{
        navigate('/posts')
    }

    return (
        <div>
            <h3>post details About : {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;