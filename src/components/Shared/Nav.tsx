import { navData } from "../../data/nav";

const Nav = () => {
  return (
    <nav className="col-span-6 lg:mt-0 mt-2 lg:font-bold ">
      <ul className="flex lg:text-xl text-sm lg:gap-4 gap-2 justify-center items-center flex-wrap">
        {navData.map((l, i) => (
          <li key={i}>
            <a href={l.link} role="link">
              {l.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
