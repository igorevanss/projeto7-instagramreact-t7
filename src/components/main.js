import Stories from "./stories"
import Feed from "./feed"
import SideBar from "./sideBar"

export default function Main() {
  return (
      <main>
        <div class="content">
          <div class="profiles">
          <Stories />
          <Feed />
          </div>
        </div>
        <SideBar />
      </main>
  )
}