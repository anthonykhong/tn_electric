import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ updateUser }) {
  function handleLogOut() {
    userService.logOut();
    updateUser(null);
  }

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gray-200">
      <a href="/">
        <img className="h-8" src="" alt="Logo" />
      </a>
      <div className="flex items-center space-x-4">
        <Link className="" to="/">
          Home
        </Link>
        <Link className="" to="" onClick={handleLogOut}>
          Log Out
        </Link>
      </div>
    </nav>
  );
}
