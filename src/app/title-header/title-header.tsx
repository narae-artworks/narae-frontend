import classNames from 'classnames';
import styles from './title-header.module.scss';

type Prop = {
    title: string;
    className?: string;
};

export default function TitleHeader({title, className}: Prop) {
    return <div className={classNames(styles.container, className)}>
        <h1 className={styles.text}>{title}</h1>
        <div className={styles.background}></div>
    </div>
}