import logo from "../assets/CristalLogo.png";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { GrContact } from "react-icons/gr";
import styles from "../component_css/Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { useDataContext } from "../contexts/DataProvider";

function Header() {
  const { allList } = useDataContext();
  let likedCount = 0;
  allList.forEach((li) => {
    if (li.liked == true) {
      likedCount += 1;
    }
  });
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="Cristal Export" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <AiOutlineHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/wishList">
              <AiOutlineHeart /> {likedCount > 0 ? likedCount : null} Wish List
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <GrContact /> Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
