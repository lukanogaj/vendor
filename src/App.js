import "./App.css";
import Layout from "./components/Layout";
import VendorCard from "./components/VendorCard";
import VendorDataForm from "./components/VendorData";

function App() {
	return (
		<Layout>
			<VendorCard />
			<VendorDataForm />
		</Layout>
	);
}

export default App;
