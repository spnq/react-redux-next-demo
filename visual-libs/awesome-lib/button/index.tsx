
import img from './random.jpeg';
import styles from './biba.less';
import {Image} from '@defaults/image';

export function AwesomeButton() {
	return (
		<>
			<Image src={img} width={100} height={100} alt="" />
			<button className={styles.awesomeButton}>
				AwesomeButton <span className={styles.awesomeButtonbiba}>nbmnbmb</span>
			</button>
		</>
	);
}
