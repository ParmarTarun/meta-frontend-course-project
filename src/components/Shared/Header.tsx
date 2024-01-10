import Nav from "./Nav";

const Header = () => {
  return (
    <header className="bg-light grid grid-cols-12 py-6">
      <figure className="col-start-3 col-span-2">
        <img src="/images/logo.svg" alt="logo" className="" />
      </figure>
      <Nav />
    </header>
  );
};

export default Header;
