const Footer = () => {
  return (
    <footer className="grid grid-cols-12">
      <figure className="col-start-3 col-span-2">
        <img src="/images/footer.jpg" alt="footer_image" className="w-4/5" />
      </figure>
      <div className="flex flex-col text-left col-span-2">
        <h4 className="text-lg">Document Navigation</h4>
        <ul>
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
      <div className="flex flex-col text-left col-span-2">
        <h4 className="text-2xl">Contact</h4>
        <ul>
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
      <div className="flex flex-col text-left col-span-2">
        <h4 className="text-2xl">Social Media Links</h4>
        <ul>
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
