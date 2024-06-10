import classNames from 'classnames';
import styles from './notice.module.scss';

type Prop = {
    href: string,
    thumbnailSrc: string,
    header: string,
    title: string,
    description: string,
    date: string,
    className?: string
}

export default function Notice({ href, thumbnailSrc, header, title, description, date, className } : Prop) {
    return <a href={href} className={classNames(styles.notice, className)}>
        <img src={thumbnailSrc} className={styles.thumbnail}></img>
        <div className={styles.content}>
            <div className={styles.header}> <span>{ header }</span> </div>
            <div className={styles.title}> <span>{ title }</span> </div>
            <div className={styles.description}> <span>{ description }</span> </div>
            <div className={styles.date}> <span>{ date }</span> </div>
        </div>
    </a>
}