import styles from "./index.module.scss";
import { Children, useState } from "react";
import dataForVendors from "../../VendorDataArray";

import { ChevronUp, ChevronDown } from "../media/icons";

const AccordionCard = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(-1);
	// On clicks functions
	// Chevron function
	const handleChevron = () => {
		setIsOpen(!isOpen);
		console.log("Clicked");
	};

	// Accordion OnCLick function
	const handleClick = (index) => {
		setActiveIndex(index === activeIndex ? -1 : index);
		console.log("clicked");
	};

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
	return (
		<div className={styles.accordion}>
			<div className={styles.accordionHeader}>
				<h1>Vendors</h1>
				{groupedVendors.map((card, index) => (
					<div
						key={card.vendor_id}
						className={styles.accordionCard}
						onClick={() => handleClick(index)}
					>
						<h3>{card.vendor_name}</h3>
						<div onClick={() => handleChevron()}>
							{children}
							<div>{isOpen ? <ChevronUp /> : <ChevronDown />}</div>
						</div>
					</div>
				))}
			</div>

			{/* <div onClick={() => handleChevron()}>
				{children}
				<div>{isOpen ? <ChevronUp /> : <ChevronDown />}</div>
			</div> */}
		</div>
	);
};

export default AccordionCard;
