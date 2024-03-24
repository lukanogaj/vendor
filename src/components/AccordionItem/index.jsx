import styles from "./index.module.scss";
// import dataForVendors from "../../VendorDataArray";
import { useState } from "react";

const AccordionItem = () => {
	return (
		<div className={styles.form}>
			<div className={styles.dataCard}>
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
		</div>
	);
};

export default AccordionItem;