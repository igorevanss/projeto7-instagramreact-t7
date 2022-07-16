import About from "./about";
import Rights from "./rights";
import Suggestions from "./suggestions";
import UserProfile from "./userProfile";

export default function SideBar() {
  return (
    <aside>
          <UserProfile />
          <Suggestions />
          <About />
          <Rights />
    </aside>
  )
}