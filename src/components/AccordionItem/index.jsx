import styles from "./index.module.scss";

//Accordion component with content to be show and hide
const AccordionItem = ({ selected, vendor_id }) => {
	return (
		<div
			className={
				vendor_id === selected
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
