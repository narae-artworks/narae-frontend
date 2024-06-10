import classNames from 'classnames';
import styles from './comment.module.scss';

type Prop = {
    id: string
    href: string,
    thumbnailSrc: string,
    name: string,
    comment: string,
    className?: string,
}

export default function Comment({ id, href, thumbnailSrc, name, comment, className } : Prop) {
    return <a className={classNames(styles.commentBox, className)}>
        <img src={thumbnailSrc} className={styles.profileImg}></img>
        <div className={styles.commentCard}>
            <div className={styles.cardContainer}>
                <div className={styles.name}>{name}</div>
                <div className={styles.comment}>{comment}</div>
            </div>
        </div>
    </a>
}