import styles from './stacked-inputs.module.less';


export function StackedInputs({children} : {children: JSX.Element[]}) {
	return (
		<div className={styles.inputs}>
			{children}
		</div>
	);
}
