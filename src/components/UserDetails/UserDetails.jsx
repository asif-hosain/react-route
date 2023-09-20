import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {

    const navigate = useNavigate()
    const handleGoBack = () =>{
        navigate('/users');
    }

    const user = useLoaderData()
    const{name,website}=user;
    return (
        <div>
            <h2>Details abour User: {name}</h2>
            <p>Visit Us: {website}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default UserDetails;