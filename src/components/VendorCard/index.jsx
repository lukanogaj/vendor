import styles from "./index.module.scss";
import dataForVendors from "../../VendorData";
import { ChevronUp, ChevronDown } from "../media/icons";
import { useState } from "react";

const VendorCard = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleCard = () => {
		console.log("Clicked");
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.hero} onClick={handleCard}>
			{dataForVendors.map((card) => (
				<div key={card.id} className={styles.card}>
					<h3>{card.name}</h3>
					<ChevronUp />
				</div>
			))}
		</div>
	);
};

export default VendorCard;
