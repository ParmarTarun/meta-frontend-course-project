import { footerData } from "../../data/footer";
import Section from "./Section";

const Footer = () => {
  return (
    <Section dark={true}>
      <footer className="grid lg:grid-cols-12 grid-cols-4 grid-rows-2 gap-4">
        <figure className="lg:col-span-3 col-span-2 ">
          <img src="/images/footer.jpg" alt="footer_image" className="w-4/5" />
        </figure>
        {footerData.map((d, i) => (
          <div
            className="flex flex-col text-left lg:col-span-3 col-span-2"
            key={i}
          >
            <>
              <h4 className="lg:text-xl font-semibold">{d.heading}</h4>
              <ul className="lg:text-base text-sm">
                {d.links.map((l) => (
                  <li>
                    <a href={l.link}>{l.name}</a>
                  </li>
                ))}
              </ul>
            </>
          </div>
        ))}
      </footer>
    </Section>
  );
};

export default Footer;
