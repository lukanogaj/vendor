import styles from "./index.module.scss";
import { useState } from "react";
import dataForVendors from "../../VendorDataArray";
import AccordionItem from "../AccordionItem";

import { ChevronUp, ChevronDown } from "../media/icons";

const AccordionCard = () => {
	const [isOpen, setIsOpen] = useState(null);
	const [selected, setSelected] = useState(null);
	// On clicks functions
	// Accordion OnCLick function

	/// Function to create unique values array
	const uniqueVendors = dataForVendors.filter(function (item, index) {
		return (
			index ===
			dataForVendors.findIndex(function (obj) {
				return item.name === obj.name;
			})
		);
	});

	// Function to group the object with same names
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

	// Function to change classes for the accordion content

	const handleToogle = (id) => {
		console.log("clicked", id);
		if (id === selected) {
			return setSelected(null);
		} else {
			setSelected(id);
		}
	};

	return (
		<div className={styles.accordion}>
			<h1>Vendors</h1>
			{groupedVendors.map((card) => (
				<div
					key={card.id}
					className={styles.accordionCard}
					onClick={() => handleToogle(card.vendor_id)}
				>
					<div className={styles.accordionCardInner}>
						<h3>{card.vendor_name}</h3>
						{selected === card.vendor_id ? <ChevronUp /> : <ChevronDown />}
					</div>
					<AccordionItem selected={selected} />
				</div>
			))}
		</div>
	);
};

export default AccordionCard;
