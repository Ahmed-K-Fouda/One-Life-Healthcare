import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src="../../public/logo/one-life-logo-white.png" alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
