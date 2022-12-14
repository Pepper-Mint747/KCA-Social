import { Link } from "react-router-dom";
// import { Dots } from "../../svg";

export default function ProfileMenu() {
  return (
    <div className="profile_menu_wrap">
      <div className="profile_menu">
        <Link to="/profile" className="profile_menu_active">
          Posts
        </Link>
        <Link to="/profile" className="hover1">
          About
        </Link>
        <Link to="/profile" className="hover1">
          Friends
        </Link>
      </div>
    </div>
  );
}
