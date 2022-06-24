import React from "react";
import "./nav.css";

function Nav() {
  const [show, handleShow] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Image not avaible"
      />
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png "
      />
    </div>
  );
}

export default Nav;
