import styles from "./index.module.scss";
import dataForVendors from "../../VendorDataArray";
import { ChevronUp, ChevronDown } from "../media/icons";
// import AccordionItem from "../AccordionItem";
import { useState, useRef } from "react";
import AccordionCard from "../AccordionCard";

const VendorCard = () => {
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

	//Accordion component the one is not visible
	const AccordionItem = ({ activeIndex, isOpen }) => {
		const contentHeight = useRef();
		return (
			<div
				className={
					!activeIndex ? `${styles.accordionItem} ${styles.animated}` : ""
				}
			>
				<label htmlFor="myInput">Name</label>
				<input type="text" />
				<label htmlFor="">Category</label>
				<input type="text" />
				<label htmlFor="">Address</label>
				<input type="text" />
				<label htmlFor="">Latitude</label>
				<input type="text" />
				<label htmlFor="">Longitude</label>
				<input type="text" />
			</div>
		);
	};

	// Function to show div with input and details
	const [activeIndex, setActiveIndex] = useState(-1);
	const handleClick = (index) => {
		setActiveIndex(index === activeIndex ? -1 : index);
		console.log("clicked");
	};

	return (
		<div className={styles.accordion}>
			<h1>Vendors</h1>
			{groupedVendors.map((card, index) => (
				<div
					key={card.vendor_id}
					className={styles.classContainer}
					onClick={() => handleClick(index)}
				>
					<AccordionCard>
						<h3>{card.vendor_name}</h3>
					</AccordionCard>
					<div className={styles.accordionDrop}>
						{index === activeIndex && <AccordionItem />}
					</div>
				</div>
			))}
		</div>
	);
};

export default VendorCard;
