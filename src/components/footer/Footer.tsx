import { footerLinks } from "../../data/footerLinks";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = footerLinks.map(({ id, url, text }) => (
    <a href={url} key={id}>
      <li>{text}</li>
    </a>
  ));

  return (
    <footer>
      <div className="footer-content">
        <p>Questions? Call 020-79 06 35</p>
        <ul className="footer-content">{links}</ul>
        <p>
          ©{currentYear}
          <a href="https://marcelaf-portfolio.web.app/">Marcela Felix Fortis</a>
        </p>
      </div>
    </footer>
  );
}
