import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="bg-light grid lg:grid-cols-12 grid-cols-4 lg:py-6 py-2 lg:px-0 px-2 items-center">
      <Link to={"/"}>
        <figure className="lg:col-start-3 lg:col-span-2 col-span-1">
          <img src="/images/logo.svg" alt="logo" className="" />
        </figure>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
