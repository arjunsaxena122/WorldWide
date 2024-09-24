import { NavLink } from "react-router-dom";
import footerData from "../api/footer.json";
import { nanoid } from "nanoid";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

function Footer() {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerData.map(({ icon, title, details }) => (
          <div className="footer-contact" key={nanoid()}>
            <div className="icon">{footerIcon[icon]}</div>
            <div className="footer-contact-text">
              <p>{title}</p>
              <p>{details}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink
                  to="https://www.linkedin.com/in/arjun-saxena-474274202/"
                  target="_blank"
                >
                  Arjun Saxena
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="https://www.linkedin.com/in/arjun-saxena-474274202/">
                    LinkedIn
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://github.com/arjunsaxena122"
                    target="_blank"
                  >
                    Github
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
