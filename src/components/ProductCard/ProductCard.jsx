import {useContext, useEffect, useState} from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = ({product}) => {
	return (
		<div className={styles.ProductCard}>
			<a href="">
				<img
					src={product.image}
					alt="shoe"
				/>
			</a>
			<div className={styles.ProductCard__Text}>
				<div className={styles.ProductCard__Text__Brand}>
					{product.brand}
				</div>
				<div className={styles.ProductCard__Text__Model}>
					{product.model}
				</div>
				<span className={styles.ProductCard__Text__Price}>
					{product.price}
				</span>
			</div>
		</div>
	);
};

export default ProductCard;
