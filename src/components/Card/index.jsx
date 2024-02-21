import { Children, useState } from "react";
import styles from "./index.module.scss";
import { ChevronUp, ChevronDown } from "../media/icons";

const Card = ({ children }) => {
	const handleCard = () => {
		setIsOpen(!isOpen);
	};
	const [isOpen, setIsOpen] = useState(null);
	return (
		<div className={styles.card} onClick={handleCard}>
			{children}
			<div>{isOpen ? <ChevronUp /> : <ChevronDown />}</div>
		</div>
	);
};

export default Card;
