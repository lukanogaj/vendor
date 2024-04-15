import styles from "./index.module.scss";
import { useState } from "react";
import dataForVendors from "../../VendorDataArray";

//Accordion component the one is not visible
const AccordionItem = () => {
	return (
		<div className={styles.accordionItem}>
			<label type="text">Name</label>
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
