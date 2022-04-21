import {useContext, useEffect, useState} from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = () => {
	return (
		<div className={styles.ProductCard}>
			<a href="">
				<img
					src="https://cdn.shopify.com/s/files/1/0284/2610/9000/products/Alden-Indy-Workboot-Brown-Chromexcel-Front-Angle_540x.jpg?v=1627619978"
					alt="shoe"
				/>
			</a>
			<div className={styles.ProductCard__Text}>
				<a href="" className={styles.ProductCard__Text__Brand}>
					BRAnd & NAME
				</a>
				<a href="" className={styles.ProductCard__Text__Model}>
					Model Name & Crossbones Navy Velvet F-width
				</a>
				<span className={styles.ProductCard__Text__Price}>
					$1,000.00
				</span>
			</div>
		</div>
	);
};

export default ProductCard;
