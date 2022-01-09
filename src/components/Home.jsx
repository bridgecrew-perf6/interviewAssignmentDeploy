import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div className="text-center">
            <h3>Home</h3>
            <p className="home-title"><Link to='/question1/todo'>Q1 (To Do App)</Link></p>
            <p className="home-title"><Link to="/question2/users">Q2 (Fetch Users)</Link></p>
        </div>
    );
}
export default Home;