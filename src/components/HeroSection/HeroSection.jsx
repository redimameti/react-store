import styles from "./HeroSection.module.scss";

const HeroSection = () => {
	return (
		<div className={styles.HeroSection}>
			<div className={styles.HeroSection__Container}>
				<div className={styles.HeroSection__Container__Inner}>
					<h3>"Shoes speak louder than words"</h3>
					<p>
						Donec cursus, lorem quis laoreet vulputate, neque nibh
						vehicula ex, quis elementum elit purus lacinia ligula.
					</p>
					<p>Made in Australia.</p>
					<button>SHOP THE COLLECTION</button>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
