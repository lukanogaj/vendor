import { Children, useState } from "react";
// import AccordionItem from "../AccordionItem";
// import VendorData from "../VendorData";

import styles from "./index.module.scss";
import { ChevronUp, ChevronDown } from "../media/icons";

const AccordionCard = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleChevron = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.accordionContainer}>
			<div className={styles.card} onClick={() => handleChevron()}>
				{children}
				<div>{isOpen ? <ChevronUp /> : <ChevronDown />}</div>
			</div>

		</div>
	);
};

export default AccordionCard;
