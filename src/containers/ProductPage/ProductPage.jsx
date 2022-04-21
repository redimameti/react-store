import NavBar from "../../components/NavBar";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
	return (
		<>
			<NavBar />
			<div className={styles.ProductPage}>
				<div className={styles.ProductPage__Container}>
					<div className={styles.ProductPage__Container__Img}>
						<img
							src="https://cdn.shopify.com/s/files/1/0284/2610/9000/products/Alden-Tassel-Moccasin-Color-8-Cordovan-Front-Angle_1200x900.jpg?v=1627883821"
							alt="shoes"
						/>
					</div>
					<div className={styles.ProductPage__Container__Section}>
						<div
							className={
								styles.ProductPage__Container__Section__MainDetails
							}>
							<h2
								className={
									styles.ProductPage__Container__Section__MainDetails__Model
								}>
								TASSEL MOCCASIN COLOR 8 SHELL CORDOVAN
							</h2>
							<h3
								className={
									styles.ProductPage__Container__Section__MainDetails__Brand
								}>
								Alden
							</h3>
							<h3
								className={
									styles.ProductPage__Container__Section__MainDetails__Price
								}>
								<span>$1,000.00</span>
								<span
									className={
										styles.ProductPage__Container__Section__MainDetails__Price__Tax
									}>
									Tax included. Shipping calculated at
									checkout.
								</span>
							</h3>
						</div>
						<div
							className={
								styles.ProductPage__Container__Section__Purchase
							}>
							<div
								className={
									styles.ProductPage__Container__Section__Purchase__Options
								}>
								<select
									name="Size"
									id="size"
									className={
										styles.ProductPage__Container__Section__Purchase__Options__Dropdown
									}>
									<option value="1">1</option>
									<option value="2">2</option>
								</select>
								<select
									name="Color"
									id="color"
									className={
										styles.ProductPage__Container__Section__Purchase__Options__Dropdown
									}>
									<option value="Black">Black</option>
									<option value="Brown">Brown</option>
								</select>
							</div>
							<div
								className={
									styles.ProductPage__Container__Section__Purchase__Buy
								}>
								<button
									className={
										styles.ProductPage__Container__Section__Purchase__Buy__Button
									}>
									ADD TO CART
								</button>
								<span
									className={
										styles.ProductPage__Container__Section__Purchase__Buy__Qty
									}>
									QTY LEFT: 4
								</span>
							</div>
						</div>
						<div
							className={
								styles.ProductPage__Container__Section__Description
							}>
							<h3
								className={
									styles.ProductPage__Container__Section__Description__Header
								}>
								PRODUCT DESCRIPTION
							</h3>
							<p
								className={
									styles.ProductPage__Container__Section__Description__Para
								}>
								Integer vel orci quis sapien posuere maximus.
								Maecenas sit amet semper libero. Nulla sed justo
								ligula. Duis sit amet bibendum leo. Mauris
								tempus ipsum ac varius rutrum. Quisque in ornare
								odio, eu accumsan enim. Vestibulum imperdiet,
								justo mollis ullamcorper elementum, magna tortor
								viverra elit, pellentesque finibus tellus magna
								eget purus. Cras pulvinar finibus nisl, vel
								ultricies est tempor sed. Orci varius natoque
								penatibus et magnis dis parturient montes,
								nascetur ridiculus mus. Integer elit lectus,
								dapibus.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductPage;
