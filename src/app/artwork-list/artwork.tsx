import classNames from 'classnames';
import styles from './artwork.module.scss';

type Prop = {
    href: string,
    thumbnailSrc: string,
    title: string,
    className?: string
}

export default function Artwork({ href, thumbnailSrc, title, className } : Prop) {
    return <a href={href} className={classNames(styles.artwork, className)}>
        <img src={thumbnailSrc} className={styles.thumbnail}></img>
        <div className={styles.title}>
            <span>{ title }</span>
        </div>
    </a>
}