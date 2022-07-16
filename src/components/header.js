import TopIcons from "./topIcons"
import TopLogos from "./topLogos"

export default function Header() {
  return (
      <header>
        <nav>
          <TopLogos />
          
          <img class="mobile" src="./images/logo.png" alt="" />

          <input type="text" placeholder="Pesquisar" />

          <TopIcons />
        </nav>
      </header>
  )
}