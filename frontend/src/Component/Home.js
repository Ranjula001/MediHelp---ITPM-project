import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const HomeButton = () => {

    return(
        <>
        <div className="row">
            <div className="col-md-3">
                <Link to = '/adminHome'> <FiHome /> </Link>
            </div>
        </div>
        </>
    )
};

export default HomeButton;