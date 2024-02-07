import styles from "./index.module.scss";
import dataForVendors from "../../VendorData";
import { ChevronUp, ChevronDown } from "../media/icons";
import { useState } from "react";

const VendorCard = () => {
	const [isOpen, setIsOpen] = useState(false);
	// USe States for filter method
	// const [filteredVendors, setFilteredVendors] = useState(dataForVendors);
	// const [vendorId, setVendorId] = useState("");
	// const [name, setName] = useState("");
	// const [group, setGroup] = useState("");

	/// Function to create unique values array
	const uniqueVendors = dataForVendors.filter(function (item, index) {
		return (
			index ===
			dataForVendors.findIndex(function (obj) {
				return item.name === obj.name;
			})
		);
	});
	// Function to group the obejct with same names

	/// Array of objects nested structure tree
	const groupedVendors = [];
	for (const uniq of uniqueVendors) {
		const structure = {
			vendor_id: uniq.id,
			vendor_name: uniq.name,
			group: [],
		};
		dataForVendors.forEach((v) => {
			if (v.name === uniq.name) {
				structure.group.push(v);
			}
		});

		groupedVendors.push(structure);
	}
	console.log(groupedVendors);

	// Function to show div with input and details
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
