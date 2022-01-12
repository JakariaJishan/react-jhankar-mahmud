import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div>
      this is home page
      <Link to={'/private'}>go to private</Link>
    </div>
  );
};

export default Home;
