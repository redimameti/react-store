import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductGrid.module.scss";

const ProductGrid = ({shoes}) => {
	return (
		<div className={styles.ProductGrid}>
			<h3 className={styles.ProductGrid__Header}>OUR COLLECTION</h3>
			<div className={styles.ProductGrid__Products}>
				{shoes.map((shoe, index) => {
					return <ProductCard key={index} product={shoe} />;
				})}
			</div>
		</div>
	);
};

export default ProductGrid;
