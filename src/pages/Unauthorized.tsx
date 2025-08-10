import { Link } from "react-router";

const Unauthorized = () => {
    return (
        <div>
            Muri kha tui authorized na
            <Link to="/">Home</Link>
        </div>
    );
};

export default Unauthorized;