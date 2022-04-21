import styles from "./CarouselSection.module.scss";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";

const CarouselSection = () => {
	return (
		<div className={styles.CarouselSection}>
			<h3 className={styles.CarouselSection__Header}>FEATURED</h3>
			<Carousel className={styles.CarouselSection__Main}>
				<div>
					<img src="https://cdn.shopify.com/s/files/1/0284/2610/9000/products/CJ-Maitland-Dark-Brown-Suede-Side_1200x900.jpg?v=1628214797" />
				</div>
				<div>
					<img src="https://cdn.shopify.com/s/files/1/0284/2610/9000/products/CJ-Maitland-Black-Suede-Side_1200x900.jpg?v=1628214410" />
				</div>
				<div>
					<img src="https://cdn.shopify.com/s/files/1/0284/2610/9000/products/Crockett-_-Jones-Pembroke-Whiskey-Cordovan-3_cf67d06c-848e-4ca1-8abc-219f4d9e8222_1200x900.jpg?v=1634001789" />
				</div>
			</Carousel>
		</div>
	);
};

export default CarouselSection;
