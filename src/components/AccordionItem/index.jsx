import styles from "./index.module.scss";

//Accordion component the one is not visible
const AccordionItem = ({ selected }) => {
	// console.log(vendor_id);
	return (
		<div
			className={
				selected
					? `${styles.content} ${styles.contentShow}`
					: `${styles.content}`
			}
		>
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
