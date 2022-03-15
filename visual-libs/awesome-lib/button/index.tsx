import img from './png-transparent-pink-paint-illustration-ink-brush-pen-red-hair-brush-purple-ink-text.png';
import styles from './biba.less';
import Image from 'next/image';

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
