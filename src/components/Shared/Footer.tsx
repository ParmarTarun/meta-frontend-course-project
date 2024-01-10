const Footer = () => {
  return (
    <footer className="grid lg:grid-cols-12 grid-cols-2 grid-rows-2 px-2">
      <figure className="lg:col-start-3 lg:col-span-2 col-span-1">
        <img src="/images/footer.jpg" alt="footer_image" className="w-4/5" />
      </figure>
      <div className="flex flex-col text-left lg:col-span-2 col-span-1">
        <h4 className="lg:text-xl">Document Navigation</h4>
        <ul className="lg:text-base text-sm">
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
      </div>
      <div className="flex flex-col text-left lg:col-span-2 col-span-1">
        <h4 className="lg:text-xl">Contact</h4>
        <ul className="lg:text-base text-sm">
          <li>
            <a href="/">Address1</a>
          </li>
          <li>
            <a href="/">Phone no</a>
          </li>
          <li>
            <a href="/">Email</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col text-left lg:col-span-2 col-span-1">
        <h4 className="lg:text-xl">Social Media Links</h4>
        <ul className="lg:text-base text-sm">
          <li>
            <a href="/">Address1</a>
          </li>
          <li>
            <a href="/">Phone no</a>
          </li>
          <li>
            <a href="/">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
