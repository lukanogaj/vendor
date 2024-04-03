import styles from "./index.module.scss";
import { useState } from "react";
import dataForVendors from "../../VendorDataArray";

//Accordion component the one is not visible
const AccordionItem = () => {
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

export default AccordionItem;
