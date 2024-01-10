const Nav = () => {
  return (
    <nav className="col-span-6 lg:mt-0 mt-2 ">
      <ul className="flex lg:text-xl text-sm lg:gap-4 gap-1 justify-center items-center">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservation</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
