import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function Home() {
	return (
		<div className="RootContainer">
			<div className="ContentContainer">
				<Header />
				<Navbar />
				<div style={{textAlign:"center", margin:"auto"}}><h1>Home view</h1></div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;