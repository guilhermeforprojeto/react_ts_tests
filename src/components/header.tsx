import { memo, useState } from "react";


function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  return <>
    <div className="dad">
      <section className="top-nav">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <div className="Logos">
          <div className="Logo">
            <h1>LOGO</h1>
          </div>
        </div>
        <input
          id="menu-toggle"
          type="checkbox"
          onChange={(event) => {
            setMenuToggle(event.target.checked);
          }}
          checked={menuToggle}
        />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <div className="options" onClick={() => setMenuToggle(false)}>
            <li>
              <a href="/"> Início </a>
            </li>
            <li>
              <a href="/contact"> Contato </a>
            </li>
            <li>
              <a href="/about"> Sobre </a>
            </li>
            <li>
              <a href="/login"> Entrar </a>
            </li>
            <li>
              <a href="/"> Suporte </a>
            </li>
          </div>
        </ul>
      </section>
    </div>
  </>
}

export default memo(Header)