import styles from "./index.module.scss";
import { Circles } from "../media/icons";

const MediaButton = (selected, vendor_id) => {
	return (
		<div
			className={
				vendor_id === selected
					? `${styles.mediaButton} ${styles.animated}`
					: `${styles.mediaButton}`
			}
		>
			<div className={styles.circle}>
				<Circles />
			</div>
			<div>
				<button className={styles.btnCancel}>Cancel</button>
				<button className={styles.btnSave}> Save</button>
			</div>
		</div>
	);
};

export default MediaButton;
