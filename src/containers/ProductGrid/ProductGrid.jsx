import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductGrid.module.scss";

const ProductGrid = () => {
	return (
		<div className={styles.ProductGrid}>
			<h3 className={styles.ProductGrid__Header}>OUR COLLECTION</h3>
			<div className={styles.ProductGrid__Products}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
			</div>
		</div>
	);
};

export default ProductGrid;
