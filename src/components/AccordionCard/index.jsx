import { Children, useState } from "react";
import AccordionItem from "../AccordionItem";
// import VendorData from "../VendorData";

import styles from "./index.module.scss";
import { ChevronUp, ChevronDown } from "../media/icons";

const AccordionCard = ({ children }) => {
	const handleAccordionClick = () => {
		setIsOpen(!isOpen);
	};
	const [isOpen, setIsOpen] = useState(null);
	return (
		<div className={styles.accordionContainer}>
			<div className={styles.card} onClick={handleAccordionClick}>
				{children}
				<div>{isOpen ? <ChevronUp /> : <ChevronDown />}</div>
			</div>
			{isOpen && <AccordionItem />}
		</div>
	);
};

export default AccordionCard;
