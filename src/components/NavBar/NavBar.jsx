import styles from "./NavBar.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoePrints} from "@fortawesome/pro-solid-svg-icons";
import {
	faMagnifyingGlass,
	faUser,
	faCartShopping,
	faBars,
} from "@fortawesome/pro-light-svg-icons";

const NavBar = () => {
	return (
		<nav className={styles.NavBar}>
			<div className={styles.NavBar__Container}>
				<a href="" className={styles.NavBar__Container__Header}>
					<FontAwesomeIcon
						className={styles.NavBar__Container__Header__Icon}
						icon={faShoePrints}
						size="2x"
					/>
					<h1 className={styles.NavBar__Container__Header__Text}>
						Wingtip
					</h1>
				</a>

				<div className={styles.NavBar__Container__Links}>
					<a href="">BRANDS</a>
					<a href="">SHOES</a>
					<a href="">ACCESSORIES</a>
					<a href="">CLOTHING</a>
					<a href="">GIFTS</a>
				</div>

				<a className={styles.NavBar__Container__Icons}>
					<FontAwesomeIcon
						className={styles.NavBar__Container__Icons__Icon}
						icon={faMagnifyingGlass}
						size="sm"
					/>
					<FontAwesomeIcon
						className={styles.NavBar__Container__Icons__Icon}
						icon={faUser}
						size="sm"
					/>
					<FontAwesomeIcon
						className={styles.NavBar__Container__Icons__Icon}
						icon={faCartShopping}
						size="sm"
					/>
					<FontAwesomeIcon
						className={styles.NavBar__Container__Icons__Icon}
						icon={faBars}
						size="sm"
					/>
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
