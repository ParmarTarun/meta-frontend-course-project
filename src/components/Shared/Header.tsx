import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex bg-primary">
      <img src="/images/Logo.svg" alt="logo" />
      <Nav />
    </header>
  );
};

export default Header;
