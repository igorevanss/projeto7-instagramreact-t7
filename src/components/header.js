export default function Header() {
  return (
      <header>
        <nav>
          <div class="top-logos">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="vertical-line"></div>
            <img src="./images/logo.png" alt="" />
          </div>
          <img src="./images/logo.png" alt="" />
          <input type="text" placeholder="Pesquisar" />

          <div class="top-icons">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
          </div>
        </nav>
      </header>
  )
}