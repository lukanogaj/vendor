import { Children, useState } from "react";
// import AccordionItem from "../AccordionItem";
// import VendorData from "../VendorData";

import styles from "./index.module.scss";
import { ChevronUp, ChevronDown } from "../media/icons";

const AccordionCard = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	// const handleAccordionClick = (index) => {
	// 	if (index !== isOpen) {
	// 		setIsOpen(index);
	// 	} else {
	// 		setIsOpen(false);
	// 	}
	// };
	return (
		<div className={styles.accordionContainer}>
			<div className={styles.card}>
				{children}
				<div>{isOpen ? <ChevronUp /> : <ChevronDown />}</div>
			</div>

			{/* {isOpen ? <AccordionItem /> : ""} */}
		</div>
	);
};

export default AccordionCard;
