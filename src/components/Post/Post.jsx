import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id,title}= post;
    
    const navigate = useNavigate();

    const handleShoeDetail = () =>{
        navigate(`/post/${id}`)
    }

    const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }
    

    return (
        <div style={postStyle}>
            <h4>ID od Post: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link> <br />
            <Link to={`/post/${id}`}> <button>Details</button></Link><br /> 
            <button onClick={handleShoeDetail}>Show Detail</button>
        </div>
    );
};

export default Post;