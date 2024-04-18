import styles from "./index.module.scss";
import { Circles } from "../media/icons";

const MediaButton = (selected, vendor_id) => {
	return (
		<div
			className={
				// styles.mediaButton
				vendor_id === selected
					? `${styles.mediaButton} ${styles.animated}`
					: `${styles.mediaButton}`
			}
		>
			<div className={styles.circle}>
				<Circles />
			</div>
			{/* <Circles /> */}
			<div className={styles.btn}>
				<button className={styles.btnCancel}>Cancel</button>
				<button className={styles.btnSave}> Save</button>
			</div>
		</div>
	);
};

export default MediaButton;
