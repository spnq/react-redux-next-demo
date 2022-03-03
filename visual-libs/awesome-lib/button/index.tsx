import img from './png-transparent-pink-paint-illustration-ink-brush-pen-red-hair-brush-purple-ink-text.png';
import styles from './biba.less';

export function AwesomeButton() {
	console.log(styles);
	return (
		<>
			<img src={img.src} style={{width: 100, height:100}} alt="" />
			<button className={styles.awesomeButton}>AwesomeButton <span className={styles.biba}>nbmnbmb</span> </button>
		</>
	);
}
