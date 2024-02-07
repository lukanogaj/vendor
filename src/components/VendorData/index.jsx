import styles from "./index.module.scss";
// import dataForVendors from "../../VendorDataArray";

const VendorDataForm = () => {
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

export default VendorDataForm;
