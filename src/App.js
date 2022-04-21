import {useState, useEffect} from "react";
import {getShoes} from "./services/server";
import NavBar from "./components/NavBar";
import styles from "./App.module.scss";
import products from "./services/shoes";
import Features from "./components/Features/Features";
import CarouselSection from "./containers/CarouselSection/CarouselSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductGrid from "./containers/ProductGrid/ProductGrid";
import ProductPage from "./containers/ProductPage";

function App() {
	const [shoes, setShoes] = useState([]);

	const getData = async () => {
		const data = await getShoes();
		setShoes(data);
	};

	useEffect(() => {
		getData();
	}, []);

	console.log(shoes);

	return (
		<div className={styles.App}>
			{/* <ProductPage /> */}
			<NavBar />
			<HeroSection />
			<Features />
			<CarouselSection />
			<ProductGrid shoes={products} />
		</div>
	);
}

export default App;
