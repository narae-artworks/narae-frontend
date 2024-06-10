import classNames from 'classnames';
import styles from './celebrate-description.module.scss';

type Prop = {
    description: string,
    className?: string,
}

export default function CelebrateDescription({ description, className } : Prop) {
    return <a className={classNames(styles.descriptionContainer, className)}>
        <div className={styles.descriptionBox}>
            <div className={styles.description}>
                <span>{ description }</span>
            </div>
        </div>
    </a>
}