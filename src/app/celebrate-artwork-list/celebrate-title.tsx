import classNames from 'classnames';
import styles from './celebrate-title.module.scss';

type Prop = {
    title: string,
    className?: string,
}

export default function CelebrateTitle({ title, className } : Prop) {
    return <a className={classNames(styles.titleContainer, className)}>
        <div className={styles.title}> <span>{ title }</span> </div>
    </a>
}