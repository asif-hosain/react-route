import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Ooppsss!!!</h1>
            <p>{error.statusText || error.message }</p>
            {
                error.status == 404 && <div>
                    <h3>Page not Found</h3>
                    <Link to="/"><button>Back To Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;