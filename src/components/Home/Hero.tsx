const Hero = () => {
  return (
    <div className="grid lg:grid-cols-5 grid-cols-1">
      <div className="lg:col-span-2 col-span-1 hero-content">
        <h1 className="lg:text-6xl text-4xl">Little Lemon</h1>
        <h1>Chicago</h1>
        <h4>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </h4>
        <button className="btn-primary lg:mt-10 mt-4">
          <h3>Reserve a table</h3>
        </button>
      </div>
      <div className="lg:col-start-4 lg:col-span-2 col-span-1 mt-4">
        <figure className="h-96">
          <img src="/images/hero.jpg" alt="hero_image" />
        </figure>
      </div>
    </div>
  );
};

export default Hero;
