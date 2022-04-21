import styles from "./Features.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faShop,
	faEarthOceania,
	faTruckFast,
	faBadgeDollar,
} from "@fortawesome/pro-light-svg-icons";

const Features = () => {
	return (
		<div className={styles.Features}>
			<div className={styles.Features__Container}>
				<span className={styles.Features__Container__Block}>
					<FontAwesomeIcon
						className={styles.Features__Container__Block__Icon}
						icon={faEarthOceania}
					/>
					<p className={styles.Features__Container__Block__Text}>
						AUSTRALIAN MADE
					</p>
				</span>
				<span className={styles.Features__Container__Block}>
					<FontAwesomeIcon
						className={styles.Features__Container__Block__Icon}
						icon={faTruckFast}
					/>
					<p className={styles.Features__Container__Block__Text}>
						FREE SHIPPING > $300
					</p>
				</span>
				<span className={styles.Features__Container__Block}>
					<FontAwesomeIcon
						className={styles.Features__Container__Block__Icon}
						icon={faShop}
					/>
					<p className={styles.Features__Container__Block__Text}>
						IN-STORE PICKUP
					</p>
				</span>
				<span className={styles.Features__Container__Block}>
					<FontAwesomeIcon
						className={styles.Features__Container__Block__Icon}
						icon={faBadgeDollar}
					/>
					<p className={styles.Features__Container__Block__Text}>
						APPLE & GOOGLE PAY
					</p>
				</span>
			</div>
		</div>
	);
};

export default Features;
