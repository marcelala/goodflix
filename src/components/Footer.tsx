import Icon from "./Icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        ©{currentYear}
        <a href="https://marcelaf-portfolio.web.app/">Marcela Felix Fortis</a>
      </p>
    </footer>
  );
}
